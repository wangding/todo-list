const mysql  = require('mysql2/promise'),
      { HOST, USER, PASSWORD, DATABASE } = require('../lib/constant');

const con = mysql.createPool({
  host:     HOST,
  user:     USER,
  password: PASSWORD,
  database: DATABASE
});

class ResData {
  constructor() {
    this.code = 0;
    this.msg  = 'ok';
    this.count= 0;
    this.data = '';
  }
}

module.exports = { con, ResData };
