<template lang="pug">
  #indexPage
    .indexPage-top
      p 时光之末，诺兹多姆的疯狂
      p(v-if="userInfo") 
        router-link(to="/member/info") {{userInfo.name}}，
        span(@click="logout") 注销
    .indexPage-main
      .indexPage-left
        el-card
          router-link(to="/") 首页
        el-card 
          router-link(to="/note") 便签
        el-card 
          router-link(to="/file") 文件
        el-card 
          router-link(to="/user") 用户
      .indexPage-body     
        router-view    
</template>

<script>
  import Cookie from 'js-cookie'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    methods: {
      ...mapActions([
        'setUserInfo'
      ]),
      logout () {
        Cookie.remove('tokenID')
        this.setUserInfo(null);
        this.$router.push('/login');
        this.$message('登出测试')
      }
    },
    created () {
      console.log(this.$route.fullPath)
    },
    beforeRouteEnter (to, from, next) {
      const tokenID = Cookie.get('tokenID');
      if (!tokenID) {
          next({ path: '/login' })
      } else {
          next()
      }
    }
  }
</script>
<style lang="scss">
  #indexPage{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .indexPage-top{
    display: flex;
    height: 65px;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background-color: #324157;
    color: #bfcbd9;
    font-size: 14px;
    p {
      padding: 0 15px;
    }
    a {
      color: inherit;
    }
  }
  .indexPage-main {
    display: flex;
    align-content:flex-start;
    height: calc(100% - 60px);
  }
  .indexPage-left {
    width: 200px;
    border: 1px solid #d1dbe5;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    text-align: center;
    .el-card {
      border-radius: 0;
    }
  }
  .indexPage-body {
    overflow: auto;
    flex: 2;
  }
</style>
