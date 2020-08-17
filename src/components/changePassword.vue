<template>
  <div>
    <div class="top_bar">输入原始/旧密码验证身份</div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="pass">
        <el-input type="password" placeholder="原始/旧密码" v-model="ruleForm.pass" suffix-icon="el-icon-view" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" placeholder="再次输入" v-model="ruleForm.checkPass" suffix-icon="el-icon-view" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary">提交</el-button> -->
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
         <el-button type="primary" class="btns"  @click="submitForm('ruleForm')" round>确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        //   alert("submit!");
          console.log(valid)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less">
.top_bar {
  text-align: left;
  font-size: 22px;
  color: #ffffff;
  padding-bottom: 10px;
  border-bottom: 2px solid #ffffff;
}
.demo-ruleForm {
  margin-top: 130px;
  padding: 0 16px !important;
  .el-form-item__content {
    margin-left: 0 !important;
  }
}
.el-form-item__content {
  margin-left: 0px !important;
}
.btns{
    width: 305px;
    margin-top: 50px !important;
}
</style>