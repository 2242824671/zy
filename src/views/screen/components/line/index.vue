<template>
  <div class="box5">
    <div class="title">
      <p>未来七天游客数量趋势图</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts" ref="line"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
//获取图形图标的节点
let line = ref()
onMounted(() => {
  let mychart = echarts.init(line.value)
  //设置配置项
  //标题组件
  const Data = [
    '01',
    '02',
    '03',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
  ]
  const sjlData = [
    23, 24, 23.6, 27, 36, 25, 23, 24, 23.6, 27, 36, 25, 23.6, 27, 36, 25,
  ]
  const bjlData = [0, 0, 0, 0, 0, 0, 11, 12, 14, 16, 0, 0, 0, 0, 0, 0, 0]
  const balData = [
    80, 70, 80, 70, 80, 70, 80, 50, 60, 40, 80, 50, 70, 60, 75, 73,
  ]
  const bjl2Data = [
    70, 60, 70, 60, 70, 90, 70, 45, 26, 48, 45, 74, 26, 45, 23, 23, 23, 23,
  ]
  var option = {
    backgroundColor: '#000',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(13,5,30,.6)',
      borderWidth: 1,
      borderColor: '#4ddd8f',
      padding: 5,
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      itemWidth: 10,
      itemHeight: 10,
      top: 20,
      right: 30,
      icon: 'rect',
      textStyle: {
        color: '#c7d3e5',
      },
    },
    grid: {
      top: '25%',
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: Data,
        axisPointer: {
          type: 'shadow',
        },
        axisTick: {
          show: true,
          length: 4,
          lineStyle: {
            color: 'rgba(199,211,229,0.5)',
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(199,211,229,0.5)',
          },
        },
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    yAxis: [
      {
        name: '人数',
        type: 'value',
        nameTextStyle: {
          color: '#fff',
        },
        axisLabel: {
          color: '#fff',
        },
        axisTick: {
          show: true,
          length: 4,
          lineStyle: {
            color: 'rgba(64,136,254,1)',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(199,211,229,0.3)',
            width: 1,
            type: 'dashed',
          },
        },
      },
      {
        name: '2023',
        type: 'value',
        scale: true,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(199,211,229,0.3)',
          },
        },
        axisLabel: {
          formatter: '{value}%', //右侧以百分比进行展示
          show: true,
          textStyle: {
            color: '#fff',
          },
        },
        nameTextStyle: {
          color: '#fff',
        },
        axisTick: {
          show: true,
          length: 4,
          lineStyle: {
            color: 'rgba(64,136,254,1)',
          },
        },
      },
      {
        name: '2024',
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(199,211,229,0.3)',
          },
        },
        offset: 80,
        // max: 100,
        // min: 0,
        axisLabel: {
          // formatter: '{value}%',  //右侧以百分比进行展示
          show: true,
          textStyle: {
            color: '#fff',
          },
        },
        nameTextStyle: {
          color: '#fff',
        },
        axisTick: {
          show: true,
          length: 4,
          lineStyle: {
            color: 'rgba(64,136,254,1)',
          },
        },
      },
      {
        name: '-',
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(199,211,229,0.3)',
          },
        },
        offset: 40,
        // max: 100,
        // min: 0,
        axisLabel: {
          // formatter: '{value}%',  //右侧以百分比进行展示
          show: true,
          textStyle: {
            color: '#fff',
          },
        },
        nameTextStyle: {
          color: '#fff',
        },
        axisTick: {
          show: true,
          length: 4,
          lineStyle: {
            color: 'rgba(64,136,254,1)',
          },
        },
      },
    ],
    series: [
      {
        name: '未成年',
        type: 'line',
        barWidth: 14,
        data: sjlData,
        itemStyle: {
          color: '#03CCFC',
        },
      },
      {
        name: '成年人',
        type: 'bar',
        barWidth: 14,
        yAxisIndex: 1,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(245, 213, 39, 1)',
            },
            {
              offset: 1,
              color: 'rgba(245, 213, 39, 0)',
            },
          ]),
        },
        data: bjlData,
      },
      {
        name: '中年人',
        type: 'line',
        yAxisIndex: 2,
        symbol: 'none',
        data: balData,
        itemStyle: {
          color: '#E7970D',
        },
      },
      {
        name: '老年人',
        type: 'line',
        yAxisIndex: 3,
        symbol: 'none',
        data: bjl2Data,
        itemStyle: {
          color: '#885DFF',
        },
      },
    ],
  }
  mychart.setOption(option)
})
</script>

<style scoped lang="scss">
.box5 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 0px 20px;

  .title {
    margin-left: 10px;

    p {
      color: white;
      font-size: 20px;
    }
  }

  .charts {
    height: calc(100% - 40px);
  }
}
</style>
