<template lang="pug">
  #login
    el-card
      el-form(label-width="80px")
        el-form-item(label="用户名：")
          el-input
        el-form-item(label="密码：")
          el-input
        el-form-item
          el-button(type="primary") 登录
          el-button 取消
</template>
<script>
export default {
  mounted () {
    console.log(this.$store.state.userInfo);
  }  
}
</script>


