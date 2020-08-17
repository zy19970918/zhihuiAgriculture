<template>
  <div>
    <div class="content_right">
      <tabBar @wehter="wehter">
         <div class="weather" @mouseover="show" @mouseout="block">
            <img src="../../public/images/icon_qing.png" alt="">
          <div class="aaaa">
            <p>天气: <span>晴</span></p>
            <p>温度: <span>36°</span></p>
          </div>
        </div>
      </tabBar>
      <div class="footer">
        <div class="footer_left">
          <div class="left_top">
            <div class="Subhead">
              <span>田地详情</span>
            </div>
            <div class="details">
              <img src="../../public/images/tiandi.png" alt />
              <div class="detail_cotent">
                <div class="det">
                  土地名称:
                  <span>陕西省西安市临潼区5号田</span>
                </div>
                <div class="det">
                  农场名称:
                  <span>临潼市吴迪农场</span>
                </div>
                <div class="det">
                  农场经度:
                  <span>109.220436</span>
                </div>
                <div class="det">
                  农场纬度:
                  <span>34.372747</span>
                </div>
                <div class="det">
                  测绘面积:
                  <span>5亩</span>
                </div>
                <div class="det">
                  实际面积:
                  <span>5亩</span>
                </div>
                <div class="det">
                  用户姓名:
                  <span>吴迪</span>
                </div>
                <div class="det">
                  联系方式:
                  <span>13000055155</span>
                </div>
                <div class="det">
                  投产日期:
                  <span>2019年5月24日</span>
                </div>
              </div>
            </div>
          </div>
          <div class="left_bottom">
            <div class="crop">
              <span>田地作物</span>
            </div>
            <div class="describe">
              <div>
                <div>
                  植物:
                  <span>西红柿</span>
                </div>
                <div>
                  生长期:
                  <span>22天</span>
                </div>
              </div>
              <div class="grow">
                <div>
                  幼苗期:
                  <span>12天</span>
                </div>
                <div>
                  发芽期:
                  <span>1天</span>
                </div>
              </div>
            </div>
            <div class="exhibition" style="margin-top:30px;">
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_fengsu.png" alt />
                  <p>
                    风速:
                    <span>19</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_fengxiang.png" alt />
                  <p>
                    风向:
                    <span>17</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_wendu.png" alt />
                  <p>
                    温度:
                    <span>20</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_shidu.png" alt />
                  <p>
                    湿度:
                    <span>22</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_qiya.png" alt />
                  <p>
                    气压:
                    <span>20</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_yuxue.png" alt />
                  <p>
                    雨雪:
                    <span>13</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_guangzhao.png" alt />
                  <p>
                    光照:
                    <span>18</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="exhibition two">
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_fengsu.png" alt />
                  <p>
                    风速:
                    <span>19</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_fengxiang.png" alt />
                  <p>
                    风向:
                    <span>17</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_wendu.png" alt />
                  <p>
                    温度:
                    <span>20</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_shidu.png" alt />
                  <p>
                    湿度:
                    <span>22</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_qiya.png" alt />
                  <p>
                    气压:
                    <span>20</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_yuxue.png" alt />
                  <p>
                    雨雪:
                    <span>13</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_guangzhao.png" alt />
                  <p>
                    光照:
                    <span>18</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="exhibition three">
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_fengsu.png" alt />
                  <p>
                    风速:
                    <span>19</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_fengxiang.png" alt />
                  <p>
                    风向:
                    <span>17</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_wendu.png" alt />
                  <p>
                    温度:
                    <span>20</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_shidu.png" alt />
                  <p>
                    湿度:
                    <span>22</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_qiya.png" alt />
                  <p>
                    气压:
                    <span>20</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_yuxue.png" alt />
                  <p>
                    雨雪:
                    <span>13</span>
                  </p>
                </div>
              </div>
              <div class="eq">
                <div class="add">
                  <img src="../../public/images/icon_guangzhao.png" alt />
                  <p>
                    光照:
                    <span>18</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_right">
         <div>
            <div class="box">
            <div class="content">
              <div class="content-left"></div>
              <div class="content-right">
                <div class="right-top">
                  <div class="left-mark">
                    <div class="mark-txt">视频监控</div>
                  </div>

                  <div class="setting">
                    <i class="el-icon-setting" @click="change" style="cursor:pointer"></i>
                  </div>
                  <!-- 右边快捷菜单 -->
                  <div class="control" v-show="iscontrol">
                    <div
                      class="control-close"
                      @click="iscontrol = false"
                      style="color:#ADADf6;cursor:pointer"
                    >X</div>
                    <div class="control-title">
                      <div class="control-txt">视频置顶设置</div>
                    </div>
                    <div class="vedio-lib">
                      <div class="vedio-item1">
                        <div class="item-pic"></div>
                      </div>
                      <div class="vedio-item1">
                        <div class="item-pic"></div>
                      </div>
                      <div class="vedio-item1">
                        <div class="item-pic"></div>
                      </div>
                      <div class="vedio-item1">
                        <div class="item-pic"></div>
                      </div>
                    </div>
                    <div class="vedio-state">
                      <!-- <div class="state-txt"></div>
                       <div class="state-txt"></div>
                       <div class="state-txt"></div>
                      <div class="state-txt"></div>-->
                      <div v-for="index in 4" :key="index" class="state-txt">
                        <div class="vedio-txt">{{index}}号视频</div>
                      </div>
                    </div>
                    <div class="vedio-underline"></div>
                    <div class="vedio-record">
                      <div class="record-top">
                        <div class="vedio-top center">置顶选择</div>
                        <div class="vedio-deal center">操作</div>
                        <div class="vedio-shu center">状态</div>
                        <div class="vedio-search">
                          <div class="search-tip"></div>
                          <div class="search-content">
                            <input type="text" style="border:none;position:relative;" />
                          </div>
                        </div>
                      </div>
                      <div class="record-bottom">
                        <div class="record-content">
                          <div class="table-lib" v-for="(item,index) in tableData" :key="index">
                            <div class="lib-item">
                              <div class="lib-select">
                                <div class="lib-select-button">
                                  <div class="lib-open" id="open"></div>
                                </div>
                                <div class="lib-select-name">
                                  <div class="select-name-position">一号视频</div>
                                </div>
                              </div>
                              <div class="lib-deal">
                                <div class="gender-lib">
                                  <div class="lib-txt son">开</div>
                                  <div class="lib-open open-son"></div>
                                </div>
                                <div class="gender-lib">
                                  <div class="lib-txt son">关</div>
                                  <div class="lib-close open-son"></div>
                                </div>
                              </div>
                              <div class="lib-state"></div>
                              <div class="lib-result">
                                <div class="result-txt">{{item.state}}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="vedio">
                    <div v-for="index in 10" :key="index" class="vedio-item" @click="open"></div>
                  </div>
                </div>
                <div class="right-bottom">
                  <div class="left-mark">
                    <div class="mark-txt">实操预设</div>
                  </div>
                  <div class="bottom-content">
                    <div class="fast-lib">
                      <div class="fast-txt">快捷栏</div>
                      <div class="icon-area" v-show="iconArea">
                        <div class="icon-title">置顶或取消</div>
                        <div
                          class="control-close"
                          id="icon"
                          @click="iconArea = false"
                          style="cursor:pointer"
                        >X</div>
                        <div class="icon-content">
                          <div class="icon-content-use">
                            <div
                              v-for="(item, index)  in selectItem"
                              :key="index"
                              class="icon-use-item"
                            >
                              <div class="use-item-cancel"></div>
                              <img :src="item.url" alt />
                            </div>
                          </div>
                          <div class="icon-content-ready">
                            <div class="ready-line">
                              <div
                                v-for="(item, index)  in lineItem1"
                                :key="index"
                                class="line-item"
                              >
                                <div class="use-item-add"></div>
                                <div class="line-item-content">
                                  <img :src="item.url" alt />
                                </div>
                                <div class="line-item-txt">
                                  <div class="item-txt-position">{{item.text}}</div>
                                </div>
                              </div>
                            </div>
                            <div class="ready-line">
                              <div
                                v-for="(item, index)  in lineItem2"
                                :key="index"
                                class="line-item"
                              >
                                <div class="use-item-add"></div>
                                <div class="line-item-content">
                                  <img :src="item.url" alt />
                                </div>
                                <div class="line-item-txt">
                                  <div class="item-txt-position">{{item.text}}</div>
                                </div>
                              </div>
                            </div>
                            <div class="ready-line">
                              <div
                                v-for="(item, index)  in lineItem3"
                                :key="index"
                                class="line-item"
                              >
                                <div class="use-item-add"></div>
                                <div class="line-item-content">
                                  <img :src="item.url" alt />
                                </div>
                                <div class="line-item-txt">
                                  <div class="item-txt-position">{{item.text}}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="icon-content-buttom">
                            <div v-for="(item, index)  in 4" :key="index" class="circle1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="lib-content">
                      <div v-for="(item,index) in picItem" :key="index" class="pic">
                        <img :src="item.url" alt />
                      </div>
                    </div>
                    <div class="setting" id="setting">
                      <i class="el-icon-setting" @click="iconArea = true" style="cursor:pointer"></i>
                    </div>
                    <div class="table-title">
                      <div class="usetitle">设备类型:</div>
                      <div class="do">操作</div>
                      <div class="do" id="set">设置</div>

                      <div class="search">
                        <div class="lab-item">
                          <i class="el-icon-search"></i>
                          <input type="text" id="search" placeholder="编号/名称" />
                        </div>
                      </div>

                      <div class="myuse">
                        <span class="el-dropdown-link" @click="showdetail" style="cursor:pointer">
                          <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <div class="myuse-box" v-show="detail">
                          <div class="myuse-content">
                            <div
                              class="myuse-lib"
                              v-for="(item,index) in choose"
                              :key="index"
                              v-show="first"
                            >
                              <div class="myuse-name">{{item.name}}</div>
                            </div>
                            <div
                              class="myuse-lib"
                              v-for="(item,index) in choose2"
                              :key="index"
                              v-show="second"
                            >
                              <div class="myuse-name">{{item.name}}</div>
                            </div>
                            <div
                              class="myuse-lib"
                              v-for="(item,index) in choose3"
                              :key="index"
                              v-show="third"
                            >
                              <div class="myuse-name">{{item.name}}</div>
                            </div>
                            <div
                              class="myuse-lib"
                              v-for="(item,index) in choose4"
                              :key="index"
                              v-show="four"
                            >
                              <div class="myuse-name">{{item.name}}</div>
                            </div>
                          </div>
                          <div class="myuse-bottom">
                            <div
                              v-for="(item, index)  in 4"
                              :key="index"
                              class="circle"
                              :class="{'active':isActive == index}"
                              @click="showlib(index)"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="lab">
                   
                    </div>-->
                    <div class="bottom-table">
                      <div class="table-lib2" v-for="(item,index) in tableData" :key="index">
                        {{item.date}}
                        <div class="gender">
                          <div class="gender-lib">
                            <div class="lib-txt">开</div>
                            <div class="lib-open"></div>
                          </div>
                          <div class="gender-lib">
                            <div class="lib-txt">关</div>
                            <div class="lib-close"></div>
                          </div>
                        </div>
                        <div class="tool">
                          <div class="tooldetail">
                            <i class="el-icon-s-fold"></i>
                          </div>
                          <div class="toolmenu">
                            <div class="toolmenu-box">
                              <div class="toolmenu-title">
                                <div class="up">设备详情</div>
                              </div>
                              <div class="toolmenu-name">
                                <div class="up">
                                  名
                                  <div style="display:inline-block;position:relative;left:30px">称</div>
                                  <div style="display:inline-block;position:relative;left:30px">：灭虫机</div>
                                </div>
                              </div>
                              <div class="toolmenu-number">
                                <div class="up">
                                  编
                                  <div style="display:inline-block;position:relative;left:30px">号</div>
                                  <div
                                    style="display:inline-block;position:relative;left:30px"
                                  >:1111111111</div>
                                </div>
                              </div>
                              <div class="toolmenu-state">
                                <div class="up">
                                  状
                                  <div style="display:inline-block;position:relative;left:30px">态</div>
                                  <div style="display:inline-block;position:relative;left:30px">：良好</div>
                                </div>
                              </div>
                              <div class="toolmenu-time">
                                <div class="up">安装时间：2019年3月18日</div>
                              </div>
                              <div class="toolmenu-order">
                                <div class="up">上报时间：2019年4月18日</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="state">{{item.state}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabBar from "../components/topbar";
export default {
  data() {
    return {
      flag: false,
      isActive: 0,
      detail: false,
      choose: [
        { name: "南京市" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
      ],

      choose2: [
        { name: "淮安市" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
      ],

      choose3: [
        { name: "北京市" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
      ],

      choose4: [
        { name: "重庆市" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
        { name: "灭虫剂" },
      ],
      iconArea: false,
      first: true,
      second: false,
      third: false,
      four: false,
      iscontrol: false,
      radio: "1",
      gender: 0,
      money: 1000,
      picItem: [
        { url: require("../../public/images/icon_guangai.png") },
        { url: require("../../public/images/icon_shifei.png") },
        { url: require("../../public/images/icon_wenduji.png") },
        { url: require("../../public/images/icon_chucao.png") },
      ],

      selectItem: [
        { url: require("../../public/images/icon_guangai.png") },
        { url: require("../../public/images/icon_shifei.png") },
        { url: require("../../public/images/icon_wenduji.png") },
        { url: require("../../public/images/icon_chucao.png") },
        { url: require("../../public/images/icon_guangai.png") },
        { url: require("../../public/images/icon_shifei.png") },
        { url: require("../../public/images/icon_wenduji.png") },
        { url: require("../../public/images/icon_chucao.png") },
      ],

      lineItem1: [
        { url: require("../../public/images/icon_guangai.png"), text: "设备" },
        { url: require("../../public/images/icon_shifei.png"), text: "设备" },
        { url: require("../../public/images/icon_wenduji.png"), text: "设备" },
        { url: require("../../public/images/icon_chucao.png"), text: "设备" },
        { url: require("../../public/images/icon_guangai.png"), text: "设备" },
        { url: require("../../public/images/icon_shifei.png"), text: "设备" },
        { url: require("../../public/images/icon_wenduji.png"), text: "设备" },
        { url: require("../../public/images/icon_chucao.png"), text: "设备" },
      ],

      lineItem2: [
        { url: require("../../public/images/icon_guangai.png"), text: "设备" },
        { url: require("../../public/images/icon_shifei.png"), text: "设备" },
        { url: require("../../public/images/icon_wenduji.png"), text: "设备" },
        { url: require("../../public/images/icon_chucao.png"), text: "设备" },
        { url: require("../../public/images/icon_guangai.png"), text: "设备" },
        { url: require("../../public/images/icon_shifei.png"), text: "设备" },
        { url: require("../../public/images/icon_wenduji.png"), text: "设备" },
        { url: require("../../public/images/icon_chucao.png"), text: "设备" },
      ],

      lineItem3: [
        { url: require("../../public/images/icon_guangai.png"), text: "设备" },
        { url: require("../../public/images/icon_shifei.png"), text: "设备" },
        { url: require("../../public/images/icon_wenduji.png"), text: "设备" },
        { url: require("../../public/images/icon_chucao.png"), text: "设备" },
        { url: require("../../public/images/icon_guangai.png"), text: "设备" },
        { url: require("../../public/images/icon_shifei.png"), text: "设备" },
        { url: require("../../public/images/icon_wenduji.png"), text: "设备" },
        { url: require("../../public/images/icon_chucao.png"), text: "设备" },
      ],

      tableData: [
        {
          date: "灭虫机1号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },

        {
          date: "灭虫机2号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },

        {
          date: "灭虫机3号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },

        {
          date: "灭虫机4号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },

        {
          date: "灭虫机5号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },

        {
          date: "灭虫机6号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },

        {
          date: "灭虫机7号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },

        {
          date: "灭虫机8号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },

        {
          date: "灭虫机9号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },

        {
          date: "灭虫机10号",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "设备未开始运行",
        },
      ],
    };
  },
  methods: {
    wehter(data) {
      console.log(data);
      this.flag = data;
    },
    showlib(index) {
      this.isActive = index;
      console.log(index);
      switch (index) {
        case 0:
          this.first = true;
          this.second = false;
          this.third = false;
          this.four = false;
          break;
        case 1:
          this.first = false;
          this.second = true;
          this.third = false;
          this.four = false;
          break;
        case 2:
          this.first = false;
          this.second = false;
          this.third = true;
          this.four = false;
          break;
        case 3:
          this.first = false;
          this.second = false;
          this.third = false;
          this.four = true;
          break;
      }
    },

    showdetail() {
      this.detail = !this.detail;
      console.log("123");
    },

    change() {
      this.iscontrol = !this.iscontrol;
      console.log(this.iscontrol);
      console.log("123");
    },
    open() {
      const { href } = this.$router.resolve({
        path: `/my`,
      });
      window.open(href, "_blank");
    },

    cellStyle() {
      //根据报警级别显示颜色
      return "background:#272A49;border:0;color:white;width:200px;";
      //   return 'border-color: #868686;'
    },

    tableHeaderCellStyle() {
      return "background:#272A49;border:0;color:white";
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  components: {
    tabBar,
  },
};
</script>

<style lang="less" scoped>
.content_right {
  margin-top: 37px;
  width: 1540px;
  margin-right: 28px;
}
.footer {
  margin-top: 52px;
  overflow: hidden;
}
.footer_left {
  height: 876px;
  width: 542px;
  background-image: url("../../public/images/zuo_bj.png");
  background-repeat: no-repeat;
  float: left;
  padding-top: 18px;
  .left_top {
    .Subhead {
      height: 50px;
      width: 297px;
      font-size: 24px;
      line-height: 50px;
      font-family: SourceHanSansCN-Light;
      color: #0efcff;
      background-image: url("../../public/images/biaotibeijing.png");
      margin-left: 19px;
      span {
        margin-left: 26px;
        font-weight: 600;
      }
    }
    .details {
      padding-bottom: 21px;
      border-bottom: 2px solid #262844;
      margin-left: 23px;
      margin-right: 23px;
      margin-top: 23px;
      img {
        vertical-align: top;
      }
      .detail_cotent {
        margin-left: 22px;
        display: inline-block;
        height: 215px;
        // background-color: blue;
        font-size: 14px;
        .det {
          color: #cccccc;
          margin-top: 10px;
          span {
            color: white;
            text-align: right;
            margin-left: 23px;
          }
        }
      }
    }
  }
  .left_bottom {
    margin-top: 28px;
    .crop {
      height: 50px;
      width: 297px;
      font-size: 24px;
      line-height: 50px;
      font-family: SourceHanSansCN-Light;
      color: #0efcff;
      background-image: url("../../public/images/biaotibeijing.png");
      margin-left: 19px;
      span {
        margin-left: 26px;
        font-weight: 600;
      }
    }
    .describe {
      //   display: inline-block;
      margin-top: 22px;
      padding-left: 50px;
      padding-right: 255px;
      color: #ffffff;
      font-size: 18px;
      div {
        display: flex;
        justify-content: space-between;
      }
      .grow {
        margin-top: 23px;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #cccccc;
      }
    }
    .exhibition {
      height: 75px;
      width: 486px;
      margin: 0 auto;
      margin-top: 41px;
      background-image: url("../../public/images/waibubeijing.png");
      display: flex;
      justify-content: space-around;
      .eq {
        display: inline-block;
        width: 69px;
        // background-color: red;
        // border-right: 1px solid #229FCF;
        padding-top: 20px;
        padding-left: 9px;
        text-align: center;
        p {
          color: #303662;
          font-size: 12px;
          font-weight: 600;
          margin-top: 6px;
          span {
            color: #ffffff;
          }
        }
        .add {
          border-right: 1px solid #229fcf;
        }
      }
    }
    .two {
      background-image: url("../../public/images/beijingneibu.png");
    }
    .three {
      background-image: url("../../public/images/beijingturang.png");
    }
  }
}
.footer_right {
  width: 968px;
  //   background-color: blue;
  float: right;
  iframe {
    background: linear-gradient(
      0deg,
      rgba(38, 45, 86, 1),
      rgba(62, 71, 129, 1)
    );
  }
}

* {
  padding: 0;
  margin: 0;
}
.box {
  width: 100%;
  background: url("../../public/images/bj.png");
  background-size: cover;
}
.nav {
  width: 318px;
  height: 1080px;
  background-color: red;
  position: absolute;
}


.title {
  width: 124px;
  height: 30px;
  /* background-color:grey; */
  font-size: 30px;
  top: 24px;
  left: 61px;
  color: #ffffff;
  position: absolute;
}

.title-txt {
  position: relative;
  top: -6px;
}

.area {
  width: 42px;
  height: 18px;
  font-size: 20px;
  position: absolute;
  left: 668px;
  top: 26px;
  color: #cccccc;
}

.deal {
  width: 42px;
  height: 18px;
  font-size: 20px;
  position: absolute;
  left: 774px;
  top: 26px;
  color: #cccccc;
}

.pad {
  position: absolute;
  left: 730px;
  top: 31px;
}

.mark {
  width: 42px;
  height: 4px;
  border-radius: 1.5px;
  background-color: #7965f1;
  position: absolute;
  left: 774px;
  top: 54px;
}

.content {
  width: 1540px;
  height: 876px;
  /* background-color:grey; */
  position: absolute;
  left: 352px;
  top: 173px;
  display: flex;
  justify-content: space-between;
}

.content-left {
  width: 542px;
  height: 100%;
  border-radius: 30px;
  position: relative;
}

.content-right {
  width: 967px;
  height: 100%;
  /* background-color:yellow; */
  border-radius: 20px;
}

.right-top {
  width: 100%;
  height: 300px;
  /* background-color:red; */
  background: url("../../public/images/youshang_bj.png");
  border-radius: 20px;
  position: relative;
}

.lab {
  width: 220px;
  height: 36px;
  background-color: yellow;
  /* position: absolute; */
  /* right:30px;
    top:2.7px; */
  background: url("../../public/images/jiankongsousuo.png");
  background-size: cover;
  /* display:flex;
    justify-content: space-between; */
}

.lab-item {
  width: 21px;
  height: 23px;
  /* background-color:pink; */
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 20px;
  color: #7965f1;
  position: relative;
}

.lab-item i {
  position: absolute;
  top: 3px;
}

#search {
  width: 78px;
  height: 18px;
  border: none;
  background-color: transparent;
  position: absolute;
  left: 26px;
  top: 2px;
}

.setting {
  width: 26px;
  height: 26px;
  /* background-color:red; */
  font-size: 22px;
  position: absolute;
  right: 24px;
  top: 32px;
}

.setting i {
  position: absolute;
  left: 1.5px;
  top: 3px;
  color: #7965f1;
}

#setting {
  position: absolute;
  top: 20px;
  right: 50px;
}

.bottom-content {
  width: 884px;
  height: 496px;
  background-color: yellow;
  position: absolute;
  top: 27px;
  left: 44px;
  background: url("../../public/images/shicaobeijing.png");
}

.fast-lib {
  width: 59px;
  height: 18px;
  /* background-color:pink; */
  position: absolute;
  left: 274px;
  top: 21px;
  color: #adadf6;
  font-size: 18px;
}

.fast-txt {
  position: absolute;
  top: -3.5px;
  left: 1.5px;
}

.lib-content {
  width: 190px;
  height: 45px;
  /* background-color:red; */
  position: absolute;
  display: flex;
  justify-content: space-between;
  right: 350px;
  top: 10px;
}

.pic {
  width: 45px;
  background-color: 45px;
  /* background-color:yellow; */
}

.pic img {
  width: 45px;
  height: 45px;
}

.bottom-table {
  width: 780px;
  height: 410px;
  /* background-color:yellow; */
  position: absolute;
  top: 69px;
  left: 65px;
}

.vedio {
  width: 100%;
  height: 164px;
  /* background-color:red; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: absolute;
  overflow: auto;
  top: 89px;
  overflow-y: scroll;
}

.vedio::-webkit-scrollbar {
  /* background-color:yellow; */
}

.vedio::-webkit-scrollbar-thumb {
  border-radius: 5px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  */
  background-color: #7965f1;
}
/* .vedio::-webkit-scrollbar {
        border-radius: 10px;
        background-color:blue;
    } */

.vedio::-webkit-scrollbar-track-piece {
  display: none;
}

.vedio::-webkit-scrollbar {
  width: 10px; /*滚动条的宽度*/
}

.vedio-item {
  width: 164px;
  height: 164px;
  background-color: green;
  /* position: relative; */
  margin-top: 1px;
}

.right-bottom {
  width: 966px;
  height: 537px;
  background-color: red;
  position: absolute;
  top: 339px;
  border-radius: 20px;
  background: url("../../public/images/youxia_bj.png");
}

#select {
  font-size: 30px;
}

.left-mark {
  width: 298px;
  height: 50px;
  /* background-color:red; */
  position: absolute;
  top: 18px;
  left: 11px;
  background: url("../../public/images/biaotibeijing.png");
  background-size: cover;
}

.mark-txt {
  position: absolute;
  top: 4px;
  left: 26px;
  font-size: 30px;
  color: #0efcff;
  /* letter-spacing: 5px; */
}

.field-pic-area {
  width: 708px;
  height: 361px;
  /* background: url("../img/tiandi.png");
    background-size:cover; */
  position: absolute;
  top: 84px;
  /* left:2px;  */
  background-color: red;
  /* display: flex;
    justify-content: space-between; */
}

.field-pic {
  width: 361px;
  height: 361px;
  background: url("../../public/images/tiandi.png");
  background-size: cover;
  position: absolute;
  left: 23px;
}

.field-txt {
  width: 302px;
  height: 314px;
  background-color: grey;
  position: absolute;
  left: 404px;
  top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.field-lib {
  width: 302px;
  height: 17px;
  /* background-color:blue; */
  /* font-size: 18px; */
  color: #cccccc;
  position: relative;
}

.lib-num {
  position: absolute;
  left: 60px;
  top: 0;
}

.filed-btn {
  width: 150px;
  height: 30px;
  /* background-color:yellow; */
  position: relative;
  background: url("../../public/images/erweimayuanjiao.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  /* align-items:center; */

  left: 25px;
}

.btn-txt {
  width: 116px;
  height: 16px;
  font-size: 16px;
  position: relative;
  top: 4px;
  color: #7965f1;
}

.underline {
  width: 654px;
  height: 2px;
  background-color: red;
  position: absolute;
  top: 455px;
  left: 35px;
}

.use-percent {
  width: 690px;
  height: 388px;
  /* background-color:yellow; */
  position: relative;
  top: 470px;
  left: 11px;
}

.user-mark1 {
  width: 298px;
  height: 50px;
  /* background-color:red; */
  position: absolute;
  top: 0;
  left: 0;
  background: url("../../public/images/biaotibeijing.png");
  background-size: cover;
}

#down {
  position: relative;
  left: 100px;
}

#sel {
  /* position: relative;
    left:30px; */
}

.myuse {
  width: 80px;
  height: 20px;
  /* background-color:pink; */
  position: absolute;
  /* color:white; */
  top: 12px;
  left: 138px;
  z-index: 299;
}

.myuse span {
  color: white;
  font-size: 18px;
  position: relative;
  top: -2px;
}

.myuse-box {
  width: 470px;
  height: 196px;
  background-color: red;
  position: absolute;
  left: -100px;
  /* display: none; */
  background: url("../../public/images/bj(1).png");
  background-size: cover;
}

.myuse-content {
  width: 454px;
  height: 151px;
  position: absolute;
  left: 5px;
  top: 14px;
  /* background-color:red; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.myuse-lib {
  width: 104px;
  height: 46px;
  /* background-color:#272A49; */
  background: url("../../public/images/neirongicon.png");
  background-size: cover;
  border-radius: 4px;
  position: relative;
}

.myuse-name {
  width: 53px;
  height: 17px;
  /* background-color:green; */
  position: absolute;
  top: 10px;
  left: 25px;
  font-size: 16px;
  padding-bottom: 4px;
  color: #adadf6;
}

.myuse-bottom {
  width: 103px;
  height: 10px;
  /* background-color:yellow; */
  position: absolute;
  bottom: 14px;
  left: 184px;
  display: flex;
  justify-content: space-around;
}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
}
/* .el-table th,
	.el-table tr,
	.el-table td {
		border: 0;
		background-color: red !important;
	} */

.el-table__row > td {
  border: none;
}
.el-table::before {
  height: 0px;
}

.radio-txt {
  position: relative;
  left: 0px;
  color: white;
}

.el-radio__input + .el-radio__label {
  color: #fd7624 !important;
}

.table-title {
  width: 100%;
  height: 50px;
  /* background-color:red; */
  position: absolute;
  top: 57px;
  left: 0;
  z-index: 199;
}

.usetitle {
  width: 80px;
  height: 18px;
  position: absolute;
  left: 58px;
  top: 9px;
  font-size: 18px;
  color: #adadf6;
}

.do {
  width: 40px;
  height: 18px;
  position: absolute;
  top: 9px;
  left: 339px;
  font-size: 18px;
  color: #adadf6;
}

#set {
  position: absolute;
  left: 622px;
}

.getdetail {
  width: 16px;
  height: 16px;
  background-color: red;
  position: relative;
  top: 1px;
  left: 30px;
  display: inline-block;
  background: url("../../public/images/icon_xiangqing.png");
  background-size: cover;
}

.el-radio {
  position: relative;
  left: 12px;
}
.kai {
  width: 10px;
  height: 10px;
  background-color: red;
  display: inline-block;
  position: relative;
  /* top:13px; */
  left: 10px;
  background: url("../../public/images/icon_kai.png");
  background-size: cover;
}

.closer {
  width: 30px;
  height: 30px;
  /* background-color:green; */
  position: relative;
  left: 90px;
  top: -3px;
}

.opener {
  position: relative;
  top: 18px;
}

.search {
  width: 140px;
  height: 22px;
  background-color: red;
  position: absolute;
  right: 29px;
  top: 10px;
  background: url("../../public/images/juxing.png");
  background-size: cover;
}

.table-lib {
  width: 100%;
  height: 16px;
  /* background-color:yellow; */
  position: relative;
  top: 0px;
  font-size: 16px;
  color: #ffffff;
  /* margin-top:10px; */
}

.table-lib2 {
  width: 100%;
  height: 16px;
  /* background-color:yellow; */
  position: relative;
  top: 24px;
  font-size: 16px;
  color: #ffffff;
  margin-top: 10px;
}

.gender {
  width: 120px;
  height: 16px;
  /* background-color:blue; */
  position: relative;
  display: flex;
  justify-content: space-between;
  left: 234px;
  color: #ffffff;
  top: -16px;
}

.gender-lib {
  width: 30px;
  height: 16px;
  /* background-color:red; */
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  /* position: relative; */
}

.lib-txt {
  /* display: block; */
  width: 15px;
  height: 14px;
  font-size: 15px;
}

.lib-open {
  width: 10px;
  height: 10px;
  background: url("../../public/images/icon_kai.png");
  background-size: cover;
  position: relative;
  /* left:; */
  top: 3px;
}

.lib-close {
  width: 10px;
  height: 10px;
  background: url("../../public/images/icon_guan.png");
  background-size: cover;
  position: relative;
  /* left:; */
  top: 3px;
}

.tool {
  width: 50px;
  height: 16px;
  /* background-color:red; */
  position: absolute;
  left: 550px;
  top: -0px;
  display: flex;
  justify-content: space-between;
}

.tooldetail {
  width: 16px;
  height: 16px;
  /* background-color:blue; */
  font-size: 15px;
}

.toolmenu {
  width: 16px;
  height: 16px;
  /* background-color:blue; */
  background: url("../../public/images/icon_xiangqing.png");
  position: relative;
  top: 1px;
  background-size: cover;
  font-size: 15px;
}

.toolmenu-box {
  width: 190px;
  height: 166px;
  background-color: orange;
  background: url("../../public/images/bj2.png");
  background-size: cover;

  position: absolute;
  top: 4px;
  left: 20px;
  z-index: 499;
  display: none;
}

.toolmenu-title {
  width: 64px;
  height: 16px;
  position: absolute;
  /* background-color:red; */
  top: 19px;
  left: 15px;
  font-size: 16px;
}

.toolmenu-name {
  width: 130px;
  height: 14px;
  position: absolute;
  /* background-color:red; */
  top: 46px;
  left: 21px;
  font-size: 14px;
}

.toolmenu-number {
  width: 148px;
  height: 13px;
  position: absolute;
  /* background-color:red; */
  top: 68px;
  left: 21px;
  font-size: 14px;
}

.toolmenu-state {
  width: 130px;
  height: 15px;
  position: absolute;
  /* background-color:red; */
  top: 88px;
  left: 21px;
  font-size: 14px;
}

.toolmenu-time {
  width: 170px;
  height: 14px;
  position: absolute;
  /* background-color:red; */
  top: 111px;
  left: 21px;
  font-size: 14px;
}

.toolmenu-order {
  width: 170px;
  height: 13px;
  position: absolute;
  /* background-color:red; */
  top: 132px;
  left: 21px;
  font-size: 14px;
}

.up {
  position: relative;
  top: -3px;
}

.toolmenu:hover > .toolmenu-box {
  display: block;
}

.state {
  width: 130px;
  height: 16px;
  /* background-color:blue; */
  position: absolute;
  left: 680px;
  top: 0;
  color: #cccccc;
}

.control {
  width: 404px;
  height: 436px;
  background-color: red;
  position: absolute;
  background: url("../../public/images/beijing1.png");
  background-size: cover;
  right: 40px;
  top: 70px;
  z-index: 299;
}
.control-title {
  width: 119px;
  height: 19px;
  /* background-color:green; */
  position: absolute;
  top: 12px;
  left: 22px;
  color: #ffffff;
  font-size: 18px;
}

.control-txt {
  position: absolute;
  top: -3px;
  left: 0;
}

.vedio-lib {
  width: 304px;
  height: 46px;
  /* background-color:yellow; */
  position: absolute;
  left: 44px;
  top: 50px;
  display: flex;
  justify-content: space-between;
}

.vedio-item1 {
  width: 46px;
  height: 46px;
  /* background-color:green; */
  position: relative;
  background: url("../../public/images/shipin.png");
  background-size: cover;
}

.item-pic {
  width: 30px;
  height: 36px;
  /* background-color:green; */
  position: absolute;
  left: 8px;
  top: 6px;
  background: url("../../public/images/icon_shipin(1).png");
  background-size: cover;
}

.vedio-state {
  width: 308px;
  height: 14px;
  /* background-color:green; */
  position: absolute;
  top: 104px;
  left: 44px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* z-index:399; */
}

.state-txt {
  width: 56px;
  height: 14px;
  /* background-color:grey; */
  font-size: 14px;
  color: #7965f1;
}

.vedio-txt {
  position: relative;
  top: -2px;
  left: 3px;
}

.vedio-underline {
  width: 331px;
  height: 2px;
  position: absolute;
  top: 135px;
  left: 30px;
  background-color: #394175;
}

.vedio-record {
  width: 331px;
  height: 270px;
  /* background-color:pink; */
  position: absolute;
  top: 146px;
  left: 30px;
}

.record-top {
  width: 100%;
  height: 22px;
  /* background-color: purple; */
  position: relative;
  font-size: 12px;
  color: #cccccc;
}

.vedio-top {
  width: 49px;
  height: 12px;
  position: absolute;
  left: 17px;
}

.vedio-deal {
  width: 24px;
  height: 13px;
  position: absolute;
  left: 126px;
}

.vedio-shu {
  width: 24px;
  height: 13px;
  position: absolute;
  left: 194px;
}

.vedio-search {
  width: 93px;
  height: 22px;
  background-color: yellow;
  position: absolute;
  right: 0;
  background: url("../../public/images/sousuokuangf.png");
  background-size: cover;
}

.search-tip {
  width: 14px;
  height: 14px;
  background-color: pink;
  position: absolute;
  background: url("../../public/images/icon_sousuo.png");
  background-size: cover;
  left: 6px;
  top: 5px;
}

.search-content {
  width: 53px;
  height: 14px;
  /* background-color:blue; */
  position: absolute;
  left: 24px;
  top: 4px;
}

.search-content input {
  width: 53px;
  height: 13px;
  background-color: transparent;
  outline: none;
}

.record-bottom {
  width: 100%;
  height: 238px;
  /* background-color:orange; */
  position: absolute;
  top: 32px;
  font-size: 12px;
  color: #cccccc;
  /* display: flex;
    justify-content: space-between;
    flex-wrap: wrap; */
}

.record-content {
  width: 100%;
  height: 202px;
  /* background-color:blue; */
  font: 14px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.lib-item {
  width: 100;
  height: 12px;
  /* background-color:black; */
  color: #cccccc;
}

.lib-select {
  width: 70px;
  height: 12px;
  /* background-color:red; */
  position: relative;
  display: flex;
  justify-content: space-between;
}

.lib-select-button {
  width: 10px;
  height: 12px;
  /* background-color:grey; */
}

.lib-select-name {
  width: 56px;
  height: 12px;
  /* background-color:orange; */
  font-size: 14px;
  /* position: absolute; */
  /* right:0; */
}

.select-name-position {
  position: relative;
  font-size: 12px;
  top: -3px;
}

#open {
  position: relative;
  top: 0.5px;
}

.lib-deal {
  width: 78px;
  height: 12px;
  /* background-color:red; */
  position: absolute;
  left: 98px;
  top: 0;
  display: flex;
  justify-content: space-between;
}

.son {
  font-size: 12px;
  position: relative;
  top: -3px;
}

.open-son {
  position: relative;
  top: 0.5px;
}

.lib-state {
  width: 12px;
  height: 12px;
  /* background-color:yellow; */
  position: absolute;
  left: 202px;
  top: 0;
  background: url("../../public/images/icon_xiangqing.png");
  background-size: cover;
}

.lib-result {
  width: 88px;
  height: 12px;
  position: absolute;
  right: 0;
  top: 0;
  /* background-color:yellow; */
  font-size: 12px;
}

/* .back{
    position:absolute;
    top: 0;
} */

.result-txt {
  position: relative;
  top: -2px;
}

.center {
  position: absolute;
  top: 3px;
}

.active {
  background-color: #ff3399;
}

.icon-area {
  width: 424px;
  height: 326px;
  background-color: red;
  position: absolute;
  left: 168px;
  top: 30px;
  z-index: 399;
  background: url("../../public/images/zhidingbeijing.png");
}

.icon-title {
  width: 79px;
  height: 16px;
  /* background-color:yellow; */
  position: absolute;
  top: 18px;
  left: 27px;
  font-size: 15px;
  padding-bottom: 4px;
  color: #eff6ff;
}

.icon-content {
  width: 388px;
  height: 256px;
  /* background-color:yellow; */
  position: absolute;
  left: 27px;
  top: 48px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.icon-content-use {
  width: 100%;
  height: 32px;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
}

.icon-use-item {
  width: 32px;
  height: 32px;
  /* background-color:grey; */
  border-radius: 50%;
  position: relative;
}

.icon-ready-item {
  width: 32px;
  height: 32px;
  /* background-color:grey; */
  border-radius: 50%;
  position: relative;
}

.icon-ready-item img {
  width: 38px;
  height: 40px;
  position: absolute;
  top: -3px;
  left: -3px;
}

.icon-use-item img {
  width: 38px;
  height: 40px;
  position: absolute;
  top: -3px;
  left: -3px;
}

.use-item-cancel {
  width: 12px;
  height: 12px;
  /* background-color:red; */
  position: absolute;
  left: 20px;
  bottom: 22px;
  background: url("../../public/images/icon_shanchu.png");
  background-size: cover;
  z-index: 199;
}

.use-item-add {
  width: 12px;
  height: 12px;
  /* background-color:red; */
  position: absolute;
  left: 26px;
  background: url("../../public/images/icon_tianjia.png");
  background-size: cover;
  /* bottom:22px; */
  z-index: 199;
}

.icon-content-ready {
  width: 100%;
  height: 185px;
  /* background-color:green; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ready-line {
  width: 100%;
  height: 56px;
  /* background-color:grey; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* position: relative; */
}

.line-item {
  width: 45px;
  height: 56px;
  /* background-color:indianred; */
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.line-item-content {
  width: 45px;
  height: 45px;
  /* background-color:orange; */
}

.line-item-txt {
  width: 24px;
  height: 11px;
  /* background-color:blue; */
  position: relative;
  left: 12px;
  font-size: 12px;
  /* padding-bottom:5px; */
}

.item-txt-position {
  position: relative;
  top: -3px;
}

.icon-content-buttom {
  width: 130px;
  height: 10px;
  /* background-color:red; */
  position: relative;
  left: 134px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  /* bottom:22px; */
}

.circle1 {
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
}

.control-close {
  width: 15px;
  height: 15px;
  /* background-color:red; */
  position: absolute;
  right: 12px;
  top: 12px;
  font-size: 15px;
  padding-bottom: 5px;
  padding-left: 3px;
}

#icon {
  position: absolute;
  top: 16px;
  right: 20px;
}
</style>