// 加载系统模块
const path = require('path');

// 加载配置模块
const pkg = require(path.resolve(__dirname, '../package.json'));

const {
  NODE_PORT = 3000,
  APPID = '/api/v1/webapi'
} = process.env;

module.exports = {
  name: pkg.name,
  port: NODE_PORT,
  appid: APPID
}