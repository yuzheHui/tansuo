module.exports = app =>{

    //引用mongoos，连接mongodb
    const mongoose = require("mongoose")
    mongoose.connect('mongodb://127.0.0.1:27017/wangzhe',{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}
