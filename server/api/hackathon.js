const router = require('express').Router();
const AV = require('leancloud-storage');


router.get('/activity', function(req, res) {
   const activityQuery  = new AV.Query('FCC_Activity');
   if(req.query.activityID){
       activityQuery.get(req.query.activityID).then(function (result) {
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
    const FccActivity = AV.Object.extend('FCC_Activity');
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


router.post('/repos', function (req, res) {
    const Repos = AV.Object.extend('Repos');
    const repos = new Repos();
    repos.set(req.body.data);
    repos.save().then(function (result) {
        // 成功保存之后，执行其他逻辑.
        res.send(result.id);
    }).catch(function (error) {
        // 异常处理
        res.send(error.message);
    });
});

router.get('/repos', function (req, res) {
    const activityID = req.param('activityID');
    const repoQuery  = new AV.Query('Repos');
    repoQuery.select(['id', 'name', 'activityID'])
    if (activityID) {
        repoQuery.equalTo('activityID',activityID);
    }
    repoQuery.find().then(function (result) {
        res.send(result);
    }).catch(function (error) {
        res.send(error);
    });
});

router.get('/repos/detail/:repoID', function (req,res) {
    const repoID = req.param('repoID');
    const repoQuery  = new AV.Query('Repos');
    if (repoID) {
        repoQuery.get(repoID).then(function (result) {
            res.send(result);
        }).catch(function (error) {
            res.send(error);
        });
    }
});//單個倉庫詳情

module.exports = router;



