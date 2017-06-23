<template lang="pug">
  #member
    el-menu(mode="horizontal",theme="dark", :router="true")
      el-menu-item(index="reg") 注册
      el-menu-item(index="login") 登录
      el-menu-item(index="info") 个人中心
    hr
    router-view  
</template>

