<template lang="pug">
  el-card
    header(slot="header") 添加便签
    el-input(type="textarea", v-model="note")
    hr
    el-button(type="primary", @click="submit") 添加
</template>
<script>
import {mapGetters} from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
      note: 'aaa'
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    submit () {
      let data = {
        tokenID: this.userInfo.tokenID,
        userID: this.userInfo.userID,
        noteText: this.note,
      }
      axios.post('http://localhost/addnote', data).then((res) => {
        this.$parent.$emit('refresh');
      })
    }
  }
}
</script>
