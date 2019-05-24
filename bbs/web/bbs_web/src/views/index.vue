<template>
  <div>
    <el-container>
      <el-header height="300px"> <top></top></el-header>
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
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    
  }
 
</style>
