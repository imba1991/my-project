<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-container>
  <el-header height="290px">
    <el-row  >
      <!-- 菜单 -->
      <el-col :span="2">
        <div >
          <el-button class="ico" icon="el-icon-menu"></el-button>
        </div>
      </el-col>
      <el-col :span="2"><i  style="font-size:40px;font-weight:bold;" class="ico el-icon-video-camera-solid"></i></el-col>
      <el-col :span="5">
        <el-input placeholder="请输入搜索内容" ></el-input>
      </el-col>
      <el-col :span="1">
        <el-button  class="ico"  icon="el-icon-search"></el-button>
      </el-col>
      <el-col :span="4">
        <el-span>天下我最帅</el-span>
      </el-col>
      <el-col :span="2">
        <el-button type="danger">注册</el-button>
      </el-col>
      <el-col :span="2">
      <el-button  type="success">登陆</el-button>
      </el-col>
      <!-- 语言包 -->
      <el-col :span="2">
          <el-button  class="ico"  icon="el-icon-s-flag" ></el-button>
      </el-col>
      <el-col :span="2">
        <el-button class='ico' icon="el-icon-s-opportunity"></el-button>
      </el-col>
    </el-row>
    <!-- 隐藏菜单 -->
    <el-row>
        <el-col :span="2">
          <el-button icon="el-icon-s-flag  ">美国</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="danger">历史</el-button>
        </el-col>
       <el-col :span="2">
          <el-button type="danger">最佳资源</el-button>
        </el-col>
         <el-col :span="2">
          <el-button type="danger">明星</el-button>
        </el-col>
         <el-col :span="2">
          <el-button type="danger">频道</el-button>
        </el-col>
    </el-row>
    <!-- 标签 -->
    <el-row>
      <el-col :span="2" ><el-button type="info">长发</el-button></el-col>
       <el-col :span="2" ><el-button type="info">长手</el-button></el-col>
        <el-col :span="2" ><el-button type="info">长衣</el-button></el-col>
         <el-col :span="2" ><el-button type="info">所有标签</el-button></el-col>
    </el-row>
    <!-- 显示菜单 -->
    <el-row>
        <router-link to='/home'><el-col :span="2"><el-button >主页</el-button></el-col></router-link> 
      <el-col :span="2"><el-button >我的收藏</el-button></el-col>
      <el-col :span="2"><el-button >我的频道</el-button></el-col>
      <el-col :span="2"><el-button icon="el-icon-s-tools"></el-button></el-col>
       <el-col :span="2" :offset="10"><el-button type="success">发贴</el-button></el-col>
      <el-col :span="2" ><el-button icon="el-icon-video-play"></el-button></el-col>
       <el-col :span="2"><el-span>99，99，999帖子</el-span></el-col>
      
    </el-row>
  </el-header>
  <el-main>Main</el-main>
  <!-- 底部 -->
  <el-footer height="200px">
    <!-- 广告 -->
    <el-row>
      <el-col span="18" :offset="3" >广告位</el-col>
    </el-row>
    <!-- 底部菜单 -->
    <el-row>
      <el-col :span="2"><a href="#">查看帮助</a></el-col>
      <el-col :span="2"><a href="#">发贴</a></el-col>
      <el-col :span="2"><a href="#">删除内容</a></el-col>
        <el-col :span="2"><a href="#">广告投放</a></el-col>
          <el-col :span="2"><a href="#">服务条款</a></el-col>
    </el-row>
    <el-row>
     <el-col :span="3"> <el-span>关关脽鸠，在河之州</el-span></el-col>
    </el-row>
  </el-footer>
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


.el-header,.el-footer{
    background-color: rgba(29, 27, 27, 0.11);
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
    font-size:20px;font-weight:bold;
  }
</style>
