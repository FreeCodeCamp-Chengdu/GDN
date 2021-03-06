define({ "api": [
  {
    "type": "delete",
    "url": "/file",
    "title": "删除文件",
    "name": "deleteFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>文件 URL</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/File/index.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file",
    "title": "上传文件",
    "name": "postFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>文件二进制数据</p>"
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
            "field": "file",
            "description": "<p>文件列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file.url",
            "description": "<p>文件 URL</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/File/index.js",
    "groupTitle": "File"
  },
  {
    "type": "delete",
    "url": "/hackathon/:id",
    "title": "删除黑客松",
    "name": "deleteHackathon",
    "version": "1.0.0",
    "group": "Hackathon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/index.js",
    "groupTitle": "Hackathon"
  },
  {
    "type": "get",
    "url": "/hackathon/:id",
    "title": "查看黑客松详情",
    "name": "getHackathon",
    "version": "1.0.0",
    "group": "Hackathon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
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
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageURL",
            "description": "<p>题图 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "creator.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "editor",
            "description": "<p>编辑者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "editor.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "editor.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/index.js",
    "groupTitle": "Hackathon"
  },
  {
    "type": "get",
    "url": "/hackathon",
    "title": "查询黑客松",
    "name": "listHackathon",
    "version": "1.0.0",
    "group": "Hackathon",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.imageURL",
            "description": "<p>题图 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>结果列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.creator.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.createdAt",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor",
            "description": "<p>编辑者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.editor.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.updatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>结果总数</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/index.js",
    "groupTitle": "Hackathon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rows",
            "defaultValue": "10",
            "description": "<p>结果行数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>结果页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyWord",
            "description": "<p>关键词</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/hackathon",
    "title": "发起黑客松",
    "name": "postHackathon",
    "version": "1.0.0",
    "group": "Hackathon",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/index.js",
    "groupTitle": "Hackathon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..100",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imageURL",
            "description": "<p>题图 URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..100",
            "optional": true,
            "field": "location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "100..",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/hackathon/:id",
    "title": "更新黑客松详情",
    "name": "updateHackathon",
    "version": "1.0.0",
    "group": "Hackathon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..100",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imageURL",
            "description": "<p>题图 URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..100",
            "optional": true,
            "field": "location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "100..",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/index.js",
    "groupTitle": "Hackathon"
  },
  {
    "type": "delete",
    "url": "/member/:id",
    "title": "移除队籍",
    "name": "deleteMember",
    "version": "1.0.0",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Member.js",
    "groupTitle": "Member"
  },
  {
    "type": "get",
    "url": "/member/:id",
    "title": "查看队友详情",
    "name": "getMember",
    "version": "1.0.0",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
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
            "field": "role",
            "description": "<p>用户角色</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>邀请状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user.github",
            "description": "<p>GitHub 用户详情</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Member.js",
    "groupTitle": "Member"
  },
  {
    "type": "get",
    "url": "/team/:tid/member",
    "title": "查询队友",
    "name": "listMember",
    "version": "1.0.0",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tid",
            "description": "<p>团队 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rows",
            "defaultValue": "10",
            "description": "<p>结果行数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>结果页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyWord",
            "description": "<p>关键词</p>"
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
            "field": "list.role",
            "description": "<p>用户角色</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.state",
            "description": "<p>邀请状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.user",
            "description": "<p>用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.user.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.user.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>结果列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.creator.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.createdAt",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor",
            "description": "<p>编辑者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.editor.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.updatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>结果总数</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Member.js",
    "groupTitle": "Member"
  },
  {
    "type": "post",
    "url": "/team/:tid/member",
    "title": "添加队籍",
    "name": "postMember",
    "version": "1.0.0",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tid",
            "description": "<p>团队 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "defaultValue": "member",
            "description": "<p>用户角色</p>"
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
            "field": "id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>邀请状态</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Member.js",
    "groupTitle": "Member"
  },
  {
    "type": "put",
    "url": "/member/:id",
    "title": "更新队友详情",
    "name": "updateMember",
    "version": "1.0.0",
    "group": "Member",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "defaultValue": "member",
            "description": "<p>用户角色</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Member.js",
    "groupTitle": "Member"
  },
  {
    "type": "delete",
    "url": "/team/:id",
    "title": "解散团队",
    "name": "deleteTeam",
    "version": "1.0.0",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Team.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/team/:id",
    "title": "查看团队详情",
    "name": "getTeam",
    "version": "1.0.0",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
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
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logoURL",
            "description": "<p>标志 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creator.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "creator.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "editor",
            "description": "<p>编辑者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "editor.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "editor.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Team.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/hackathon/:hid/team",
    "title": "查询黑客松团队",
    "name": "listHackathonTeam",
    "version": "1.0.0",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>黑客松 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rows",
            "defaultValue": "10",
            "description": "<p>结果行数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>结果页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyWord",
            "description": "<p>关键词</p>"
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
            "field": "list.title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.logoURL",
            "description": "<p>标志 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>结果列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.creator.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.createdAt",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor",
            "description": "<p>编辑者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.editor.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.updatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>结果总数</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Team.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/team",
    "title": "全局查询团队",
    "name": "listTeam",
    "version": "1.0.0",
    "group": "Team",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.logoURL",
            "description": "<p>标志 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.description",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>结果列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.creator.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.createdAt",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor",
            "description": "<p>编辑者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.editor.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.updatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>结果总数</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Team.js",
    "groupTitle": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rows",
            "defaultValue": "10",
            "description": "<p>结果行数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>结果页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyWord",
            "description": "<p>关键词</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/hackathon/:hid/team",
    "title": "发起团队",
    "name": "postTeam",
    "version": "1.0.0",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hid",
            "description": "<p>黑客松 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..10",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "logoURL",
            "description": "<p>标志 URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..100",
            "optional": true,
            "field": "location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10..100",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
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
            "field": "id",
            "description": "<p>唯一索引</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Team.js",
    "groupTitle": "Team"
  },
  {
    "type": "put",
    "url": "/team/:id",
    "title": "更新团队详情",
    "name": "updateTeam",
    "version": "1.0.0",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..10",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "logoURL",
            "description": "<p>标志 URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..100",
            "optional": true,
            "field": "location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "10..100",
            "optional": false,
            "field": "description",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "filename": "server/Hackathon/Team.js",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/university/specialty",
    "title": "查询专业",
    "name": "listSpecialty",
    "version": "1.0.0",
    "group": "University",
    "filename": "server/OpenAPI.js",
    "groupTitle": "University",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rows",
            "defaultValue": "10",
            "description": "<p>结果行数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>结果页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyWord",
            "description": "<p>关键词</p>"
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
            "field": "list",
            "description": "<p>结果列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.creator.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.createdAt",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor",
            "description": "<p>编辑者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.editor.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.updatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>结果总数</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user",
    "title": "全局查询用户",
    "name": "listUser",
    "version": "1.0.0",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>结果列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>唯一索引</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator",
            "description": "<p>创建者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.creator.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.creator.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.createdAt",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor",
            "description": "<p>编辑者</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.editor.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list.editor.github",
            "description": "<p>GitHub 用户详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "list.updatedAt",
            "description": "<p>更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>结果总数</p>"
          }
        ]
      }
    },
    "filename": "server/User.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rows",
            "defaultValue": "10",
            "description": "<p>结果行数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>结果页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyWord",
            "description": "<p>关键词</p>"
          }
        ]
      }
    }
  },
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
    "url": "/sms/get_shorturl/",
    "title": "获取链接短地址",
    "name": "batch_send_SMS",
    "group": "sms",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>需要转换的url</p>"
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
            "field": "short_url",
            "description": "<p>包换短地址的对象</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/sms.js",
    "groupTitle": "sms"
  },
  {
    "type": "post",
    "url": "/sms/batch_send/",
    "title": "延迟2天群发通知短信",
    "name": "batch_send_SMS",
    "description": "<p>短信发送基于“云片”(https://www.yunpian.com/)平台,请先于平台上获取apikey，并审核签名/模板</p>",
    "group": "sms",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>发送的内容，会与模板已审核模板自动匹配</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>活动开始的日期，短信自动将于活动开始前2天发送,格式是&quot;XXXX/XX/XX&quot;</p>"
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
    "type": "post",
    "url": "/sms/batch_send/:tplid",
    "title": "延迟2天按模板群发通知短信",
    "name": "batch_send_tpl_SMS",
    "description": "<p>短信发送基于“云片”(https://www.yunpian.com/)平台,请先于平台上获取apikey，并审核签名/模板</p>",
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
            "description": "<p>活动开始的日期，短信自动将于活动开始前2天发送,格式是&quot;XXXX/XX/XX&quot;</p>"
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
  },
  {
    "type": "post",
    "url": "/sms/quick_send/",
    "title": "立即群发通知短信",
    "name": "quick_send_SMS",
    "description": "<p>短信发送基于“云片”(https://www.yunpian.com/)平台,请先于平台上获取apikey，并审核签名/模板</p>",
    "group": "sms",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>发送的内容，会与模板已审核模板自动匹配</p>"
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
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>发送结果</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/sms.js",
    "groupTitle": "sms"
  }
] });
