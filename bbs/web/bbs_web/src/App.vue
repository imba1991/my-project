<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-container>
  <el-header>
    <el-row >
      <!-- 菜单 -->
      <el-col :span="2">
        <div class="ico">
          <el-button  icon="el-icon-menu"></el-button>
        </div>
      </el-col>
      <el-col :span="2"><i  style="font-size:40px;font-weight:bold;" class="el-icon-video-camera-solid"></i></el-col>
      <el-col :span="5">
        <el-input placeholder="请输入搜索内容" ></el-input>
      </el-col>
      <el-col :span="1">
        <el-button  icon="el-icon-search"></el-button>
      </el-col>
      <el-col :span="4">
        <el-span>天下我最帅</el-span>
      </el-col>
      <el-col :span="2">
        <el-button type="danger">注册</el-button>
      </el-col>
      <el-col :span="2">
      <el-button :span="1" type="success">登陆</el-button>
      </el-col>
      <el-col :span="2">
          <el-button icon="el-icon-s-flag" ></el-button>
      </el-col>
    </el-row>
    
  </el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}


.el-header, .el-footer {
    background-color: rgba(29, 27, 27, 0.74);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  

  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 700px;
  }
  

  

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .ico{
    font-size:40px;font-weight:bold;
  }
</style>
