/**
 * 测试模型
 */
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const { ParamsError } = require('../models/ErrorInfo')

class TestCtl {
	async select(ctx) { 
      // 数据库的操作
		let item = [
			{ id: 1, name: '123123' },
			{ id: 1, name: '123123' },
			{ id: 1, name: '123123' },
		]
	  ctx.body = new SuccessModel({ data: item })
	}
	async create(ctx) { 
		let { usernmae, password } = ctx.request.body 
		if (!usernmae || !password) {
			ctx.body = new ErrorModel(ParamsError)
			return
		}
        
		let userInfo = { id: 1, usernmae, password, avatar: '', level: '测试' }
		ctx.body = new SuccessModel({ data: userInfo })

	}
	async fix(ctx) {  }
	async remove(ctx) {  }
}

module.exports = new TestCtl()