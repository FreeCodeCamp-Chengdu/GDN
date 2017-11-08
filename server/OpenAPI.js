'use strict';

const QueryString = require('querystring'),
      router = require('express').Router(),
      Request = require('request-promise-native'),
      Utility = require('./FormEditor/utility');



function queryEdu(type, parameter, response) {

    parameter = Object.assign({ }, parameter);

    parameter.messtype = 'json';

    Utility.send_result(
        response,
        Request({
            uri:     `http://data.api.gkcx.eol.cn/soudaxue/query${type}.html?${
                QueryString.stringify( parameter )
            }`,
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

    var data = request.query;

    queryEdu(
        'specialty',
        {
            keyWord2:    encodeURIComponent(data.keyWord || ''),
            size:        data.rows,
            page:        data.page
        },
        response
    );
});


router.get(/\/university(\/(\d+))?/,  function (request, response) {

    var data = request.query;

    queryEdu(
        'school',
        {
            schoolid:    request.params[1] || '',
            keyWord1:    encodeURIComponent(data.keyWord || ''),
            size:        data.rows,
            page:        data.page
        },
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
