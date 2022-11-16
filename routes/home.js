const router = require("koa-router")();
const fs = require('fs')

router.get("/", async (ctx, next) => {
  ctx.body = { data: "Hello World", code: 200 };
});


module.exports = router;
