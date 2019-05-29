<template>
  <div>
    <el-container>
      <el-header height=""> <top></top>
      
      </el-header>
      
      <el-main ><router-view/></el-main>
      <el-footer height="200px">  <down></down></el-footer>
    </el-container>

   
    
  
  </div>
</template>
<script>
import top from "./common/header.vue";
import down from "./common/footer.vue";
export default {
  components: {
    top,
    down
  }
};
</script>
<style>
  .el-header, .el-footer {
    background-color: rgb(252, 252, 252);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: rgb(252, 252, 252);
    color: #333;
    text-align: center;
    
  }
 
</style>
