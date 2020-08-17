<template>
   <div class="box">
      <div class="lib">
           <div id="chart1" :style="{width: '480px', height: '350px'}"></div>
      </div>
      <div class="lib">
        <div id="myChart" :style="{width: '480px', height: '350px'}"></div>
         <div class="state"><div class="state-txt">全国前三占比</div></div>
           <!-- <div style="position:absolute;top:0">河北</div> -->
      </div>
      <div class="lib">
          <div id="chart3" :style="{width: '480px', height: '350px'}"></div>
        
      </div>
   </div>
</template>

<script  defer="true">
// import helloworld from '../components/HelloWorld'
  export default {
    data() {
      return {
        tel:''
      };
    },

    Component:{
    //  helloworld
    },

    created(){
     this.$nextTick(function (){
	
   }) 
   
    },

     mounted(){
     
  
       
        this.drawLine();
        //  this.useprent();
        this.log();

        this.dispare();
    
   
  },

    methods: {

         dispare(){
               var myChart = this.$echarts.init(document.getElementById('chart3'));
			var option = {
        title:{
          text:'年度对比',
          left:30,
          top:10
        },
				tooltip: {
          top:10,
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				legend: {
          data: [ '高比例', '低比例'],
          top:15,
          right:35
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [
          // {
          //    axisLabel : { formatter: function (value){return Math.abs(value)}}//显示的数值都取绝对值
          // },
          {
          type: 'value',
          splitLine:{
              show:false
            },
          
				}],
				yAxis: [{
          type: 'category',
          splitLine:{
              show:false
            },
         
					data: ['兜售范围', '退货投诉', '订单总数', '使用数据']
				}],
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

						name: '高比例',
						type: 'bar',
            stack: '总量',
            barWidth:15,
            splitLine:{
              show:false
            },
            itemStyle: {
						normal: {
              barBorderRadius:[0,7.5,7.5,0],
              position: 'right',
							color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 1, [{
								offset: 0,
								color: "#EE3251" // 0% 处的颜色
              }, 
              {
								offset: 0.6,
								color: "#68A7F6" // 60% 处的颜色
              },
              {
								offset: 1,
								color: "#68A7F6" // 100% 处的颜色
							}], false)
						}
					},
						label: {
							normal: {
                show: false,
                
							}
            },
            
             axisLabel : { formatter: function (value){return Math.abs(value)}},//显示的数值都取绝对值
          
						data: [220, 302, 341, 374, 390, 450, 420]
					},
					{
						name: '低比例',
						type: 'bar',
            stack: '总量',
            barWidth:15,
            splitLine:{
              show:false
            },
            itemStyle: {
						normal: {
              // show:false,
               barBorderRadius:[7.5,0,0,7.5],
              position: 'left',
							color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 1, [{
								offset: 0,
								color: "#68A7F6" // 0% 处的颜色
							}, {
								offset: 0.2,
								color: "#68A7F6" // 60% 处的颜色
							}, {
								offset: 1,
								color: "#CCFF33" // 100% 处的颜色
							}], false)
            }
            },
						label: {
							normal: {
								show:false,//设置是否显示数据
								position: 'left'
							}
            },
            
						data: [-150, -132, -120, -143]
					}
				]
			};

			myChart.setOption(option);
         },

        log(){
          // var box1 = document.getElementById("")
           let myChart = this.$echarts.init(document.getElementById('chart1'))
        console.log(myChart)
        // 绘制图表
        myChart.setOption({
            title:{
            text:'年度使用率',
            left:30,
            top:10
        },
        tooltip:{},
        
      
        xAxis:{
            data:[2,4,6,8,10,12,14,16,18,20],
            name:'(小时)'
        },
        yAxis:{
          splitLine:{
              show:false
            },
            name:'(亩)'
            

        },
        legend: {
        // orient: 'vertical',
        right: 10,
        top:0,
        data: ['访问量','田地面积']
    },
        series:[{
            // calculable:false,
            name:['访问量','田地面积'],
          
            type:'line',
            data:[2,6,3,8,11,16,14,10,9,13],
            splitLine:{
              show:false
            },
            itemStyle : {
								normal : {
                  color:'#5865B4',
									lineStyle:{
										color:'#5775DF'
									}
								}
							}
        }]
        });
         console.log("ok")
        },

       

        drawLine(){

        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        console.log(myChart)
        // 绘制图表
        myChart.setOption({
             title:{
               text:'年度订单',
               left:30,
               top:10
             },
             tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 30,
        bottom:150,
        data: ['安徽', '江苏', '河北'],

    },
    series: [
        {
            name:'年度订单',
            type: 'pie',
            radius: ['62%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show:true,
                position: 'left',
                //  formatter: '{d}%\n{b}' 
                 formatter: '{d}%',// 显示百分比，
                   normal: {
              // textStyle: {
              //   color: ['red','green']  // 改变标示文字的颜色
              // }
     }

            },
            emphasis: {
               
            },
            labelLine: {
                show: true
            },
            data: [
              {
                        value: 600, name: '安徽',

                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [
                                    {offset: 0, color: '#87A3FF'},
                                    {offset: 1, color: '#6045D5'}
                                ],
                               
                                globalCoord: true // 缺省为 false
                            },
                            
                        },


                    },
                    {
                        value: 80, name: '江苏', itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [
                                    {offset: 0, color: '#6E90FD'},
                                    {offset: 1, color: '#5372DA'}
                                ],
                                globalCoord: true // 缺省为 false
                            }
                        }
                    },
                    {
                        value: 224, name: '河北', itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [
                                    {offset: 0, color: '#FF9494'},
                                    {offset: 1, color: '#FF696A'}
                                ],
                                globalCoord: true // 缺省为 false
                            }
                        }
                    }


            ]
        }
    ]
        });
    }
    }
  }
</script>

<style  scoped>

   .box
   {
     width: 1540px;
     height: 356px;
     background-color:lightgray;
     position:absolute;
     left:352px;
     bottom:30px;
     display:flex;
     justify-content: space-between;
   }

   .lib
   {
     width: 480px;
     height:100%;
     /* background-color:yellow; */
     border-radius:30px;
     background: url("../../public/images/dibu_right_bj.png");
     /* background-color: red; */
     position: relative;
   }

   .state
   {
     width:110px;
     height:20px;
     line-height:20px;
     position: absolute;
     top:180px;
     left:187px;
   }

   .state-txt
   {
     position: absolute;
     left:20px;
    
   }

   #chart1
   {
     width:484px;
     height:360px;
     /* background-color:yellow; */
   }

</style>