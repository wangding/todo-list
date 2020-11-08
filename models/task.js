const { con, ResData } = require('./common');

async function getTasks(userId) {
  let sql = `select * from tasks where user_id = ${userId} order by id desc`,
      res = new ResData();

  let [rows] = await con.execute(sql);
  res.data = rows;

  return res;
}

async function addTask(item, userId) {
  let sql = `insert into tasks(content, user_id) values ("${item}", ${userId})`,
      res = new ResData();

  try {
    let [rows] = await con.execute(sql);
    res.msg = rows.affectedRows === 1 ? '添加成功': '添加失败';
    return res;
  } catch(e) {
    res.code = 401001;
    res.msg  = '添加失败';
    return res;
  }
}

async function updateTaskByID(id, item, userId) {
  let sql = `update tasks set content = "${item}" where id = ${id} and user_id = ${userId}`,
      res = new ResData();

  try {
    let [rows] = await con.execute(sql);
    res.msg = rows.affectedRows === 1 ? '修改成功': '修改失败';
    return res;
  } catch(e) {
    res.code = 401002;
    res.msg  = '修改失败';
    return res;
  }
}

async function deleteTaskByID(id, userId) {
  let sql = `delete from tasks where user_id = ${userId} and id = ${id}`,
      res = new ResData();

  try {
    let [rows] = await con.execute(sql);
    res.msg  = rows.affectedRows === 1 ? '删除成功' : '删除的对象不存在';
    return res;
  } catch(e) {
    res.code = 401003;
    res.msg  = '删除失败';
    return res;
  }
}

module.exports = {
  getTasks,
  addTask,
  updateTaskByID,
  deleteTaskByID
};
