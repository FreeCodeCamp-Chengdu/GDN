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

/**
 * @api {post} /sms/batch_send/:tplid 群发通知短信
 * @apiName batch_send SMS
 * @apiDescription  短信发送基于“云片”(https://www.yunpian.com/)平台,请先于平台上获取appkey，并审核签名/模板
 * @apiGroup sms
 * @apiParam (URL参数) {Number} tplid 要发送的短信模板ID
 * @apiParam {Object} data 传送的模板参数，请注意key要与模板中对应
 * @apiParam {String} time 活动开始的时间，短信自动将于活动开始前2天发送
 * @apiParam {String[]} mobile 要发送的手机号码列表
 * @apiSuccess {String} msg 成功！将于XXX时发送短信
 */ 

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