const router = require('koa-router')(),
      {user} = require('../models');

router.prefix('/api/users');

router.post('/login', async (ctx) => {
  let { email, password } = ctx.request.body;

  ctx.body = await user.login(email, password);
});

router.post('/regist', async (ctx) => {
  let { email, password, nickname } = ctx.request.body;

  ctx.body = `regist with email: ${email}, password: ${password}, nickname: ${nickname}`;
});

router.get('/signout', async (ctx) => {
  ctx.body = 'signout';
});

module.exports = router;
