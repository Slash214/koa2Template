const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const noRouter = require('./404')
const routing = require('./routes/index')

// 跨域
app.use(cors())
onerror(app)

// 中间件
app.use(bodyparser({
	enableTypes: ['josn', 'form', 'text']
}))

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// logger
app.use(async (ctx, next) => {
	const start = new Date()
	await next()
	const ms = new Date() - start
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

app.on('error', (err, ctx) => {
	console.log('server error', err, ctx)
})

routing(app)
app.use(noRouter.routes(), noRouter.allowedMethods())


module.exports = app