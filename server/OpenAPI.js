'use strict';

const router = require('express').Router(),
      Request = require('request-promise-native'),
      Utility = require('./FormEditor/utility');



function queryEdu(type, parameter, response) {

    Utility.send_result(
        response,
        Request({
            uri:     `http://data.api.gkcx.eol.cn/soudaxue/query${type}.html?messtype=json&${parameter}`,
            json:    true
        }).then(function (data) {

            return {
                total:    parseInt( data.totalRecord.num ),
                list:     data.school
            };
        })
    );
}

router.get('/university/specialty',  function (request, response) {

    queryEdu(
        'specialty',
        `keyWord2=${encodeURIComponent( request.query.keyWord )}`,
        response
    );
});


router.get(/\/university(\/(\d+))?/,  function (request, response) {

    queryEdu(
        'school',
        `schoolid=${
            request.params[1] || ''
        }&keyWord1=${
            encodeURIComponent( request.query.keyWord )
        }`,
        response
    );
});


router.all(/\/map\/(\S+)/,  function (request, response) {

    Utility.send_result(
        response,
        Request({
            uri:     `https://restapi.amap.com/v3/${
                request.originalUrl.replace(`${request.baseUrl}/map/`, '')
            }&key=${
                process.env.AMAP_KEY
            }`,
            json:    true
        })
    );
});


module.exports = router;
