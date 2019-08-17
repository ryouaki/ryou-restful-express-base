module.exports = class BaseController {
  constructor(prefix) {
    this.name = this.constructor.name;
  }

  updateContext(req, res) {
    this.req = req;
    this.res = res;

    this.params = req.params;
    this.query = req.query;
  }

  before(req, res) {

  }

  after(req, res) {
    
  }

  success(data, msg) {
    this.res.status(200).json({
      code: 0,
      data: data,
      msg: msg
    }).end();
  }

  failed(code, data, msg, httpStatus = 400) {
    this.res.status(httpStatus).json({
      code: code,
      data: data,
      msg: msg
    }).end();
  }

  getProps() {
    return {
      name: this.name
    }
  }

  getMethods() {
    const props = Object.getOwnPropertyNames(this.__proto__);
    return props.filter((prop) => {
      return prop !== "constructor" && typeof this[prop] === "function";
    });
  }
}