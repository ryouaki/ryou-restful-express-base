const { BaseController } = require("ryou-router");

module.exports = class Test extends BaseController {
  before(req, res) {
    console.log("Request come in!" + req.originalUrl)
  }

  after(req, res) {
    console.log("Response come out!" + req.originalUrl)
  }

  /**
   * @api {get} /api/v1/webapi/test1 测试接口
   * @apiName test1
   * @apiGroup Test
   *
   * @apiParam {Number} [demo=10000] 枚举组 10000 权限，11000 文件类型 12000 环境类型
   * 
   * @apiParamExample {json} 信息:
   *     {
   *       "comment": "测试"
   *     }
   * 
   * @apiSuccess {Object} data 用户信息.
   * @apiSuccess {String} msg 服务器响应消息.
   * @apiSuccess {Number} code 状态码 0 = 成功.
   * 
   * @apiSuccessExample 成功返回:
   *     HTTP/1.1 200 OK
   *     {
   *       "data": null,
   *       "msg": "Request successed!",
   *       "code": 0
   *     }
   * @apiError failed ex 错误.
   *
   * @apiErrorExample 错误返回:
   *     HTTP/1.1 400 Client error
   *     {
   *       "data": null,
   *       "msg": "错误!",
   *       "code": 10003
   *     }
   */
  get$test1(req, res) {
    res.status(200).json({
      code: 0,
      data: null,
      msg: req.params.id
    })
  }

  get$test2$_id() {
    return {
      code: 0,
      data: null,
      msg: this.req.params.id
    }
  }

  'get /test3' () {
    return {
      code: 0,
      data: null,
      msg: this.req.params.id
    }
  }

  'get /test4' () {
    this.success(null, "test");
  }

  'get /test5/:msg' () {
    this.failed(400, this.req.params.msg, "test");
  }

  'get /session/test' () {
    if (this.req.session.views) {
      this.req.session.views++
    } else {
      this.req.session.views = 1
    }
    this.success(this.req.session, "test");
  }
}
