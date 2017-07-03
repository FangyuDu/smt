<template lang="pug">
  #memberInfo
    el-card(v-if="userInfo")
      h1 {{userInfo.name}}
      hr
      el-form(label-width="120px")
        el-form-item(label="年龄：")
          el-input(v-model="userInfo.age")
    el-card(hidden) aaa      
</template>
<script>
import Cookie from 'js-cookie'
import {mapGetters} from 'vuex'

export default {
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
