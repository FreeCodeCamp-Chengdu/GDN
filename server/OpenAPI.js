'use strict';

const router = require('express').Router(),
      Request = require('request-promise-native');



router.get('/university',  function (request, response) {

    Request({
        uri:     `http://data.api.gkcx.eol.cn/soudaxue/queryschool.html?messtype=json&keyWord1=${
            encodeURIComponent( request.query.keyWord )
        }`,
        json:    true
    }).then(function (data) {

        response.json({
            total:    parseInt( data.totalRecord.num ),
            list:     data.school
        });
    });
});


module.exports = router;
