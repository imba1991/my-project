import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/views/index'
import home from '@/views/home/index'
import collection from '@/views/collection/index'
import rss from '@/views/rss/index'
import channel from '@/views/channel/index'
import ArticalDetails from '@/views/artical/index'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      //主页
      path:'/',
      component:index,
      //默认加载首页
      redirect:'/home',
      children:[
        //首页
        {
          path:'/home',
          component:home,
          // children:[
            
          //   { path:'/home/ArticalDetails',component:ArticalDetails}
            
          // ]

      },
        //收藏
        {path:'/collection',component:collection},
        //订阅
        {path:'/rss',component:rss},
        //频道
        {path:'/channel',component:channel},
        //帖子详情
        {path:'/ArticalDetails',component:ArticalDetails}

        

    
      ]
    },
  
  ]
})
