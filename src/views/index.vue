<template>
  <div class="Full">
    <div class="content_left">
      <div class="left_top">
        <div class="yes">
          <img class="add" src="../../public/images/icon_caidan.png" alt />
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              智慧农业监测平台
              <i class="el-icon-arrow-down el-icon--right" style="color:#5C6295;"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="content_bar">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item v-for="(item) in leftBar" :key="item.id" index="1" style="margin-top:0px">
            <i class>
              <img src="../../public/images/icon_shengtai.png" alt />
            </i>
            <span slot="title">{{item.rolename}}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="content_right">
      <router-view />
    </div>
    <div class="both"></div>
  </div>
</template>

<script>
import { regionData } from "element-china-area-data";
export default {
  data() {
    return {
      leftBar:[]
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    indexmation() {
      //首页侧边树
      const userid = JSON.parse(localStorage.getItem("user")).userid;
      this.request("POST", "indexmation", {
        userid: userid
      }).then(res => {
        if(res.status==200) {
          console.log(res)
          this.leftBar=res.data.data
        }else {
          this.$message.error('获取失败');
        }
      });
    }
  },
  created() {
    this.indexmation();
  },
  components: {}
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "SourceHanSansCN-Light";
  src: url("../assets/font/思源黑体/SourceHanSansCN-Light.otf");
}
.Full {
  background: url("../../public/images/bj.png");
  font-family: SourceHanSansCN-Light;
  cursor: default;
  // height: 100%;
}
</style>