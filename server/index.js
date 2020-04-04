const  express = require("express")

const app = express()

//引用模块,跨域和json
app.use(require('cors')());
app.use(express.json());

//托管静态文件
app.use('/uploads',express.static(__dirname + '/uploads'))

// 后端路由写在专门的文件下，然后引用，这样会比较清晰
// 引用app
require('./plugins/db')(app)
require('./routes/admin')(app)


app.listen(3000,() => {
    console.log('http://localhost:3000');
});