//频道
<template>
  <div>  
      <el-row>
          <el-col :span="2">
              <el-button class="el-icon-plus">添加频道</el-button>
          </el-col>
      </el-row>
      
    <el-row>
        <el-col :span="2"><i class="el-icon-video-play"></i></el-col>
        <el-col :span="2"><a href="#">大王频道</a></el-col>
        <el-col :span="2">今日发布了两个帖子</el-col>
        <el-col :span="2" :offset="10"><el-button type="success" class="el-icon-edit">发贴</el-button></el-col>
         <el-col :span="2" ><el-button type="success" class="el-icon-s-tools">管理频道</el-button></el-col>
         <el-col :span="2" ><el-button class="el-icon-circle-close" type="danger">关闭频道</el-button></el-col>
    </el-row>
    <hr>
    <el-row>
      <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" class="card">
          <img 
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <a href="#">天涯频道</a>
              <span>100k </span>
              <i class="el-icon-view"></i>
              <span>10</span>
              <i class="el-icon-picture"></i>
              <!-- <time class="time">{{ currentDate }}</time> -->
             
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="2" :offset="20"><i class="el-icon-circle-plus-outline"></i><a href="#">显示更多</a></el-col>
    </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>

