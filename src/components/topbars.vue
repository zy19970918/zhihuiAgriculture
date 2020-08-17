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
        <slot></slot>
        <div class="parser">
          <div class="counts">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594898167458&di=2a65dbc8f43cd615e8876ce23294c73d&imgtype=0&src=http%3A%2F%2Fwww.qqtu8.net%2Ff%2F20140228124631_9.jpg"
              alt
              @click="adss"
            />
            <div>
              <el-dropdown class trigger="click">
                <span class="username">
                  张耀
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="adss">个人中心</el-dropdown-item>
                  <el-dropdown-item @click.native="signOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
         <el-dialog append-to-body :visible.sync="centerDialogVisible" width="600px" center>
          <!-- <router-view /> -->
          <information v-show="count" @info="changecount"></information>
          <changePassword v-show="!count"></changePassword>

        </el-dialog>
        <div class="imgs">
          <img src="../../public/images/jinbao.gif" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import information from '../components/information'
import changePassword from '../components/changePassword'
export default {
  data() {
    return {
      Trades: [
        {
          name: "智慧农业",
          hyid: "001",
        },
        {
          name: "智慧林业",
          hyid: "002",
        },
        {
          name: "智慧牧业",
          hyid: "003",
        },
        {
          name: "智慧渔业",
          hyid: "004",
        },
      ], //所选行业
      flag: false,
      flags: true,
       centerDialogVisible: false,
       count:true
    };
  },
  methods: {
    show() {
      this.$emit("wehter", this.flags);
    },
    block() {
      this.$emit("wehter", this.flag);
    },
    adss() {
      this.count=true
          console.log("执行啊啊啊")
      this.centerDialogVisible = true;
    //   this.$router.push("/index/agricultreu/information");
    },
    changecount() {
       this.count=false
    }
  },
  components:{
      information,
      changePassword
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
.parser {
  position: relative;
  // margin-top: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  .counts {
    display: flex;
    justify-content: center;
    align-items: center;
     .username{
      color: #FFFFFF;
      margin-left: 8px;
      font-size: 14px;
  }
    img {
      height: 48px;
      width: 48px;
      background: rgba(255, 255, 255, 1);
      border-radius: 50%;
    }
  }

  .el-dropdown-link[data-v-a83bd3b0] {
    display: inline-block;
    margin-left: 21px;
    font-size: 20px !important;
    color: white;
    font-family: SourceHanSansCN-Light;
    font-weight: 300;
    color: red;
  }
  .el_dro {
    display: inline-block;
    height: 52.43px;
    line-height: 52.43px;
    position: absolute;
    top: 0;
    font-size: 14px;
  }
}
</style>