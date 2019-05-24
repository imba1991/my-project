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
    <!-- 标题 -->
    <el-row>
        <el-col :span="5"><h1>论天气</h1></el-col>
      
    </el-row>
    <el-row>
        <el-col :span="2" offset="6"><span>作者:<a href="#">杨过</a></span></el-col>
          <el-col :span="4"><span>2019-5-24 15：30</span></el-col>
    </el-row>
  </div>
</template>
