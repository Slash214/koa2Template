/**
 * 测试路由器
 */
const router = require('koa-router')()
const { create, select } = require('../controller/test')

router.prefix('/test')

router.post('/login', create)
router.get('/list', select)

module.exports = router