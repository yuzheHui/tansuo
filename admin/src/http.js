import axios from 'axios'

// 创建实例http
const http = axios.create({
    baseURL:'http://localhost:3000/admin/api'
})

// 导出变量http
export default http
