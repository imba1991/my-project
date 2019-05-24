//帖子详情页面
<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <div>
      <!-- 标题 -->
      <p>
        <span>
          <h1>论天气</h1>
        </span>
        <span>
          作者:
          <a href="#">杨过</a>
        </span>
        <span>发表:2019-5-24 15：30</span>
      </p>
      <!-- 作者与时间 -->

      <!-- 频道与标签 -->
      <p>
        <el-button type class="el-icon-reading">金庸频道</el-button>
        <el-button>各种标签</el-button>
      </p>
    </div>
    <!-- 内容 -->
    <div>
      <p>今天的天气还是非常不错的，所以我去游了个泳</p>
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558696397297&di=9868ea2a44d917f5897478201fa459af&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F002Z2nVlzy6NRDT3z3Kac%26690"
        alt
      >
    </div>
    <!-- 工具栏 -->
    <div>
      <p>
        <el-button class="el-icon-view">100资源</el-button>
        <!-- 点赞 -->
        <el-button class="el-icon-top">赞</el-button>
        <el-button class="el-icon-bottom">喷</el-button>
        <el-button class="el-icon-chat-dot-round">评论</el-button>

        <el-button class="el-icon-circle-plus-outline">频道</el-button>
        <el-button class="el-icon-warning">举报</el-button>
        <el-button class="el-icon-share">分享</el-button>
      </p>
    </div>
    <!-- 推荐 -->
    <div>
      <el-row>
        <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }" class="card">
            <router-link to="/ArticalDetails">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              >
            </router-link>

            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                天涯频道
                <span>100k</span>
                <i class="el-icon-view"></i>
                <span>10P</span>
                <!-- <time class="time">{{ currentDate }}</time> -->
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      
      <el-row>
        <el-col >
         <el-button type="success" style="width:100%">更多</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- 评论区 -->
    <div>
      <el-row>
        <el-col :span="4">
            <div>
                     <el-button>评论区</el-button>
                        <el-button>2</el-button>
                         <el-button>发表评论</el-button>
            </div>
           
        </el-col>
      
      </el-row>
      <el-row>
        <!-- 用户头像 -->
        <el-col :span="2">
          <img src="https://f12.baidu.com/it/u=2754208607,630952272&fm=72" style="width:100px" alt>
        </el-col>
        <!-- 用户留言 -->
        <el-col :span="5">
          <div>
            <a href="#">孙悟空</a>
            <span>2019-5-24 17：17</span>
          </div>
          <div>好久没有看到这么好看的文章了,吼吼啊0。。。。。。。。</div>
          <div>
            <el-button class="el-icon-top">赞</el-button>
            <el-button class="el-icon-bottom">喷</el-button>
            <el-button class="el-icon-chat-dot-round">评论</el-button>

    
            <el-button class="el-icon-warning">举报</el-button>
          </div>
        </el-col>
      
      </el-row>
      <el-row>
            <el-col :span="2"><el-button>发表评论</el-button></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>
