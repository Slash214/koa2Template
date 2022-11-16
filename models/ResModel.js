/**
 * @descrion 数据返回模型
 * @author 爱呵呵
 */

class BaseModel {
	constructor({ data, code, message, total }) {
		if (data) this.data = data
		if (message) this.message = message
		if (code) this.code = code
		if (total) this.total = total
	}
}

class SuccessModel extends BaseModel {
	constructor({ data, total, message }) {
		super({
			code: 200,
			data,
			total,
			message
		})
	}
}

class ErrorModel extends BaseModel {
	constructor({ code, message }) {
		super({
			code,
			message
		})
	}
}

module.exports = {
	SuccessModel,
	ErrorModel
}