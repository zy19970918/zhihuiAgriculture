<template>
  <div>
    <topbars class="topbar"></topbars>
    <div class="right_top">
      <div class="first">
        <div class="searchs">
          <el-input
            placeholder="请输入关键字"
            icon="search"
            class="search"
            v-model="search"
            suffix-icon="el-icon-search"
          ></el-input>
        </div>
        <div class="address">
          <i class="el-icon-location-outline"></i>:
          <el-cascader
            size="large"
            :options="options"
            v-model="selectedOptions"
            @change="handleChange"
          ></el-cascader>
        </div>
        <el-table
          :data="tables.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%"
          :current-page.sync="currentPage"
        >
          <el-table-column prop="landname" label="田地"></el-table-column>
          <el-table-column prop="validflag" label="目前情况"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span style="cursor: pointer;" @click="handleEdit(scope.$index, scope.row)">查看</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[10, 15, 20]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
      <div class="second">
        <div class="second_bar" style="margin-top:67px;">
          <div class="left">
            <span class="ont">本月新增田地</span>
            <p>{{data.landcount}}/块</p>
          </div>
          <!-- <div class="right">
              <span class="bnt">+51%</span>
              <img src="../../public/images/shengshi.png" alt />
          </div>-->
        </div>
        <div class="second_bar three_bar">
          <div class="left">
            <span class="ont">本月新增农场</span>
            <p>{{data.farmcount}}/片</p>
          </div>
          <!-- <div class="right">
              <span class="bnt">-18%</span>
              <img src="../../public/images/jiangshi.png" alt />
          </div>-->
        </div>
        <div class="second_bar four_bar">
          <div class="left">
            <span class="ont">本月新增用户</span>
            <p>{{data.usercount}}/人</p>
          </div>
          <!-- <div class="right">
              <span class="bnt">-19%</span>
              <img src="../../public/images/jiangshi.png" alt />
          </div>-->
        </div>
        <div class="second_bar five_bar">
          <div class="left">
            <span class="ont">本月新增设备</span>
            <p>{{data.devicecount}}/台</p>
          </div>
          <!-- <div class="right">
              <span class="bnt">-19%</span>
              <img src="../../public/images/jiangshi.png" alt />
          </div>-->
        </div>
      </div>
    </div>
    <chart class="chart"></chart>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import topbars from "../components/topbars";
