/**
 * Name: app.js
 * Desc: 用于系统启动的主入口程序。通常在这里初始化各种中间件，设定路由
 */
// 加载系统模块
const express = require('express');
const methodOverride = require('method-override');

// 加载配置模块
const config = require('./config');
const session = require('./middleware/redis-session');
// 实例化应用
const app = express();
app.use(methodOverride());
app.use(session({
  ...config.session
}));
app.use(config.appid, require('./route'));

app.use((req, res) => {
  res.status(404).json({
    code: 999999,
    msg: "Request not found!",
    data: null
  })
});

app.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    res.status(500).json({
      code: 999999,
      msg: "Server error happened!",
      data: null
    })
  }
});

if (!module.parent) {
  app.listen(config.port, function (err) {
    if (!err) {
      console.log(`Server ${config.name} start success. port: ${config.port}.`);
    } else {
      console.error(`Server ${config.name} start failed.`);
    }
  });
} else {
  module.exports = app;
}
