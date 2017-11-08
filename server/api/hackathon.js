const router = require('express').Router();
const AV = require('leancloud-storage');

/**
 * @api {get} /hackathon/activity 获取活动信息
 * @apiName GetActivity
 * @apiGroup activity
 * @apiParam (Query) {Number} [activityID] 指定查询单次活动的ID
 * @apiSuccess {Object[]} activityObjs 活动列表，若指定ID则为Object
 * @apiSuccess {String} activityObjs.name Activity's name
 * @apiSuccess {String} activityObjs.desc  Activity's describe
 * @apiSuccess {String} activityObjs.banner Banner's URL
 * @apiSuccess {String} activityObjs.date Activity's date
 * @apiSuccess {String} activityObjs.start  Start time
 * @apiSuccess {String} activityObjs.end   End time
 * @apiSuccess {Object[]} activityObjs.reward  Rewards list
 * @apiSuccess {String} activityObjs.location  Activity's location
 */

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

 /**
 * @api {post} /hackathon/activity 上传活动
 * @apiName UploadActivity
 * @apiGroup activity
 * @apiParam {Object} data 活动相关数据
 * @apiParam {String} data.name Activity's name
 * @apiParam {String} data.desc  Activity's describe
 * @apiParam {String} data.banner Banner's URL
 * @apiParam {String} data.date Activity's date
 * @apiParam {String} data.start  Start time
 * @apiParam {String} data.end   End time
 * @apiParam {Object[]} data.reward  Rewards list
 * @apiParam {String} data.location  Activity's location
 * @apiSuccess {String} activityID 活动ID
 */

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

 /**
 * @api {post} /hackathon/repos 上传项目仓库
 * @apiName UploadRepo
 * @apiGroup repos
 * @apiParam {Object} data 项目详情对象
 * @apiParam {String} data.name 项目名称
 * @apiParam {String} data.activityID 属于的活动ID
 * @apiParam {String} data.owner 项目拥有者
 * @apiParam {String} data.desc 项目描述
 * @apiParam {Object[]} data.members 参与成员列表
 * @apiSuccess {String} repoID 项目ID
 */

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

/**
 * @api {get} /hackathon/repos 获取项目仓库列表
 * @apiName GetReposList
 * @apiGroup repos
 * @apiParam (Query) {Number} [activityID] 指定活动ID限定列表范围
 * @apiSuccess {Object[]} reposList 项目仓库列表
 * @apiSuccess {String} repoList.name 项目名称
 * @apiSuccess {String} repoList.activityID 属于的活动ID
 * @apiSuccess {String} repoList.objectID 项目ID
 */

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

/**
 * @api {get} /hackathon/repos/detail/:repoID 获取单个项目详情
 * @apiName GetRepoDeatil
 * @apiGroup repos
 * @apiParam (URL参数) {Number} repoID 指定项目仓库ID
 * @apiSuccess {Object} repoObj 项目详情对象
 * @apiSuccess {String} repoObj.name 项目名称
 * @apiSuccess {String} repoObj.activityID 属于的活动ID
 * @apiSuccess {String} repoObj.owner 项目拥有者
 * @apiSuccess {String} repoObj.desc 项目描述
 * @apiSuccess {Object[]} repoObj.members 参与成员列表
 */

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



