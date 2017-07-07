<template lang="pug">
  #indexPage
    el-row
      el-col(:span="24").indexPage-top
        el-card 顶部导航
        el-card(v-if="userInfo") 
          router-link(to="/member/info") {{userInfo.name}}，个人中心
      el-col(:span="4")
        el-card 左侧导航
      el-col(:span="20").indexPage-main
        el-card
          upload
          hr
          el-card.news-item aaa
          el-card.news-item aaa
          el-card.news-item aaa
          el-card.news-item aaa
          el-card.news-item aaa
          el-card.news-item aaa
          el-card.news-item aaa
          el-card.news-item aaa
          el-card.news-item aaa
          el-card.news-item aaa
          el-card 底部内容
      
</template>

<script>
  import Cookie from 'js-cookie'
  import upload from './upload'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      upload
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },    
    beforeRouteEnter (to, from, next) {
      const tokenID = Cookie.get('tokenID');
      if (!tokenID) {
          next({ path: '/member/login' })
      } else {
          next()
      }
    }
  }
</script>
<style lang="scss">
  #indexPage{
    width: 100%;
  }
  .indexPage-top{
    display: flex;
    height: 175px;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background: url('../assets/img/bg-1.jpg') bottom;
    background-size: cover;
  }
  .indexPage-main {
    .news-item {
      height: 75px;
      margin-bottom: 20px;
    }
  }
</style>
