<template lang="pug">
  #upload-panel
    el-card
      header(slot="header") 上传页面
      el-upload(
        action = "http://localhost/upload",
       :file-list="fileList", 
       :on-preview="handlePreview",
       drag,
       multiple
      )
        i.el-icon-upload
        p
          el-button 点击上传
</template>
<script>
export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style lang="scss">
  #upload-panel {
    width: 500px;
    .el-upload {
      display: block;
    }
    .el-upload-dragger {
      width: auto;
    }
  }
</style>
