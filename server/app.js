'use strict';

const Express = require('express'),
      bodyParser = require('body-parser'),
      LeanCloud = require('leanengine');

const app = Express();


/* ---------- Express 中间件 ---------- */

//  HTTP 基础中间件

app.get('/server/*',  function () {

    arguments[1].status(404).end();
});

app.use( Express.static('./') );

app.use( require('cookie-parser')() );

app.use( bodyParser.json() );

app.use( bodyParser.urlencoded({ extended: false }) );

//  LeanCloud 云引擎中间件

app.use( require('connect-timeout')('15s') );

app.use( LeanCloud.express() );

app.enable('trust proxy');

app.use( LeanCloud.Cloud.HttpsRedirect() );

app.use(LeanCloud.Cloud.CookieSession({
    secret:       process.env.GITHUB_APP_SECRET,
    maxAge:       3600000,
    fetchUser:    true
}));

//  GitHub API 代理

app.use('/github', require('cors')({
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
}), require('express-github')(
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
            'page/User/detail.html?data=user'
        ).toString('base64')
    }
));


/* ---------- RESTful API 路由 ---------- */




/* ---------- 异常处理 ---------- */

app.use(function(request, response, next) {

    // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器

    if ( response.headersSent )  return;

    var error = new Error('Not Found');

    error.status = 404;

    next( error );
});


module.exports = app;
