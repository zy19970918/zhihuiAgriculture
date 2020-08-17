<template>
  <div>
    <topbars class="topbar"></topbars>
    <div class="right_top top_none">
      <div class="left_bar">
        <div class="searchs">
          <el-input
            placeholder="请输入关键字"
            icon="search"
            class="search"
            v-model="search"
            suffix-icon="el-icon-search"
          ></el-input>
        </div>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="right_bar">
        <div class="top_bars">
          <div>
            <label for>用户名称:</label>
            <div class="searchs">
              <el-input
                placeholder="请输入关键字"
                icon="search"
                class="search"
                v-model="search"
                suffix-icon="el-icon-search"
              ></el-input>
            </div>
          </div>
          <div>
            <label for>手机号码:</label>
            <div class="searchs">
              <el-input
                placeholder="请输入关键字"
                icon="search"
                class="search"
                v-model="search"
                suffix-icon="el-icon-search"
              ></el-input>
            </div>
          </div>
          <div>
            <label for>创建时间：</label>
            <el-date-picker
              v-model="value1"
              prefix-icon="el-icon-date"
              type="datetimerange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
          <el-button type="primary" size="mini" icon="el-icon-search" round>搜索</el-button>
          <el-button type="danger" size="mini" icon="el-icon-refresh-left" round>重置</el-button>
        </div>

        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button
              type="primary"
              icon="el-icon-plus"
              size="mini"
              @click="dialogFormVisible = true"
              v-hasPermi="['system:post:add']"
            >新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button
              type="success"
              icon="el-icon-edit"
              size="mini"
              :disabled="flag"
              @click="dialogFormVisible = true"
              v-hasPermi="['system:post:edit']"
            >修改</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              :disabled="flag"
              @click="handleDelete"
              v-hasPermi="['system:post:remove']"
            >删除</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button
              type="warning"
              icon="el-icon-download"
              size="mini"
              @click="handleExport"
              v-hasPermi="['system:post:export']"
            >导出</el-button>
          </el-col>
        </el-row>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
          </el-table-column>
          <el-table-column prop="identity" label="身份" width="120"></el-table-column>
          <el-table-column prop="mechanism" label="机构" show-overflow-tooltip></el-table-column>
          <el-table-column prop="code" label="状态" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" label="联系号码" show-overflow-tooltip></el-table-column>
          <el-table-column prop="operation" label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- Form -->

        <el-dialog append-to-body title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="身份" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="机构" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>

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
    </div>
  </div>
</template>

<script>
import topbars from "../components/topbars";
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      defaultProps: {
        children: "children",
        label: "label",
      },
      search: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          identity: "平台管理员",
          mechanism: "中国银行",
          code: "按钮",
          phone: "110110110110",
        },
      ],
      multipleSelection: [], //所选择的项
      flag: true,
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit() {
      this.dialogFormVisible = true;
    },
  },
  components: {
    topbars,
  },
  watch: {
    multipleSelection: function () {
      if (this.multipleSelection.length !== 0) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
  },
};
</script>

<style lang="less">
.top_none {
  height: 925px !important;
  // box-sizing: border-box;
  background-image: none !important;
}
.left_bar {
  height: 878px;
  width: 262px;
  display: inline-block;
  background-image: url('../../public/images/c701d464de2d236b4876ea94fbfbc23.png');
  background-repeat: no-repeat;
  border-radius: 30px;
  .searchs {
    width: 173px;
    margin-top: 41px;
    margin-left: 40px;
    height: 36px;
    input {
      background-color: #373F70;
      height: 36px;
      border-radius: 25px;
    }
  }
  .el-tree {
    background-color: transparent !important;
    font-size: 16px !important;
    padding-left: 50px;
    margin-top: 10px;
    .el-tree-node {
      // background-color: #373E70 !important;
      border-radius: 9px !important;
      color: #8995cb !important;
      font-size: 14px !important;
      // border: 1px solid red;
      margin-top: 7px;
    }
  }
}
.right_bar {
  position: relative;
  font-size: 24px;
  font-family: SourceHanSansCN-Light;
  height: 878px;
  width: 1216px;
  float: right;
 background-image: url('../../public/images/d180a7efc9b979c3e520dde8772622c.png');
  border-radius: 30px;
  color: #ffffff;
  padding-top: 41px;
  padding-right: 61px;
  padding-left: 34px;
  box-sizing: border-box;
  .page {
    width: 100% !important;
  }
   input {
      background-color: #373F70 !important;
    }
  .top_bars {
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    .el-date-editor--datetimerange.el-input,
    .el-date-editor--datetimerange.el-input__inner {
      
    .el-range-separator{
      color: white !important;
    }
      width: 200px !important;
      background-color: #373F70 !important;
      border: 1px solid transparent !important;
      border-radius: 22px !important;
      .el-date-editor .el-range-input {
        background-color: #373f70 !important;
        border-radius: 25px !important;
      }
    }
    .el-button--danger,
    .el-button--primary{
      height: 35px !important;
      border-radius: 10px;
      margin-top: 5px;
    }
    .searchs {
      margin-top: 0px;
      background-color: #373F70 !important;
      input {
        border-radius: 25px;
      }
    }
  }
}
.el-row {
  float: right;
  margin-top: 25px;
}
.el-table {
  margin-top: 80px;
}
</style>