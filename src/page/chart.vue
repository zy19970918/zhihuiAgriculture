<template>
  <div class="box">
    <div class="lib">
      <div id="chart1" :style="{width: '650px', height: '360px'}"></div>
    </div>
    <div class="lib1">
      <div id="myChart" :style="{width: '860px', height: '360px'}"></div>
    </div>
  </div>
</template>

<script  defer="true">
import Axios from "axios";
// import helloworld from '../components/HelloWorld'
export default {
  data() {
    return {
      tel: "",
    };
  },

  Component: {
    //  helloworld
  },

  created() {
    this.$nextTick(function () {});
  },

  mounted() {
    this.drawLine();
    this.log();
    this.getData();

    // this.dispare();
  },

  methods: {
    getData() {
      console.log("123");

      // var data = new Date();

      // console.log(begin)

      Axios.post("http://192.168.101.13:8803/home/cropcountcustomer", {}).then(
        function (data) {
          console.log(data);
        }
      );
    },

    dispare() {
      var myChart = this.$echarts.init(document.getElementById("chart3"));
      var option = {
        title: {
          text: "年度对比",
          left: 42,
          top: 32,
          textStyle: {
            color: "#8995CB",
            fontSize: 18,
          },
        },
        tooltip: {
          top: 10,
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["高比例", "低比例"],
          top: 39,
          right: 35,
          textStyle: {
            color: "#8995CB",
            fontSize: 12,
          },
        },
        grid: {
          x: 68,
          y: 130,
          left: 180,
          // right: 0,
          bottom: 0,
          // containLabel: true
        },
        xAxis: [
          // {
          //    axisLabel : { formatter: function (value){return Math.abs(value)}}//显示的数值都取绝对值
          // },
          {
            type: "value",
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            splitLine: {
              show: false,
            },

            axisLabel: {
              show: true,
              textStyle: {
                color: "#8995CB", //更改坐标轴文字颜色
                fontSize: 10, //更改坐标轴文字大小
              },
            },

            data: ["兜售范围", "退货投诉", "订单总数", "使用数据"],
          },
        ],
        series: [
          // {
          // 	name: '利润',
          // 	type: 'bar',
          // 	label: {
          // 		normal: {
          // 			show: true,
          // 			position: 'inside'
          // 		}
          // 	},
          // 	data: [200, 170, 240, 244, 200, 220, 210]
          // },

          {
            name: "高比例",
            type: "bar",
            stack: "总量",
            // barGap:40,
            barWidth: 12,
            //  barCategoryGap:40,
            splitLine: {
              show: false,
            },
            itemStyle: {
              normal: {
                barBorderRadius: [0, 7.5, 7.5, 0],
                position: "right",
                color: new this.$echarts.graphic.LinearGradient(
                  1,
                  1,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#EE3251", // 0% 处的颜色
                    },
                    {
                      offset: 0.2,
                      color: "#EE3251", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#68A7F6", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            label: {
              normal: {
                show: false,
              },
            },

            axisLabel: {
              formatter: function (value) {
                return Math.abs(value);
              },
            }, //显示的数值都取绝对值

            data: [2800, 2400, 3600, 2100],
          },
          {
            name: "低比例",
            type: "bar",
            stack: "总量",
            barWidth: 12,
            splitLine: {
              show: false,
            },
            itemStyle: {
              normal: {
                // show:false,
                barBorderRadius: [7.5, 0, 0, 7.5],
                position: "left",
                color: new this.$echarts.graphic.LinearGradient(
                  1,
                  1,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#68A7F6", // 0% 处的颜色
                    },
                    {
                      offset: 0.2,
                      color: "#68A7F6", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#CCFF33", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            label: {
              normal: {
                show: false, //设置是否显示数据
                position: "left",
              },
            },

            data: [-2900, -2500, -3400, -2000],
          },
        ],
      };

      myChart.setOption(option);
    },

    log() {
      // var box1 = document.getElementById("")
      let myChart = this.$echarts.init(document.getElementById("chart1"));
      console.log(myChart);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "2012-2019年我国夏粮产量统计图",
          top: 32,
          left: "center",
          textStyle: {
            color: "#8995CB",
            fontSize: 18,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销"],
          top: 10,
        },
        grid: {
          left: 46,
          top: 76,
          // right: '4%',
          // bottom: '3%',
          bottom: 36,
          containLabel: true,
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }k
        // },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: [
            "2012年",
            "2013年",
            "2014年",
            "2015年",
            "2016年",
            "2017年",
            "2018年",
            "2019年",
          ],
          splitLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#8995CB",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#8995CB", //坐标轴的颜色
            },
          },
        },
        yAxis: {
          name: "(万吨)",

          type: "value",
          min: 12800,
          max: 14400,
          interval: 200,
          boundaryGap: false,
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#8995CB", //坐标轴的颜色
            },
          },
          axisLabel: {
            textStyle: {
              color: "#8995CB",
            },
          },
        },
        series: [
          {
            name: "夏粮产量",
            // padding:[,0,0,0],
            type: "line",
            stack: "总量",
            data: [12940, 13112, 13588, 14075, 14050, 14174, 13872, 14175],
            itemStyle: {
              normal: {
                color: "#5865B4",
                lineStyle: {
                  color: "#5775DF",
                },
              },
            },
          },
        ],
      });
      console.log("ok");
    },

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      myChart.setOption({
        title: {
          text: "年度种植植物明星排名对比",
          top: 32,
          left: "center",
          textStyle: {
            color: "#8995CB",
            fontSize: 18,
          },
        },

        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: [
            "小麦",
            "稻谷",
            "玉米",
            "大豆",
            "胡萝卜",
            "茄子",
            "黄瓜",
            "西红柿",
            "青菜",
            "白菜",
          ],
          axisLine: {
            lineStyle: {
              color: "#8995CB", //坐标轴的颜色
            },
          },
          axisLabel: {
            textStyle: {
              color: "#8995CB",
            },
          },
        },

        yAxis: {
          name: "吨",
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#8995CB", //坐标轴的颜色
            },
          },
          axisLabel: {
            textStyle: {
              color: "#8995CB",
            },
          },
        },

        grid: {
          left: 88,
          top: 88,
          // bottom:36
          // right: '4%',
          // bottom: '3%',
          // containLabel: true
        },
        series: [
          {
            name: "数量对比",
            data: [650, 620, 550, 540, 460, 430, 400, 350, 290, 220],
            // barGap:1,
            type: "bar",
            barWidth: 15,
            barGap: 0,
            groupPadding: 0.5,
            itemStyle: {
              normal: {
                //每根柱子颜色设置
                color: function (params) {
                  let colorList = [
                    "#B0606D",
                    "#E3CF86",
                    "#FDE35B",
                    "#52BEA6",
                    "#95BE3E",
                    "#6DABDE",
                    "#A14F75",
                    "#FFD9D8",
                    "#DDE5BC",
                    "#C8E3C0",
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style  scoped>
.box {
  width: 1540px;
  height: 360px;
  /* background-color: lightgray; */
  /* position: absolute; */
  left: 352px;
  bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.lib {
  width: 650px;
  height: 100%;
  /* background-color:yellow; */
  border-radius: 30px;
  background: linear-gradient(0deg, rgba(31, 39, 76, 1), rgba(48, 55, 103, 1));
  position: relative;
  background-size: cover;
}

.lib1 {
  width: 860px;
  height: 100%;
  /* background-color:yellow; */
  border-radius: 30px;
  background: linear-gradient(0deg, rgba(31, 39, 76, 1), rgba(48, 55, 103, 1));
  position: relative;
  background-size: cover;
}

.state {
  width: 140px;
  height: 20px;
  line-height: 20px;
  position: absolute;
  top: 180px;
  left: 187px;
}

.state-txt {
  position: absolute;
  left: -2.4rem;
  font-size: 18px;
  color: #8995cb;
}

#chart1 {
  width: 484px;
  height: 360px;
  /* background-color:yellow; */
}
</style>