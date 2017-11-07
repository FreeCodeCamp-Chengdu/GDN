const router = require('express').Router();
const qs = require('querystring');
const request = require('request');
const schedule = require('node-schedule'); 
const apikey =  process.env.SMS_APIKEY;

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
    time.setDate(time.getDate()-2);   //活动前两天通知
    schedule.scheduleJob(time, () => {
        request.post(url, {form:post_data}, (reqb, resb, result) => {
            console.log(result);
        })
    });
    // request.post(url, {form:post_data}, (reqb, resb, result) => {
    //     console.log(result);
    // })
    res.send(`成功！将于${time.toString()}发送短信`);
});

module.exports = router;