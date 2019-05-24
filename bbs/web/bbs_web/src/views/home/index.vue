//首页
<template>
  <div>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>


      <el-row>
      <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" class="card">
            <router-link to='/ArticalDetails'>
          <img 
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
            </router-link>
         
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              天涯频道
              <span>100k </span>
              <i class="el-icon-view"></i>
              <span>10P</span>
              <!-- <time class="time">{{ currentDate }}</time> -->
             
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
 
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.card{
    transform:scale(0.8)
}
</style>