import chart from "../page/chart";
import { regionData } from "element-china-area-data";
// import information from '../components/information'
// import changePassword from '../components/changePassword'
export default {
  data() {
    return {
      search: "", //搜索
      breadList: [],
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
      tableData: [],
      tel: "",
      currentPage: 1,
      pagesize: 10,
      options: regionData,
      selectedOptions: ["110000", "110100", "110101"],
      hyid: "001",
      name: "智慧农业", //行业名称
      title: "", //面包屑
      total: 20,
      data: "", //新增统计
      centerDialogVisible: false,
    };
  },
  computed: {
    tables: function () {
      var search = this.search;
      if (search) {
        return this.tableData.filter(function (dataNews) {
          return Object.keys(dataNews).some(function (key) {
            return String(dataNews[key]).toLowerCase().indexOf(search) > -1;
          });
        });
      }
      return this.tableData;
    },
  },
  methods: {
    handleOpen() {
      //下拉选择
    },
    handleClose() {},
    getBreadcrumb() {
      console.log("执行");
      this.title = this.$route.name;
      this.breadList = [];
      this.breadList.push({ name: "", path: "/", meta: { title: "首页" } });
      this.$route.matched.forEach((item) => {
        if (item.path !== "") {
          this.breadList.push(item);
        }
      });
    },
    handleChange(value) {
      //获取农田信息
      console.log(value[2]);
      this.request("POST", "field", {
        divisionID: value[2],
        hyid: this.hyid,
      }).then((res) => {
        if (res.status == 200) {
          this.tableData = res.data.data;
        }
      });
    },
    add() {
      var w = document.documentElement.clientWidth;
      var h = document.documentElement.clientHeight;
      console.log(w);
      console.log(h);
    },
    geturl() {},
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    choose(hyid, name) {
      //行业id
      this.hyid = hyid;
      this.name = name;
    },
    handleEdit(a, b) {
      console.log(a);
      console.log(b);
    },
    signOut() {
      //退出登录
      console.log("哈哈哈哈");
      this.request("POST", "sinOut").then((res) => {
        console.log(res);
      });
    },

    countcustomer() {
      // 首页四个本月统计接口查询
      this.request("POST", "countcustomer", {}).then((res) => {
        if (res.status == 200) {
          this.data = res.data.message[0];
        } else {
          console.log("出错了");
        }
      });
    },
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.countcustomer();
  },
  mounted() {},
  components: {
    chart,
    topbars,
  },
};
</script>
<style lang="less">
.chart {
  margin-top: 22px;
}
@font-face {
  font-family: "SourceHanSansCN-Light";
  src: url("../assets/font/思源黑体/SourceHanSansCN-Light.otf");
}
.topbar {
  margin-top: 36px;
}
.content_left {
  float: left;
  width: 274px;
  padding-left: 37px;
}
.left_top {
  margin-top: 29px;
  .el-dropdown {
    position: none;
    height: 29px;
    line-height: 29px;
    vertical-align: top;
  }
}
.el-dropdown-link {
  display: inline-block;
  margin-left: 21px;
  font-size: 20px;
  font-family: SourceHanSansCN-Light;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
  img {
    margin-left: 13px;
  }
}
.el-menu-vertical-demo {
  margin-top: 131px;
  padding: 0 0 !important;
  background: none !important;
  border-right: none !important;
}
.content_bar {
  margin-top: 139px;
}
.content_bar .el-menu-item {
  padding-left: 0 !important;
  height: 24px;
  font-size: 20px;
  margin-top: 42px;
  background: none !important;
  color: #cccccc !important;
  line-height: 24px !important;
  span {
    margin-left: 30px;
    font-family: SourceHanSansCN-Light !important;
  }
  span:hover {
    color: white;
  }
}
.el-cascader {
  .el-input {
    background: none !important;
  }
  .el-input__inner {
    font-size: 14px;
    background: none;
    border: none;
    color: white;
    padding: 0;
    padding-right: 10px;
    height: none;
  }
}
.content_right {
  float: right;
}
.right_top {
  position: relative;
  display: inline-block;
  width: 1539px;
  height: 631px;
  background: linear-gradient(
    0deg,
    rgba(38, 45, 86, 1),
    rgba(62, 71, 129, 1)
  ) !important;
  opacity: 0.8;
  border-radius: 30px;
  margin-top: 52px;
  margin-right: 36px;
}
.right_bottom {
  width: 1539px;
  height: 359px;
  background: linear-gradient(0deg, rgba(38, 45, 86, 1), rgba(62, 71, 129, 1));
  opacity: 0.8;
  border-radius: 30px;
  margin-top: 30px;
  margin-right: 30px;
}
.both {
  clear: both;
}
.first {
  padding-left: 61px;
  margin-top: 32px;
  width: 860.3px;
  display: inline-block;
}
.top {
  width: 860.3px;
  // display: flex;
  // justify-content:left;
  padding-bottom: 28px;
  border-bottom: 2px solid #2c2a4b;
  overflow: hidden;
  span {
    color: #8995cb;
  }
}
.border {
  border-bottom: 2px solid #7965f1;
  font-size: 20px;
}
.searchs {
  display: inline-block;
  margin-top: 29px;
  width: 190px;
  height: 100%;
  border-radius: 18px;
  background-color: #373f70;
  position: relative;
  input {
    border-style: none;
    background-color: #373f70;
    margin-left: 15px;
    width: 150px;
    // height:100%;
    color: #ffffff;
  }
  input::-webkit-input-placeholder {
    color: #8995cb;
    font-size: 14px;
  }
  input:focus {
    outline: none;
  }
  img {
    vertical-align: middle;
    max-height: 40px;
  }
}

