const router = require('express').Router();
const qs = require('querystring');
const request = require('request');
const schedule = require('node-schedule');
const apikey =  process.env.SMS_APIKEY;

/**
 * @api {post} /sms/batch_send/:tplid 按模板群发通知短信
 * @apiName batch_send SMS
 * @apiDescription  短信发送基于“云片”(https://www.yunpian.com/)平台,请先于平台上获取appkey，并审核签名/模板
 * @apiGroup sms
 * @apiParam (URL参数) {Number} tplid 要发送的短信模板ID
 * @apiParam {Object} data 传送的模板参数，请注意key要与模板中对应
 * @apiParam {String} time 活动开始的时间，短信自动将于活动开始前2天发送
 * @apiParam {String[]} mobile 要发送的手机号码列表
 * @apiSuccess {String} msg 成功！将于XXX时发送短信
 */

router.post('/batch_send/:tplid', function(req, res) {
    const url  = "https://sms.yunpian.com/v2/sms/tpl_batch_send.json";
    const tpl_id = req.params.tplid;   //选择模板
    const tpl_value = req.body.data;   //参数对象，请注意与相应模板中变量名对应
    const mobile = req.body.mobile.join();
    const post_data = {
        'apikey': apikey,
        'mobile': mobile,
        'tpl_id': tpl_id,
        'tpl_value':qs.stringify(tpl_value),
        };
    let time = new Date(req.body.time);  //活动时间，字符串
    if (time.getDate() == time.substring(time.length-2)) {
        time.setDate(time.getDate()-2);   //活动前两天通知
        schedule.scheduleJob(time, () => {
            request.post(url, {form:post_data}, (reqb, resb, result) => {
                console.log(result);
            })
        });
        // request.post(url, {form:post_data}, (reqb, resb, result) => {
        //     console.log(result);
        // })
        res.send(`成功！将于${time.toString()}发送短信`)
    } else{
        res.error('please set right time');
    }
});

/**
 * @api {post} /sms/batch_send/ 群发通知短信
 * @apiName batch_send SMS
 * @apiDescription  短信发送基于“云片”(https://www.yunpian.com/)平台,请先于平台上获取appkey，并审核签名/模板
 * @apiGroup sms
 * @apiParam {String} text 发送的内容，会与模板已审核模板自动匹配
 * @apiParam {String} time 活动开始的时间，短信自动将于活动开始前2天发送
 * @apiParam {String[]} mobile 要发送的手机号码列表
 * @apiSuccess {String} msg 成功！将于XXX时发送短信
 */

router.post('/batch_send', function(req, res) {
    const url  = "https://sms.yunpian.com/v2/sms/batch_send.json";
    const text = req.body.text;   //参数对象，请注意与相应模板中变量名对应
    const mobile = req.body.mobile.join();
    const post_data = {
        'apikey': apikey,
        'mobile': mobile,
        'text': text,
        };
        let time = new Date(req.body.time);  //活动时间，字符串
        if (time.getDate() == time.substring(time.length-2)) {
            time.setDate(time.getDate()-2);   //活动前两天通知
            schedule.scheduleJob(time, () => {
                request.post(url, {form:post_data}, (reqb, resb, result) => {
                    console.log(result);
                })
            });
            res.send(`成功！将于${time.toString()}发送短信`);
        } else{
            res.error('please set right time');
        }
});

router.post('/get_shorturl', function(req, res) {
    const url = 'https://sms.yunpian.com/v2/short_url/shorten.json';
    const longUrl = req.body.url;
    const post_data = {
        'apikey': apikey,
        'long_url': longUrl,
        'stat_duration': 3
    }
    request.post(url, {form:post_data}, (reqb, resb, result) => {
        if(result.msg == 'OK'){
            res.send(result.short_url);
        } else {
            res.send(result);
        }
    });
})


/**
 * @api {get} /sms/queryreply 查询回复短信
 * @apiName query reply SMS
 * @apiDescription 查询72小时之内回复的短信数据（一次最多查询100条），注意，已成功获取的数据将会删除，请妥善处理接口返回的数据。
 * @apiGroup sms
 * @apiSuccess {Object[]} replyObj 回复短信列表
 * @apiSuccess {String} replyObj.id 唯一序列号
 * @apiSuccess {String} replyObj.mobile 回复短信的手机号
 * @apiSuccess {String} replyObj.reply_time 回复短信的时间
 * @apiSuccess {String} replyObj.text 回复的短信内容
 * @apiSuccess {String} replyObj.extend 您发送时传入的扩展子号，未申请扩展功能或者未传入时为空串
 * @apiSuccess {String} replyObj.base_extend		系统分配的扩展子号
 * @apiSuccess {String} replyObj._sign 签名字段
 */

router.get('/queryreply', function(req, res) {
    const url  = "https://sms.yunpian.com/v2/sms/pull_reply.json";
    const post_data = {
        'apikey': apikey,
        'page_size': 100,
        };
    request.post(url, {form:post_data}, (reqb, resb, result) => {
        res.send(result);
    });
})

module.exports = router;
