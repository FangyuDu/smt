<template lang="pug">
  #member
    el-menu(mode="horizontal",theme="dark", :router="true")
      template(v-if="userInfo")
        el-menu-item(index="/") 网站首页
        el-menu-item(index="info") 个人中心
        li.el-menu-item(@click="logout") 注销
    .main
      el-card.member-left
        el-card 基本信息
        el-card 笔记
        el-card 上传
        el-card 文件管理
      el-card.member-body
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
<style lang="scss">
  #member {
    width: 100%;
    .main {
      display: flex;
      align-content:flex-start;
      height: calc(100% - 60px);
    }
    .member-left {width: 200px;}
    .member-body {
      flex: 2;
    }
  }
</style>


