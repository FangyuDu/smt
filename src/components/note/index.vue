<template lang="pug">
  #note
    noteList(v-if="userInfo", :userID="userInfo.userID", ref="notelist")
    addNote
</template>
<script>
import noteList from './notelist'
import addNote from './addNote'

import {mapGetters} from 'vuex'

export default {
  components: {
    noteList,
    addNote
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  mounted () {
    this.$on('refresh', () => {
      this.$refs.notelist.getNote ()
    })
  }  
}
</script>
