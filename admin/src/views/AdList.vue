<template>
  <div>
    <h1>广告位列表</h1>
     <el-table :data="items">
       
        <el-table-column prop="_id" label="ID" width = "220px">
        </el-table-column>
         <el-table-column prop="name" label="名称">
        </el-table-column>

         <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
          <el-button type="text" size="small" @click = "$router.push(`/ads/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click = "remove(scope.row)">删除</el-button>
        
          </template>
        </el-table-column>
        
      </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[]
    }
  },

  methods: {
    async fetch(){
      const res = await this.$http.get('rest/ads')
      this.items = res.data
    },
    async remove(row){
      this.$confirm(`是否确定删除 "${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
          await this.$http.delete(`rest/ads/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          //删除完之后再执行下fetch
          this.fetch()

        })
    }

  },

  // 默认进来做什么，执行fetch
  created(){
    this.fetch()
  }
}
</script>