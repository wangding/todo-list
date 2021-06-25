#!/usr/bin/env node

function showHelp() {
  const log = console.log;

  log('测试获取待办事项接口。');
  log('接口地址：http://localhost:8080/api/tasks');
  log('请求方法：GET');
  log('---');
  log('测试命令：./get-tasks.js email password');
  log('命令参数：email:    登录用户的邮箱');
  log('命令参数：password: 登录用户的密码');
}

const axios= require('axios'),
      addr = 'http://localhost:8080/api/';

if(process.argv.length !== 4) {
  showHelp();
  process.exit(0);
}

async function login() {
  let data = {
    email: process.argv[2],
    password: process.argv[3]
  };

  const res = await axios.post(addr + 'users/login', data);
  return res.data;
}

async function getTasks(token) {
  const res = await axios.get(addr + 'tasks', {
    headers: { 'Authorization': 'Bearer '+ token }
  });

  return res.data;
}

async function main() {
  const log   = console.log,
        token = await login();

  if(token.data === '') {
    log(token);
    return;
  }

  let data = await getTasks(token.data);
  log(data);
}

main();
