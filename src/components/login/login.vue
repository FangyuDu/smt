<template lang="pug">
  #login
    el-card.login-fr
      header(slot="header") 登录
      el-form(label-width="80px")
        el-form-item(label="用户名：")
          el-input(v-model="user.user")
        el-form-item(label="密码：")
          el-input(v-model="user.password")
        el-form-item
          | 暂无帐号，
          router-link(to="reg") 立即注册
          | ！
          //- | 。返回
          //- router-link(to="/") 首页
        el-form-item
          el-button(type="primary",v-on:click="login") 登录
          el-button 取消
</template>
<script>
import axios from 'axios'
import md5 from 'md5'
import Cookie from 'js-cookie'
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      user: {
        user: 'dfy',
        password: 'dfy1234'
      }
    }  
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ]),
    login () {
      let data  = {
        user: this.user.user,
        password: md5(this.user.password)
      }
      axios.post('http://dfy/bin/login', data).then(res => {
        let cb = res.data
        if (cb.state) {
          Cookie.set('tokenID', cb.data.tokenID, {expires: .5})
          this.setUserInfo(cb.data);
          this.$router.push('/');
          console.log(this.$store.state);
        } else {
          // this.$message('用户名或密码')
        }
        this.$message(cb.message)
      })
    }
  },
  mounted () {
    // this.setUserInfo('user')
  }
}
</script>
<style lang="scss">
  #login {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: url('../../assets/img/bg-1.jpg');
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
  }
  .el-card.login-fr {
    width: 500px;
    background-color: rgba(255, 255, 255, .93);
  }
</style>


