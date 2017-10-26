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

    var user = request.currentUser, error;

    if ( user ) {
        switch ( request.method.toUpperCase() ) {
            case 'PUT':
                return  Utility.send_result(
                    response,
                    user.save({profile: request.body},  {user: user})
                );
            case 'GET':
                return  response.json( user.get('profile') );
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
