define({ "api": [
  {
    "type": "get",
    "url": "/hackathon/activity",
    "title": "获取活动信息",
    "name": "GetActivity",
    "group": "activity",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "activityID",
            "description": "<p>指定查询单次活动的ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "activityObjs",
            "description": "<p>活动列表，若指定ID则为Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityObjs.name",
            "description": "<p>Activity's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityObjs.desc",
            "description": "<p>Activity's describe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityObjs.banner",
            "description": "<p>Banner's URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityObjs.date",
            "description": "<p>Activity's date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityObjs.start",
            "description": "<p>Start time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityObjs.end",
            "description": "<p>End time</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "activityObjs.reward",
            "description": "<p>Rewards list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityObjs.location",
            "description": "<p>Activity's location</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/hackathon.js",
    "groupTitle": "activity"
  },
  {
    "type": "post",
    "url": "/hackathon/activity",
    "title": "上传活动",
    "name": "UploadActivity",
    "group": "activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>活动相关数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Activity's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.desc",
            "description": "<p>Activity's describe</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.banner",
            "description": "<p>Banner's URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.date",
            "description": "<p>Activity's date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.start",
            "description": "<p>Start time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.end",
            "description": "<p>End time</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "data.reward",
            "description": "<p>Rewards list</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.location",
            "description": "<p>Activity's location</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityID",
            "description": "<p>活动ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/hackathon.js",
    "groupTitle": "activity"
  },
  {
    "type": "get",
    "url": "/hackathon/repos/detail/:repoID",
    "title": "获取单个项目详情",
    "name": "GetRepoDeatil",
    "group": "repos",
    "parameter": {
      "fields": {
        "URL参数": [
          {
            "group": "URL参数",
            "type": "Number",
            "optional": false,
            "field": "repoID",
            "description": "<p>指定项目仓库ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "repoObj",
            "description": "<p>项目详情对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repoObj.name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repoObj.activityID",
            "description": "<p>属于的活动ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repoObj.owner",
            "description": "<p>项目拥有者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repoObj.desc",
            "description": "<p>项目描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "repoObj.members",
            "description": "<p>参与成员列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/hackathon.js",
    "groupTitle": "repos"
  },
  {
    "type": "get",
    "url": "/hackathon/repos",
    "title": "获取项目仓库列表",
    "name": "GetReposList",
    "group": "repos",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "activityID",
            "description": "<p>指定活动ID限定列表范围</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reposList",
            "description": "<p>项目仓库列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repoList.name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repoList.activityID",
            "description": "<p>属于的活动ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repoList.objectID",
            "description": "<p>项目ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/hackathon.js",
    "groupTitle": "repos"
  },
  {
    "type": "post",
    "url": "/hackathon/repos",
    "title": "上传项目仓库",
    "name": "UploadRepo",
    "group": "repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>项目详情对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.activityID",
            "description": "<p>属于的活动ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.owner",
            "description": "<p>项目拥有者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.desc",
            "description": "<p>项目描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "data.members",
            "description": "<p>参与成员列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repoID",
            "description": "<p>项目ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/hackathon.js",
    "groupTitle": "repos"
  },
  {
    "type": "post",
    "url": "/sms/batch_send/:tplid",
    "title": "群发通知短信",
    "name": "batch_send_SMS",
    "description": "<p>短信发送基于“云片”(https://www.yunpian.com/)平台,请先于平台上获取appkey，并审核签名/模板</p>",
    "group": "sms",
    "parameter": {
      "fields": {
        "URL参数": [
          {
            "group": "URL参数",
            "type": "Number",
            "optional": false,
            "field": "tplid",
            "description": "<p>要发送的短信模板ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>传送的模板参数，请注意key要与模板中对应</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>活动开始的时间，短信自动将于活动开始前2天发送</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "mobile",
            "description": "<p>要发送的手机号码列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功！将于XXX时发送短信</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/sms.js",
    "groupTitle": "sms"
  },
  {
    "type": "get",
    "url": "/sms/queryreply",
    "title": "查询回复短信",
    "name": "query_reply_SMS",
    "description": "<p>查询72小时之内回复的短信数据（一次最多查询100条），注意，已成功获取的数据将会删除，请妥善处理接口返回的数据。</p>",
    "group": "sms",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "replyObj",
            "description": "<p>回复短信列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyObj.id",
            "description": "<p>唯一序列号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyObj.mobile",
            "description": "<p>回复短信的手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyObj.reply_time",
            "description": "<p>回复短信的时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyObj.text",
            "description": "<p>回复的短信内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyObj.extend",
            "description": "<p>您发送时传入的扩展子号，未申请扩展功能或者未传入时为空串</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyObj.base_extend",
            "description": "<p>系统分配的扩展子号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replyObj._sign",
            "description": "<p>签名字段</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/sms.js",
    "groupTitle": "sms"
  }
] });