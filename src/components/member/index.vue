<template lang="pug">
  #member
    el-menu(mode="horizontal",theme="dark", :router="true")
      el-menu-item(index="/") 网站首页
      template(v-if="!userInfo")
        el-menu-item(index="reg") 注册
        el-menu-item(index="login") 登录
      template(v-else)
        el-menu-item(index="info") 个人中心
        li.el-menu-item(@click="logout") 注销
    hr
    router-view  
</template>
<script>
import Cookie from 'js-cookie'
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  mounted() {
    if (this.userInfo) {
      this.$router.push(this.$route.path);
    }
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ]),
    logout () {
      Cookie.remove('tokenID')
      this.setUserInfo(null);
      this.$router.push('/');
      this.$message('登出测试')
    }
  }
}
</script>


