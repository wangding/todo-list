# todo-list

## install

- 进入 setup-db 目录，`cd setup-db`
- 运行 install.sh 脚本，`./install.sh`
- 多次输入 mysql root 用户的密码
- 查看数据库的初始数据，`cat users.data && echo '---' && cat tasks.data`

## 运行服务程序

- 在项目目录下，`./app.js`

## 测试 HTTP 接口 API

- 进入 api-test 目录，`cd api-test`
- 测试 login 接口，`./login.js 408542507@qq.com ddd`
- 测试 getTasks 接口，`./get-tasks.js 408542507@qq.com ddd`
- 测试其他接口，可以复制 `login.js` 和 `get-tasks.js` 代码，适当修改
