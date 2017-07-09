<template lang="pug">
  el-card.notelist(v-if="notes.length > 0")
    el-row.note-item(v-for = "i in notes" :key="'n-'+i") 
      el-col(:span = "4").note-time {{i.createTime}}
      el-col(:span="20").note-text {{i.noteText}}
</template>
<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
import fecha from 'fecha'

export default {
  data () {
    return {
      notes: []
    }
  },
  props: [
    'userID'
  ],
  methods: {
    getNote () {
      let data = {
        userID: this.userID
      }
      axios.get('http://localhost/showNote', {
        params: data
      }).then(res => {
        let today = new Date()
        let todayString = fecha.format(today,'YYYYMMDD')
        this.notes = res.data.map(item => {
          let day = fecha.format(fecha.parse(item.createTime, 'YYYY-MM-DD HH:mm:ss ZZ'), 'YYYYMMDD')
          if (day == todayString) {
            item.createTime = fecha.format(fecha.parse(item.createTime, 'YYYY-MM-DD HH:mm:ss ZZ'), 'HH:mm')
          } else {
            item.createTime = fecha.format(fecha.parse(item.createTime, 'YYYY-MM-DD HH:mm:ss ZZ'), 'MM-DD')
          }
          return item
        })
      })
    }
  },
  mounted () {
    this.getNote ()
  }
}
</script>
<style lang="scss">
  .note-item {
    line-height: 36px;
    border: 1px solid #d1dbe5;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    border-radius: 4px;
    margin-bottom: 5px;
  }
  .note-time {
    background-color: royalblue;
    color: white;
    text-align: center;
  }
  .note-text {
    padding-left: 1em;
  }
</style>

