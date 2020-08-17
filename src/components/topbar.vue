<template>
  <div>
    <div class="tabBar">
      <div class="top">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link" style="color:#ffffff;">
            智慧农业
            <img src="../../public/images/icon_qiehuan.png" alt />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in Trades"
              :key="item.hyid"
              @click.native="choose(item.hyid,item.name)"
            >{{item.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item class="choose">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <slot> </slot>
        <div class="weather" @mouseover="show" @mouseout="block">
            <img src="../../public/images/icon_qing.png" alt="">
          <div class="aaaa">
            <p>天气: <span>晴</span></p>
            <p>温度: <span>36°</span></p>
          </div>
        </div>
        <div class="imgs">
          <img src="../../public/images/jinbao.gif" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Trades: [
        {
          name: "智慧农业",
          hyid: "001"
        },
        {
          name: "智慧林业",
          hyid: "002"
        },
        {
          name: "智慧牧业",
          hyid: "003"
        },
        {
          name: "智慧渔业",
          hyid: "004"
        }
      ], //所选行业
      flag:false,
      flags:true
    };
  },
  methods:{
      show() {
         this.$emit('wehter',this.flags)
      },
      block() {
          this.$emit('wehter',this.flag)
      }
  }
};
</script>

<style lang="less" scoped>
.tabBar {
  height: 84px;
  width: 1540px;
  border-radius: 20px;
  background-image: url("../../public/images/dingbu_bg.png");
  font-size: 30px !important;
  line-height: 84px;
}
.top {
  height: 100%;
  width: 100%;
  padding: 0;
  border: none;
  display: flex;
  justify-content: space-around;
  .el-dropdown-link {
    font-size: 30px;
  }
}
.el-breadcrumb {
  font-size: 20px;
  height: 100%;
  span {
    height: 100%;
    line-height: 84px;
  }
}
.weather {
  img {
    margin-right: 20px;
    vertical-align: middle;
  }
  span {
    font-size: 14px;
    color: #ffffff;
  }
    p {
        line-height: normal;
      font-size: 14px;
       color: #ffffff;
  }
}
.aaaa {
  display: inline-block;
  position: relative;
  top: 10px;
}
</style>