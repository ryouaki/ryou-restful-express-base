define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/webapi/test1",
    "title": "测试接口",
    "name": "test1",
    "group": "Test",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "demo",
            "defaultValue": "10000",
            "description": "<p>枚举组 10000 权限，11000 文件类型 12000 环境类型</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "信息:",
          "content": "{\n  \"comment\": \"测试\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>服务器响应消息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 0 = 成功.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": null,\n  \"msg\": \"Request successed!\",\n  \"code\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "failed",
            "description": "<p>ex 错误.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "错误返回:",
          "content": "HTTP/1.1 400 Client error\n{\n  \"data\": null,\n  \"msg\": \"错误!\",\n  \"code\": 10003\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controller/test_controller.js",
    "groupTitle": "Test"
  }
] });
