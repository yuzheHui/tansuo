const mongoose = require('mongoose')

// 定义模型字段有哪些
const schema = new mongoose.Schema({
    title: { type:String},
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref:'Category'}],
    body: { type:String},
})
//导出mongoose的模型
module.exports = mongoose.model('Article', schema)