<template lang="pug">
  #reg
    el-card.reg-form
      header(slot="header") 注册
      el-form(label-width="80px")
        el-form-item(label="用户名：")
          el-input(v-model="userInfo.user")
        el-form-item(label="昵称：")
          el-input(v-model="userInfo.name")
        el-form-item(label="密码：")
          el-input(type="password", v-model="userInfo.password")
        el-form-item
          | 已有帐号，
          router-link(to="login") 立即登录
        el-form-item
          el-button(type="primary", v-on:click="checkUserRepeat") 检测
          el-button(type="primary", v-on:click="reg") 注册
          el-button 取消
</template>
<script>
import md5 from 'md5'
import axios from 'axios'

export default {
  data () {
    return {
      userInfo: {
        user: 'aaa',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    checkUserRepeat () {
      let data = {
        user: this.userInfo.user
      }
      axios.post('http://dfy/bin/checkUserRepeat', data).then(res => {
        if (res.data.flag) {
          this.$message({
            message: '用户名已注册',
            type: 'warning'
          })
        } else {
          this.$message({
            message: '用户名尚未被注册',
            type: 'success'
          })
        }
      })
    },
    reg () {
      let data = {
        user: this.userInfo.user,
        name: this.userInfo.name,
        password: md5(this.userInfo.password)
      }
      axios.post('http://dfy/bin/reg', data).then(res => {
        console.log(res);
      })
      // console.log(data)
    }
  } 
}
</script>

<style lang="scss">
  #reg {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: url('../../assets/img/bg-2.jpg');
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
  }
  .reg-form.el-card {
    width: 500px;
    background-color: rgba(255, 255, 255, .93);
  }
</style>
