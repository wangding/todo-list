const router = require('koa-router')(),
      {task} = require('../models');

router.prefix('/api/tasks');

router.get('/', async (ctx) => {
  ctx.body = await task.getTasks(ctx.user.id);
});

router.post('/', async (ctx) => {
  let { item } = ctx.request.body;

  ctx.body = await task.addTask(item, ctx.user.id);
});

router.put('/:id', async (ctx) => {
  let { id } = ctx.params;
  let { item } = ctx.request.body;

  ctx.body = await task.updateTaskByID(id, item, ctx.user.id);
});

router.delete('/:id', async (ctx) => {
  let { id } = ctx.params;

  ctx.body = await task.deleteTaskByID(id, ctx.user.id);
});

module.exports = router;