.address {
  margin-top: 40px;
  font-size: 14px;
  float: right;
  margin-right: 8px;
  color: #9999cc;
  margin-left: 10px;
  span {
    color: #ffffff;
  }
  .el-input {
    width: 190px;
    height: 37px;
    background: rgba(44, 42, 75, 1);
    border-radius: 19px;
  }
}
.el-table {
  margin-top: 10px;
}
.el-table th > .cell {
  text-align: center !important;
}
.el-pagination {
  display: inline-block;
}
.second {
  float: right;
}
.second_bar {
  position: relative;
  left: -116px;
  width: 342px;
  height: 100px;
  margin-top: 22px;
  background-image: url("../../public/images/b44c196bbfe54ae4b8e46424c5951e8.png");
  background-size: cover;
  overflow: hidden;
  .ont {
    position: absolute;
    top: 9px;
    left: 13px;
    font-family: SourceHanSansCN-Regular;
    font-size: 16px;
    color: #8995cb;
  }
  p {
    position: absolute;
    top: 45px;
    left: 33px;
    color: #ffffff;
    font-size: 40px;
    font-family: SourceHanSansCN-Regular;
    margin: 0 0 !important;
  }
  .bnt {
    position: absolute;
    top: 30px;
    right: 88px;
    font-family: SourceHanSansCN-Regular;
    color: #ffffff;
    font-size: 21px;
  }
  img {
    position: absolute;
    right: 17px;
    top: 69px;
    height: 50px;
    width: 114px;
  }
}
.three_bar {
  background-image: url("../../public/images/2d946083bd5e4e3f535fcc334547fae.png");
}
.four_bar {
  background-image: url("../../public/images/7a5945e20e75217c429d1e4ffd43fc5.png");
}
.five_bar {
  background-image: url("../../public/images/465871cc493b764b24d1f74795dd03c.png");
}

.bottom {
  width: 483px;
  height: 359px;
  background-color: red;
}
.el-table {
  font-size: 18.01px !important;
  padding: 0 !important;
  background-color: transparent !important;
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px solid #2c2a4b !important;
  }
}
.el-table th {
  padding: 0 !important;
  border-bottom: 1px solid #2c2a4b;
  color: #ffffff !important;
  padding-bottom: 5px !important;
  font-size: 20px !important;
}
.el-table th,
.el-table tr {
  background-color: transparent !important;
}
.el-table td {
  padding: 0 !important;
  padding-bottom: 6px !important;
  padding-top: 6px !important;
  color: #8995cb !important;
}
.el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: none !important;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #2c2a4b !important;
}
.el-table--border,
.el-table--group {
  border: 0px solid #2c2a4b !important;
}
.el-table .cell {
  text-align: center;
}
.page {
  position: absolute;
  bottom: 10px;
  width: 54%;
  height: 30px;
  text-align: center;
}
.el-icon-location-outline:before {
  color: #9999cc;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: transparent !important;
}
.page {
  span {
    color: #ffffff;
  }
  input {
    background-color: #2c2a4b;
    color: #ffffff;
  }
  .el-pager li {
    background-color: #2c2a4b;
    color: #ffffff;
  }
  .el-pagination .btn-next,
  .el-pagination .btn-prev {
    color: #ffffff;
    background-color: #2c2a4b;
  }
  .top span {
    line-height: 0.15625rem;
    color: #ffffff;
  }
}
.el-breadcrumb {
  color: #ffffff !important;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  height: 50px;
  margin-left: 70px;
  vertical-align: top;
}
.el-dialog--center .el-dialog__body {
  text-align: center !important;
  padding: 0 !important;
}
.el-dialog {
  background: none !important;
  background-image: url("../../public/images/beijinger.png") !important;
  height: 790px;
  padding-bottom: 47px;
  background-size: 100% !important;
  background-repeat: no-repeat !important;
  border-radius: 25px !important;
  padding: 0 38px !important;
  .el-avatar--circle {
    height: 70px !important;
    width: 70px !important;
    border-radius: 50%;
  }
}
.block {
  font-family: SourceHanSansCN-Light;
  color: #8995cb;
  .names {
    font-size: 24px;
    margin-top: 13px;
  }
  .user_details {
    margin-top: 19px;
    li {
      border-top: 1px solid #000000;
      padding: 9px 38px;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      font-size: 18px;
      span {
        font-size: 16px;
        // height: 100%;
        // line-height: 100%;
      }
      .user {
        margin-right: 11px;
      }
      .xiugai {
        width: 14px;
        height: 12px;
        vertical-align: middle;
      }
      .user_name {
        margin-right: 55px;
      }
    }
    img {
      vertical-align: middle;
    }
  }
}
.footers {
  padding-top: 53px;
  .el-button {
    width: 367px !important;
    height: 50px !important;
    font-size: 22px !important;
    letter-spacing: 2px;
  }
}
</style>