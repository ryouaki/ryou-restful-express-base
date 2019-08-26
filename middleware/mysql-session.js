const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session)

module.exports = function(opts, others = {}) {
  return session({
    secret: opts.secret,
    resave: opts.resave || false,
    saveUninitialized: opts.saveUninitialized || true,
    store: new MySQLStore(opts.host),
    cookie: {
      httpOnly: opts.httpOnly || true,
      maxAge: opts.ttl,
      domain: opts.domain
    },
    ...others
  })
}
