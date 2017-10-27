'use strict';

const LeanCloud = require('leanengine');


module.exports = {
    validate:       function (data) {

        data.title = (data.title || '').trim();

        if ( data.title )  return data;

        var error = new ReferenceError('Parameter "title" is required');

        error.code = 400;

        throw error;
    },
    send_result:    function (response, promise) {

        return  promise.then(function (data) {

            response.json(
                (data.toJSON instanceof Function)  ?  data.toJSON()  :  data
            ).end();

        },  function (error) {

            response.status(error.code || error.status || 400).json( error ).end();
        });
    },
    query:          function (table, include, where, parameter) {

        Object.assign(parameter, {
            rows:       parameter.rows || 10,
            page:       parameter.page || 1,
            keyWord:    (parameter.keyWord || '').trim()
        });

        include = include || '';

        if ( include[0] )
            include = include.map(function () {

                return  `include ${arguments[0]}`;

            }).join(', ')  +  ', ';


        if ((where || '')[0] && parameter.keyWord)
            where = `where (${
                where.map(function () {

                    return  `${arguments[0]} like ${
                        JSON.stringify(`%${parameter.keyWord}%`)
                    }`;
                }).join(' or ')
            })`;
        else
            where = '';


        return Promise.all([
            LeanCloud.Query.doCloudQuery(
                `select ${include}* from ${table} ${where} limit ${
                    (parameter.page - 1) * parameter.rows},${parameter.rows}`
            ),
            LeanCloud.Query.doCloudQuery(
                `select count(*) from ${table} ${where}`
            )
        ]).then(function (data) {

            return {
                list:     data[0].results,
                total:    data[1].count
            };
        });
    },
    fetch_form:     function (form) {

        return  Promise.all(form.get('questions').map(function (question) {

            return Promise.all(
                (question.get('options') || [ ]).map(function (option) {

                    return LeanCloud.Object
                        .createWithoutData('Option', option.id).fetch();
                })
            ).then(function () {

                question.set('options', arguments[0]);
            });
        })).then(function () {  return form;  });
    }
};
