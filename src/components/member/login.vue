<template lang="pug">
  #login
    el-card
      el-form(label-width="80px")
        el-form-item(label="用户名：")
          el-input(v-model="user.user")
        el-form-item(label="密码：")
          el-input(v-model="user.password")
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
          this.$router.push('info');
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


