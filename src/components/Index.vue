<template lang="pug">
  #indexPage
    el-row
      el-col(:span="24").indexPage-top
        el-card 顶部导航
      el-col(:span="4")
        el-card 左侧导航
      el-col(:span="20")
        el-card 主要内容
      el-col(:span="24")
        el-card 底部内容
</template>

<script>
  import Cookie from 'js-cookie'

  export default {
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
  
</style>

