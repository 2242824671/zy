<template>
  <div class="box6">
    <div class="title">
      <p>热门景区排行</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <!-- 图形图标的容器 -->
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
//获取DOM节点
let charts = ref()
var xData = (function () {
  var data = []
  for (var i = 1; i < 13; i++) {
    data.push(i + '月份')
  }
  return data
})()

//组件挂载完毕
onMounted(() => {
  //一个容器可以同时展示多种类型的图形图标
  let mychart = echarts.init(charts.value)
  //设置配置项
  let option = {
    backgroundColor: '#344b58',
    title: {
      text: '本年旅游男女人数统计',
      subtext: 'BY Wang Dingding',
      x: '4%',

      textStyle: {
        color: '#fff',
        fontSize: '22',
      },
      subtextStyle: {
        color: '#90979c',
        fontSize: '16',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        textStyle: {
          color: '#fff',
        },
      },
    },
    grid: {
      borderWidth: 0,
      top: 110,
      bottom: 95,
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      x: '4%',
      top: '8%',
      textStyle: {
        color: '#90979c',
      },
      data: ['女', '男', '平均'],
    },

    calculable: true,
    xAxis: [
      {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#90979c',
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
        data: xData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#90979c',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
        splitArea: {
          show: false,
        },
      },
    ],
    dataZoom: [
      {
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 30,
        start: 10,
        end: 80,
        handleIcon:
          'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
          color: '#d3dee5',
        },
        textStyle: {
          color: '#fff',
        },
        borderColor: '#90979c',
      },
      {
        type: 'inside',
        show: true,
        height: 15,
        start: 1,
        end: 35,
      },
    ],
    series: [
      {
        name: '女',
        type: 'bar',
        stack: '总量',
        barMaxWidth: 35,
        barGap: '10%',
        itemStyle: {
          normal: {
            color: 'rgba(255,144,128,1)',
            label: {
              show: true,
              textStyle: {
                color: '#fff',
              },
              position: 'inside',
              formatter: function (p) {
                return p.value > 0 ? p.value : ''
              },
            },
          },
        },
        data: [
          709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078,
        ],
      },

      {
        name: '男',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            color: 'rgba(0,191,183,1)',
            barBorderRadius: 0,
            label: {
              show: true,
              position: 'inside',
              formatter: function (p) {
                return p.value > 0 ? p.value : ''
              },
            },
          },
        },
        data: [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220],
      },
      {
        name: '总数',
        type: 'line',
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: 'rgba(252,230,48,1)',
            barBorderRadius: 0,
            label: {
              show: true,
              position: 'top',
              formatter: function (p) {
                return p.value > 0 ? p.value : ''
              },
            },
          },
        },
        data: [
          1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675, 6209, 4323, 2865,
          4298,
        ],
      },
    ],
  }
  mychart.setOption(option)
})
</script>

<style scoped lang="scss">
.box6 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0px;

  .title {
    margin-left: 5px;

    p {
      color: white;
      font-size: 20px;
    }
  }

  .charts {
    height: calc(100% - 30px);
  }
}
</style>
