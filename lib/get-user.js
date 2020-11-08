const jwt = require('jsonwebtoken'),
      { JWT_KEY } = require('./constant');

async function getUser(ctx, next) {
  const auth = ctx.req.headers.authorization;

  if(typeof auth !== 'undefined') {
    const token = auth.split(' ')[1];

    const user = jwt.verify(token, JWT_KEY);
    ctx.user = user;
  }

  await next();
}

module.exports = getUser;
