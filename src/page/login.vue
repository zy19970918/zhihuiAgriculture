<template>
  <div class="max">
    <div class="box">
      <div class="content">
        <div class="login-title">
          您好!&ensp;&ensp;&nbsp;欢迎登录
          <br />智慧农业后台
        </div>
        <div class="down"></div>

        <div class="username">
          <div class="user-tib">
            <div class="pic">
              <img src="../../public/images/a5eae5f935115d82c1f2560b0c0614f.png" alt />
            </div>
          </div>
          <div class="username-txt">
            <el-input v-model="username" placeholder="账号:"></el-input>
          </div>
        </div>

        <div class="login-password">
          <div class="user-tib">
            <div class="pic">
              <img src="../../public/images/d91ec6c84497b037474c5ce0ec7c8ee.png" alt />
            </div>
          </div>
          <div class="username-txt">
            <el-input v-model="password" placeholder="密码:" show-password></el-input>
          </div>
        </div>

        <div class="btn" @click="login1">
          <div class="btn-txt">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      password: "",
      username: ""
    };
  },
  methods: {
    login1() {
      // this.utils.openLoding()
      if (this.username == "") {
        // this.$message("用户名不能为空");
      } else if (this.password == "") {
        this.$message("密码不能为空");
      } else {
        console.log(this.utils);
        var that = this;
        this.request("POST", "login", {
          username: that.username,
          plainpassword: that.password
        }).then(res => {
          console.log(res);
          if (res.data.message[0] == 200) {
            localStorage.setItem("user", JSON.stringify(res.data.message[1]));
            this.$message({
              message: res.data.message[2],
              type: "success"
            });
            this.$router.push({ path: "/index" });
          } else {
            this.$message({
              message: res.data.message[1],
              type: "warning"
            });
          }
        });
      }
    }
  }
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
.max {
  width: 100%;
  height: 100%;
  background: url("../../public/images/8abe462172e0e960614dcd4e5d930fe.png");
  background-size: 100% 100%;
}

.box {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
}

.content {
  width: 340px;
  height: 430px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 20px;
  margin: -215px 0 0 -170px;
  background: rgba(255, 255, 255, 0.9);
}

.content-area {
  width: 400px;
  height: 500px;
  background-color: red;
  position: absolute;
  top: 70px;
  left: 70px;
}

.login-pic {
  width: 600px;
  height: 100%;
  /* background:url("../img/login.jpg"); */
  background-size: cover;
  position: absolute;
  left: 0;
}

.login-title {
  width: 200px;
  height: 50px;
  /* background-color:yellow; */
  position: absolute;
  top: 48px;
  left: 35px;
  font-size: 20px;
  color: #566454;
}

.down {
  width: 40px;
  height: 5px;
  position: absolute;
  top: 102px;
  left: 35px;
  background-color: #566454;
  border-radius: 1px;
}

.username {
  width: 267px;
  height: 40px;
  /* background-color:orange; */
  position: absolute;
  border-radius: 5px;
  top: 134px;
  left: 35px;
}

.user-tib {
  width: 44px;
  height: 100%;
  background-color: #566454;
  position: relative;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pic {
  position: absolute;
  left: 12px;
  top: 8px;
}

.txt {
  position: absolute;
  left: 180px;
}

.login-content {
  width: 100%;
  height: 440px;
  background-color: red;
  position: absolute;
  top: 60px;
}

.login-username {
  width: 100%;
  height: 60px;
  background-color: green;
  line-height: 60px;
  position: relative;
  top: 60px;
}

.mark {
  width: 80px;
  height: 100%;
  font-size: 20px;
  padding-left: 10px;
}

.username-txt {
  width: 223px;
  height: 100%;
  position: absolute;
  left: 44px;
  /* background-color:red; */
  top: 0;
}

.login-password {
  width: 267px;
  height: 40px;
  background-color: green;
  position: absolute;
  top: 202px;
  left: 35px;
  border-radius: 5px;
}

.login-password >>> i {
  position: relative;
  top: 0;
}

.btn {
  width: 267px;
  height: 40px;
  background-color: green;
  border-radius: 5px;
  position: absolute;
  line-height: 40px;
  top: 282px;
  left: 34px;
  color: white;
}

.btn-txt {
  position: absolute;
  left: 110px;
  font-size: 20px;
}
</style>

  