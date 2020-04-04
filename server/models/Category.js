const mongoose = require('mongoose')

// 定义模型字段有哪些
const schema = new mongoose.Schema({
    name: { type:String},
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}
})
//导出mongoose的模型
module.exports = mongoose.model('Category', schema)