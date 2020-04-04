const mongoose = require('mongoose')

// 定义模型字段有哪些
const schema = new mongoose.Schema({
    name: { type: String},
    icon: { type: String}
})
//导出mongoose的模型
module.exports = mongoose.model('Item', schema)