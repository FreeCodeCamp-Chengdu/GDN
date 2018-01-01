'use strict';

const Express = require('express'),
      CORS = require('cors'),
      bodyParser = require('body-parser'),
      LeanCloud = require('leanengine');

const app = Express();


/* ---------- Express 中间件 ---------- */

//  HTTP 基础中间件

app.use( Express.static('./docs') );

app.use(CORS({
    origin:                  (process.env.WEB_DOMAIN || '').split('|').map(
        function (domain) {

            return `https://${domain}`;
        }
    ).concat(
        'http://localhost',
        `https://${process.env.CLOUD_APP}.leanapp.cn`
    ),
    credentials:             true,
    optionsSuccessStatus:    200
}));

app.use( require('cookie-parser')() );

app.use( bodyParser.json() );

app.use( bodyParser.urlencoded({ extended: false }) );

//  LeanCloud 云引擎中间件
/*
app.use( require('connect-timeout')('15s') );
*/
app.use( LeanCloud.express() );

app.enable('trust proxy');

app.use( LeanCloud.Cloud.HttpsRedirect() );

app.use(LeanCloud.Cloud.CookieSession({
    secret:       process.env.GITHUB_APP_SECRET,
    maxAge:       3600000,
    fetchUser:    true
}));


/* ---------- RESTful API 路由 ---------- */

app.use( require('./GitHub') );

app.use('/openAPI', require('./OpenAPI'));

app.use('/user', require('./User'));

app.use('/survey', require('./FormEditor'));

app.use('/hackathon', require('./api/hackathon'));

app.use('/sms', require('./api/sms'));



/* ---------- 异常处理 ---------- */

app.use(function(request, response, next) {

    // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器

    if ( response.headersSent )  return;

    var error = new Error('Not Found');

    error.code = 404;

    next( error );
});


module.exports = app;
