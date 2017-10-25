'use strict';

const router = require('express').Router(),
      CORS = require('cors'),
      GitHub = require('express-github'),
      LeanCloud = require('leanengine');



router.use('/github', CORS({
    origin:                  function (origin, callback) {
        if (
            (! origin)  ||
            (origin.indexOf('//localhost') > -1)  ||
            (origin.indexOf( process.env.WEB_DOMAIN )  >  -1)
        )
            callback(null, true);
        else
            callback(new Error('Not allowed by CORS'));
    },
    credentials:             true,
    optionsSuccessStatus:    200
}), GitHub(
    {
        AppID:        process.env.GITHUB_APP_ID,
        AppSecret:    process.env.GITHUB_APP_SECRET,
        scope:        ['user:follow', 'public_repo']
    },
    {
        setSession:    function (request, response, data) {

            return LeanCloud.User.signUpOrlogInWithAuthData(
                {
                    uid:             data.id + '',
                    access_token:    data.AccessToken,
                    expires_in:      Math.ceil(Date.now() / 1000 + 60 * 5)
                },
                'github'
            ).then(function (user) {

                response.saveCurrentUser( user );

                return  user.save({data: data},  {user: user});

            }).then(function () {

                response.cookie('userID', data.login);

                response.cookie('userName', data.name);

                return data;
            });
        },
        getSession:    function (request, response) {

            return  request.currentUser ? request.currentUser.get('data') : { };
        },
        successURL:    '/#!' + Buffer.from(
            'page/User/detail.html?data=github/user'
        ).toString('base64')
    }
));


module.exports = router;
