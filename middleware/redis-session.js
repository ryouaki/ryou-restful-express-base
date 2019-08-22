const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const Redis = require('ioredis');

module.exports = function(opts, others = {}) {
  return session({
    secret: opts.secret,
    resave: opts.resave || false,
    saveUninitialized: opts.saveUninitialized || true,
    store: new RedisStore({
      client: new Redis(opts.host)
    }),
    cookie: {
      httpOnly: opts.httpOnly || true,
      maxAge: opts.ttl,
      domain: opts.domain
    },
    ...others
  })
}
