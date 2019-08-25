// 加载系统模块
const path = require('path');

// 加载配置模块
const pkg = require(path.resolve(__dirname, '../package.json'));

const {
  NODE_PORT = 3000,
  APPNAME = 'RESTFUL',
  APPID = '/api/v1/webapi',
  REDIS_HOST = '192.168.22.53',
  REDIS_PORT = 6379,
  SESSION_SECRET = 'RESTFUL',
  TTL = 24 * 60 * 60 * 1000 * 7,
  DOMAIN = 'localhost',
  BODY_LIMIT = 1000,
  UPLOAD_PATH = 'uploads/'
} = process.env;

module.exports = {
  name: pkg.name,
  port: NODE_PORT,
  appid: APPID,
  bodylimit: `${BODY_LIMIT}mb`,
  uploadPath: UPLOAD_PATH,
  session: {
    host: `redis://${REDIS_HOST}:${REDIS_PORT}`,
    secret: SESSION_SECRET,
    ttl: TTL,
    domain: DOMAIN
  }
}