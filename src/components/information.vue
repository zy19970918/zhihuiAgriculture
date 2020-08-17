<template>
    <div>
                  <div class="block">
            <el-avatar
              :size="50"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594898167458&di=2a65dbc8f43cd615e8876ce23294c73d&imgtype=0&src=http%3A%2F%2Fwww.qqtu8.net%2Ff%2F20140228124631_9.jpg"
            ></el-avatar>
            <p class="names">王先成</p>
            <ul class="user_details">
              <li>
                <div>
                  <img class="user" src="../../public/images/icon_yonghu.png" alt />
                  <span>用户名</span>
                </div>
                <span class="user_name">王先成</span>
                <img class="xiugai" src="../../public/images/icon_xiugai.png" alt />
              </li>
              <li>
                <div>
                  <img class="user" src="../../public/images/icon_xingbie.png" alt />
                  <span>性别</span>
                </div>
                <span class="user_name">男</span>
                <img class="xiugai" src="../../public/images/icon_xiugai.png" alt />
              </li>
              <li>
                <div>
                  <img class="user" src="../../public/images/icon_shengri.png" alt />
                  <span>生日</span>
                </div>
                <span class="user_name">1983.4.27</span>
                <img class="xiugai" src="../../public/images/icon_xiugai.png" alt />
              </li>
              <li>
                <div>
                  <img class="user" src="../../public/images/icon_suozaidi.png" alt />
                  <span>所在地</span>
                </div>
                <span class="user_name">江苏省南京市江宁区</span>
                <img class="xiugai" src="../../public/images/icon_xiugai.png" alt />
              </li>
              <li>
                <div>
                  <img class="user" src="../../public/images/icon_zhuzhi.png" alt />
                  <span>住址</span>
                </div>
                <span class="user_name">南京市秦淮区72号206幢</span>
                <img class="xiugai" src="../../public/images/icon_xiugai.png" alt />
              </li>
              <li>
                <div>
                  <img class="user" src="../../public/images/icon@.png" alt />
                  <span>Emall</span>
                </div>
                <span class="user_name">465416@163.com</span>
                <img class="xiugai" src="../../public/images/icon_xiugai.png" alt />
              </li>
              <li>
                <div>
                  <img class="user" src="../../public/images/icon_shouji.png" alt />
                  <span>手机</span>
                </div>
                <span class="user_name">13000002187</span>
                <img class="xiugai" src="../../public/images/icon_xiugai.png" alt />
              </li>
              <li>
                <div>
                  <img class="user" src="../../public/images/icon_aihao.png" alt />
                  <span>爱好</span>
                </div>
                <span class="user_name">唱歌、爬山</span>
                <img class="xiugai" src="../../public/images/icon_xiugai.png" alt />
              </li>
              <li>
                <div>
                  <img class="user" src="../../public/images/icon_zuoyouming.png" alt />
                  <span>座右铭</span>
                </div>
                <span class="user_name">海到尽头天是岸 山登绝顶我为峰</span>
                <img class="xiugai" src="../../public/images/icon_xiugai.png" alt />
              </li>
            </ul>
          </div>
          <div class="footers">
            <div>
              <el-button type="primary" icon="el-icon-lock" @click="changePassword" round>修改密码</el-button>
            </div>
            <div style="margin-top:31px;">
              <el-button type="danger" icon="el-icon-switch-button" round>退出登录</el-button>
            </div>
          </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },
    methods: {
      changePassword() {
        // this.count=false
       this.$emit('info')
      }
    },
}
</script>

<style lang="less">
    
</style>