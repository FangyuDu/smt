<template lang="pug">
  #app
    router-view
</template>

<script>
import Cookie from 'js-cookie'
import axios from 'axios'
import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions([
      'setUserInfo'
    ])
  },
  created () {
    let tokenID = Cookie.get('tokenID');
    if (tokenID) {
      let data = {
        tokenID
      }
      axios.post('http://dfy/bin/loginByToken', data).then(res => {
        let cb = res.data
        if (cb.state) {
          Cookie.set('tokenID', cb.data.tokenID, {expires: .5})
          this.setUserInfo(cb.data);
          // this.$router.push('/member/info');
          // console.log(this.$store.state);
        } else {
          // this.$message('用户名或密码')
        }
        this.$message(cb.message)
      })
    }
  }
}
</script>
<style lang="scss">
  #app {
    display: flex;
    height: 100%;
  }
  .video-fr {
    left: 0px;
    position: fixed;
    bottom: 0px;
    resize: both;
    #video {
      height: 540x;
      width: 960x;
    }
    #v2 {
      height: 540x;
      width: 960x;
    }
  }
</style>
