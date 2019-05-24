//导航
<template>
    <div>
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
         天下我最帅
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
        <router-link to='/home'><el-col :span="2"><el-button class="el-icon-s-home" >主页</el-button></el-col></router-link> 
        <router-link to="/rss"><el-col :span="2"><el-button class="el-icon-reading">我的订阅</el-button></el-col></router-link> 
        <router-link to='/collection'> <el-col :span="2"><el-button class="el-icon-star-off" >我的收藏</el-button></el-col></router-link>
        <router-link to='/channel'> <el-col :span="2"><el-button class="el-icon-s-platform">我的频道</el-button></el-col></router-link> 
      <el-col :span="2"><el-button icon="el-icon-s-tools"></el-button></el-col>
       <router-link to='/posting'><el-col :span="2" :offset="10"><el-button type="success" class="el-icon-edit-outline">发贴</el-button></el-col></router-link>
      <el-col :span="2" ><el-button icon="el-icon-video-play"></el-button></el-col>
      <!-- 统计帖子数 -->
       <el-col :span="2"><span>99，99，999帖子</span></el-col>
      
    </el-row>
    
    </div>
</template>

