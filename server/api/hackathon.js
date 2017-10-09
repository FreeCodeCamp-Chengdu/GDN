const router = require('express').Router();
const AV = require('leancloud-storage');
const FccActivity = AV.Object.extend('FCC_Activity');


router.get('/activity', function(req, res) {
    AV.Query.doCloudQuery('select category from (select reward from FCC_Activity)').then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
    return;
   const activityQuery  = new AV.Query('FCC_Activity');
   activityQuery.select("reward.sum");
   if(req.query.id){
       activityQuery.get(req.query.id).then(function (result) {
           res.send(result);
       }).catch(function (error) {
           res.send(error);
       });
   } else{
       activityQuery.find().then(function (results) {
           res.send(results);
       }).catch(function (error) {
           res.send(error);
       });
   }
});

router.post('/activity', function (req, res) {
    const fccActivity = new FccActivity();
    fccActivity.set(req.body.data);
    fccActivity.save().then(function (result) {
        // 成功保存之后，执行其他逻辑.
        res.send(result.id);
    }).catch(function (error) {
        // 异常处理
        res.send(error.message);
    });

});


router.post('/repos/:activityID', function (req, res) {

});

router.get('/repos/:activityID/:repo', function (req, res) {
    const id = req.param('activityID');
    const repo = req.param('repo');
    const activityQuery  = new AV.Query('FCC_Activity');
    if (id) {
        activityQuery.select(['repos']);
        activityQuery.get(req.query.id).then(function (result) {
            res.send(result);
        }).catch(function (error) {
            res.send(error);
        });
    }

});//單個倉庫詳情

module.exports = router;



