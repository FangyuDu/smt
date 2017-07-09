<template lang="pug">
  el-card(v-if="userInfo")
    h1 {{userInfo.name}}
    p
      el-input(type="textarea", placeholder="個人簡介", v-model="userInfo.introduce")
    hr
    el-form(label-width="100px")
      el-form-item(label="年龄：")
        el-input(v-model="userInfo.age")
      el-form-item(label="生日：")
          el-input  
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  }
}
</script>

