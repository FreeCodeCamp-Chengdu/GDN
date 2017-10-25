'use strict';

const router = require('express').Router(),
      LeanCloud = require('leanengine'),
      Utility = require('./utility');


//  数据模型

const Form = LeanCloud.Object.extend('Form'),
      Question = LeanCloud.Object.extend('Question'),
      Option = LeanCloud.Object.extend('Option');


//  表单创建

router.post('/form',  function (request, response) {

    Utility.validate( request.body ).questions = [ ];

    Utility.send_result(response,  (new Form()).save( request.body ));
});


router.post('/form/:id/question',  function (request, response) {

    Utility.validate( request.body ).options = [ ];

    Utility.send_result(
        response,
        (new Question()).save( request.body ).then(function (question) {

            var form = LeanCloud.Object.createWithoutData(
                    'Form', request.params.id
                );

            form.add('questions', question);

            return form.save();
        })
    );
});

router.post('/question/:id/option',  function (request, response) {

    Utility.validate( request.body );

    Utility.send_result(
        response,
        (new Option()).save( request.body ).then(function (option) {

            var question = LeanCloud.Object.createWithoutData(
                    'Question', request.params.id
                );

            question.add('options', option);

            return question.save();
        })
    );
});


//  表单查询

router.get('/form',  function (request, response) {

    Utility.send_result(
        response,
        Utility.query(
            'Form',  ['questions'],  ['title', 'description'],  request.query
        ).then(function (data) {

            return Promise.all(
                data.list.map( Utility.fetch_form )
            ).then(function () {

                data.list = arguments[0];

                return data;
            });
        })
    );
});

router.get('/form/:id',  function (request, response) {

    var query = new LeanCloud.Query('Form');

    query.include(['questions']);

    Utility.send_result(
        response,  query.get( request.params.id ).then( Utility.fetch_form )
    );
});


//  问题查询

router.get('/question',  function (request, response) {

    Utility.send_result(
        response,
        Utility.query(
            'Question',  ['options'],  ['title', 'description'],  request.query
        )
    );
});


router.get('/option',  function (request, response) {

    Utility.send_result(
        response,
        Utility.query(
            'Option',  null,  ['title', 'description'],  request.query
        )
    );
});


//  表单修改

router.put('/form/:id',  function (request, response) {

    var form = LeanCloud.Object.createWithoutData('Form', request.params.id);

    Utility.send_result(response,  form.save( request.body ));
});

router.put('/form/:x/question/:id',  function (request, response) {

    var form = LeanCloud.Object.createWithoutData('Question', request.params.id);

    Utility.send_result(response,  form.save( request.body ));
});

router.put('/question/:x/option/:id',  function (request, response) {

    var form = LeanCloud.Object.createWithoutData('Option', request.params.id);

    Utility.send_result(response,  form.save( request.body ));
});



module.exports = router;
