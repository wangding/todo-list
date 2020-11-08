#!/usr/bin/env node

const Koa    = require('koa'),
      logger = require('koa-logger'),
      jwt    = require('koa-jwt'),
      json   = require('koa-json');

const bodyparser  = require('koa-bodyparser'),
      loadRouters = require('require-directory'),
      getUser     = require('./lib/get-user'),
      { JWT_KEY } = require('./lib/constant');

const app = new Koa();

app.use(json());
app.use(logger());
app.use(jwt({secret: JWT_KEY}).unless({ path: /^\/api\/users/}));
app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }));
app.use(getUser);

loadRouters(module, './routes', { visit: r => app.use(r.routes()) });

app.listen(8080);
