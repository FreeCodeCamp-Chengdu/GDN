'use strict';

const router = require('express').Router(),
      LeanCloud = require('leanengine'),
      Utility = require('./FormEditor/utility');



router.get('/OAuth',  function (request, response) {

    var user = request.currentUser, account;

    if ( user ) {

        account = {
            email:    user.get('email'),
            phone:    user.get('mobilePhoneNumber')
        };

        for (var name in user.get('authData'))
            account[ name ] = user.get( name );
    }

    response.json(account || { });
});


router.get('/signOut',  function (request, response) {

    request.currentUser.logOut();

    response.clearCurrentUser();

    response.redirect('/');
});


router.all('/profile',  function (request, response) {

    var user = request.currentUser, data = request.body, error;

    if ( user ) {
        switch ( request.method.toUpperCase() ) {
            case 'PUT':    {
                var Email = user.get('email');

                return  Utility.send_result(
                    response,
                    user.save(
                        {email: data.email, profile: data},  {user: user}
                    ).then(function () {

                        return  (data.email !== Email)  ?
                            LeanCloud.User.requestEmailVerify(
                                data.email
                            )  :
                            arguments[0];
                    })
                );
            }
            case 'GET':
                return response.json(Object.assign(
                    {
                        emailVerified:          user.get('emailVerified'),
                        mobilePhoneVerified:    user.get('mobilePhoneVerified')
                    },
                    user.get('profile')
                ));
            default:       {
                error = new URIError('Method Not Allowed');

                error.code = 405;
            }
        }
    } else {
        error = new ReferenceError('Unauthorized');

        error.code = 401;
    }

    throw error;
});


module.exports = router;
