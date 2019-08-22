const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const Redis = require('ioredis');

const config = require('../config').session;

module.exports = session({
  secret: 'restful.api',
  resave: false,
  saveUninitialized: true,
  store: new RedisStore({ 
    client: new Redis(config.host)
  }),
  cookie: {
    httpOnly: true,
    maxAge: config.defaultTtl,
    domain: config.defaultDomain
  }
})
