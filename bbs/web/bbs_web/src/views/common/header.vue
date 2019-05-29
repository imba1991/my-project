//导航
<template>
  <div>
    <el-row>
      <!-- 菜单 -->
      <el-col :span="2">
        <div>
          <!-- 显示菜单 -->
          <el-button class="ico" v-on:click="showMenu" icon="el-icon-menu"></el-button>
          <!-- 网站Logo -->
          <i style="font-size:40px;font-weight:bold;" class="ico el-icon-video-camera-solid"></i>
        </div>
      </el-col>

      <el-col :span="5">
        <!-- 搜索框 -->
        <span>
          <el-input placeholder="请输入搜索内容"></el-input>
        </span>
      </el-col>
      <el-col :span="1">
        <!-- 搜索按钮 -->
        <el-button class="ico" icon="el-icon-search"></el-button>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="10">天下我最帅</el-col>
      <el-col :span="3">
        <div>
          <el-button type="danger">注册</el-button>
          <el-button type="success">登陆</el-button>
        </div>
      </el-col>

      <!-- 语言包 -->
      <el-col :span="2">
        <div>
          <el-button class="ico" icon="el-icon-s-flag"></el-button>
          <el-button class="ico" icon="el-icon-s-opportunity"></el-button>
        </div>
      </el-col>
    </el-row>
    <!-- 隐藏菜单 -->

    <div v-if="showMenu2">
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
        <el-col :span="2">
          <el-button type="info">长发</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="info">长手</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="info">长衣</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="info">所有标签</el-button>
        </el-col>
      </el-row>
    </div>

    <!-- 显示菜单 -->
    <el-row>
      <router-link to="/home">
        <el-col :span="2">
          <el-button class="el-icon-s-home">主页</el-button>
        </el-col>
      </router-link>
      <router-link to="/rss">
        <el-col :span="2">
          <el-button class="el-icon-reading">我的订阅</el-button>
        </el-col>
      </router-link>
      <router-link to="/collection">
        <el-col :span="2">
          <el-button class="el-icon-star-off">我的收藏</el-button>
        </el-col>
      </router-link>
      <router-link to="/channel">
        <el-col :span="2">
          <el-button class="el-icon-s-platform">我的频道</el-button>
        </el-col>
      </router-link>
      <el-col :span="2">
        <el-button icon="el-icon-s-tools"></el-button>
      </el-col>
      <el-col :span="4" :offset="8">
        <div>
          <router-link to="/posting">
            <el-button type="success" class="el-icon-edit-outline">发贴</el-button>
          </router-link>
          <el-button icon="el-icon-video-play"></el-button>
          <span>99，99，999帖子</span>
          
        </div>
      </el-col>
    </el-row>
  
  
  </div>
</template>
<script>
debugger;
export default {
  data: function() {
    return {
      showMenu2: ""
    };
  },

  methods: {
    showMenu: function() {
      return (this.showMenu2 = !this.showMenu2);
    }
  }
};
</script>

