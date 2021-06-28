# todo-list-api

代办事项 web 应用服务器端，应用形态：HTTP API。

## 环境

- MySQL >= 7
- node.js >= 12
- CentOS >= 7

## 安装

安装数据库，操作如下：

- 进入 setup-db 目录，`cd setup-db`
- 运行 install.sh 脚本，`./install.sh`
- 多次输入 mysql root 用户的密码
- 查看数据库的初始数据，`cat users.data && echo '---' && cat tasks.data`

## 运行

运行服务程序，操作如下：

- 在项目目录下，`./app.js`

## 测试

测试 HTTP 接口 API，操作如下：

- 进入 api-test 目录，`cd api-test`
- 测试 login 接口，`./login.js 408542507@qq.com ddd`
- 测试 getTasks 接口，`./get-tasks.js 408542507@qq.com ddd`
- 测试其他接口，可以复制 `login.js` 和 `get-tasks.js` 代码，适当修改

## 接口

### 登录验证

- 功能描述：提供登录信息，由服务端验证身份是否合法。如果合法，发放后续访问的令牌。否则，给出错误提示。
- 接口地址：POST `/users/login`
- 请求参数：

| 字段 | 类型 | 是否必填 | 说明 | 备注 |
| ---  | ---  | ---      | ---  | ---  |
| email    | string | 是 |      |      |
| password | string | 是 |      |      |

- 返回数据：

| 字段 | 类型 | 说明 | 备注 |
| ---  | ---  | ---         | ---  |
| code  | number | 状态码   | 零为正常，非零代表错误 |
| msg   | string | 状态信息 | 错误描述       |
| count | number | 记录条数 | 此字段无用     |
| data  | string | 具体数据 | 如果身份验证成功，这个数据是后续访问的令牌 |

### 注册账户

- 功能描述：注册账户。
- 接口地址：POST `/users/regist`
- 请求参数：

| 字段 | 类型 | 是否必填 | 说明 | 备注 |
| ---  | ---  | ---      | ---  | ---  |
| email     | string | 是 |      |      |
| password  | string | 是 |      |      |
| pwdRepeat | string | 是 |      |      |

- 返回数据：

| 字段 | 类型 | 说明 | 备注 |
| ---  | ---  | ---         | ---  |
| code  | number | 状态码   | 零为正常，非零代表错误 |
| msg   | string | 状态信息 | 错误描述   |
| count | number | 记录条数 | 此字段无用 |
| data  | string | 具体数据 | 此字段无用 |

### 获取代办事项

- 功能描述：获取登录当前登录用户的所有代办事项。
- 接口地址：GET `/tasks/`
- 请求参数：

| 字段 | 类型 | 是否必填 | 说明 | 备注 |
| ---  | ---  | ---      | ---  | ---  |
| token | string | 是 | 身份验证的令牌 | token 在 HTTP 请求头中 |

- 返回数据：

| 字段 | 类型 | 说明 | 备注 |
| ---  | ---  | ---  | ---  |
| code  | number | 状态码   | 零为正常，非零代表错误 |
| msg   | string | 状态信息 | 错误描述   |
| count | number | 记录条数 | |
| data  | string | 待办事项数组 | |

### 添加代办事项

- 功能描述：添加代办事项。
- 接口地址：POST `/tasks/`
- 请求参数：

| 字段 | 类型 | 是否必填 | 说明 | 备注 |
| ---  | ---  | ---      | ---  | ---  |
| token   | string | 是 | 身份验证的令牌 | token 在 HTTP 请求头中 |
| content | string | 是 | 待办事项内容   |      |

- 返回数据：

| 字段 | 类型 | 说明 | 备注 |
| ---  | ---  | ---         | ---  |
| code  | number | 状态码   | 零为正常，非零代表错误 |
| msg   | string | 状态信息 | 错误描述   |
| count | number | 记录条数 | 此字段无用 |
| data  | string | 具体数据 | 此字段无用 |

### 修改代办事项

- 功能描述：修改代办事项。
- 接口地址：PUT `/tasks/:id`
- 请求参数：

| 字段 | 类型 | 是否必填 | 说明 | 备注 |
| ---  | ---  | ---      | ---  | ---  |
| token   | string | 是 | 身份验证的令牌 | token 在 HTTP 请求头中 |
| id      | number | 是 | 待修改待办事项的 id |      |
| content | string | 是 | 新的待办事项内容    |      |

- 返回数据：

| 字段 | 类型 | 说明 | 备注 |
| ---  | ---  | ---         | ---  |
| code  | number | 状态码   | 零为正常，非零代表错误 |
| msg   | string | 状态信息 | 错误描述   |
| count | number | 记录条数 | 此字段无用 |
| data  | string | 具体数据 | 此字段无用 |

### 删除代办事项

- 功能描述：删除待办事项。
- 接口地址：DELETE `/tasks/:id`
- 请求参数：

| 字段 | 类型 | 是否必填 | 说明 | 备注 |
| ---  | ---  | ---      | ---  | ---  |
| token | string | 是 | 身份验证的令牌 | token 在 HTTP 请求头中 |
| id    | number | 是 | 待删除待办事项的 id | 多个 id 之间逗号分隔 |

- 返回数据：

| 字段 | 类型 | 说明 | 备注 |
| ---  | ---  | ---         | ---  |
| code  | number | 状态码   | 零为正常，非零代表错误 |
| msg   | string | 状态信息 | 错误描述   |
| count | number | 记录条数 | 此字段无用 |
| data  | string | 具体数据 | 此字段无用 |
