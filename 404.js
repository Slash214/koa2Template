const router = require('koa-router')()
const { NoPage } = require('./models/ErrorInfo')
const { ErrorModel } = require('./models/ResModel')

router.get("(.*)", async (ctx, next) => {
	ctx.body = new ErrorModel(NoPage)
})

module.exports = router