// 导出一个app供使用
module.exports = app =>{
    // 引入express
    const express = require('express')
    // express的子路由
    const router = express.Router({
        mergeParams: true
    })

    // const req.Model = require('../../models/req.Model')


    //创建数据
    router.post('/',async (req, res) =>{
        //使用创建方法，然后发送回前端
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    //更新数据
    router.put('/:id',async (req, res) =>{
        //使用创建方法，然后发送回前端
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

     //删除数据
     router.delete('/:id',async (req, res) =>{
        //使用创建方法，然后发送回前端
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success : true
        })
    })

    //分类列表
    router.get('/',async (req, res) =>{
        const queryOptions = {}
        if (req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }

        //使用创建方法，然后发送回前端
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })

     //编辑数据
     router.get('/:id',async (req, res) =>{
        //使用创建方法，然后发送回前端
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })


    //挂载子路由
    app.use('/admin/api/rest/:resource', async(req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    },router)

    //中间件multer
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads'})
    app.post('/admin/api/upload', upload.single('file'), async (req, res)=>{
       const file = req.file
       file.url = `http://localhost:3000/uploads/${file.filename}`
       res.send(file) 
    })
}