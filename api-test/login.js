#!/usr/bin/env node

function showHelp() {
  const log = console.log;

  log('测试登录接口。');
  log('接口地址：http://localhost:8080/api/users/login');
  log('请求方法：POST');
  log('---');
  log('测试命令：./login.js email password');
  log('命令参数：email ---- 用户的邮箱');
  log('命令参数：password - 用户的密码');
}

if(process.argv.length !== 4) {
  showHelp();
  process.exit(0);
}

async function main() {
  const axios= require('axios'),
        addr = 'http://localhost:8080/api/users/login';

  const res = await axios.post(addr, {
    email: process.argv[2],
    password: process.argv[3]
  });

  console.log(res.data);
}

main();
