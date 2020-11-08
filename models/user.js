const jwt = require('jsonwebtoken'),
      { con, ResData } = require('./common'),
      _ = require('lodash'),
      { JWT_KEY, USER_EXPIRES } = require('../lib/constant');

async function login(email, password) {
  let sql = `select * from users where email = '${email}'`,
      res = new ResData();

  let [rows] = await con.execute(sql);

  if(rows.length === 0) {
    res.code = 40201;
    res.msg  = '登录失败：用户不存在！';
  } else if(rows[0].password !== password) {
    res.code = 40202;
    res.msg  = '登录失败：密码不正确！';
  } else {
    res.data = jwt.sign(_.toPlainObject(rows[0]), JWT_KEY, { expiresIn: USER_EXPIRES });
  }

  return res;
}

module.exports = {
  login
};
