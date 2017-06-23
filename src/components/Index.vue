<template>
  <div id="indexPage">
    首页部分
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    const tokenId = sessionStorage.getItem('tokenId');
    if (!tokenId) {
        next({ path: '/member/login' })
    } else {
        next()
    }
  }
}
</script>
