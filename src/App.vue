<template>
  <div id="app" class="fillcontain">
    <router-view />
  </div>
</template>

<style lang="less">
 #app,body,html{
   height: 100%;
 }
 #app {
   width: 100%;
 }
@font-face {
  font-family: "SourceHanSansCN-Light";
  src: url("./assets/font/思源黑体/SourceHanSansCN-Light.otf");
}
</style>