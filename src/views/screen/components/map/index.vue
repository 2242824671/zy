<template>
  <div class="box4" ref="map">我是地图组件</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
//引入中国地图的JSON数据
import chinaJSON from './china.json'
//获取DOM元素
let map = ref()
//注册中国地图
echarts.registerMap('china', chinaJSON as any)
onMounted(() => {
  let mychart = echarts.init(map.value)
  let outname = [
    '南海诸岛',
    '北京',
    '天津',
    '上海',
    '重庆',
    '河北',
    '河南',
    '云南',
    '辽宁',
    '黑龙江',
    '湖南',
    '安徽',
    '山东',
    '新疆',
    '江苏',
    '浙江',
    '江西',
    '湖北',
    '广西',
    '甘肃',
    '山西',
    '内蒙古',
    '陕西',
    '吉林',
    '福建',
    '贵州',
    '广东',
    '青海',
    '西藏',
    '四川',
    '宁夏',
    '海南',
    '台湾',
    '香港',
    '澳门',
  ]
  let outvalue = [
    524, 113, 140, 75, 13, 83, 11, 19, 15, 69, 260, 39, 94, 31, 104, 36, 1052,
    33, 347, 9, 157, 22, 4, 18, 5, 6398, 41, 210, 484, 404, 22, 43, 25, 225,
    255,
  ]
  let outdata = []
  let scatter = [
    [110.81, 33.4, 99],
    [116.55, 40.01, 77],
    [113.11, 28.4, 34],
    [106.44, 29.5, 112],
    [112.85, 38.95, 6],
    [82.78, 43.27, 50],
  ]
  let lineToLf = [
    {
      name: '11',
      coords: [
        [110.81, 33.4],
        [116.55, 40.01],
      ],
      lineStyle: { color: '#c1bb1f' },
    },
    {
      name: '11',
      coords: [
        [110.81, 33.4],
        [116.55, 40.01],
      ],
      lineStyle: { color: '#c1bb1f' },
    },
    {
      name: '22',
      coords: [
        [113.11, 28.4],
        [116.55, 40.01],
      ],
      lineStyle: { color: '#f9b207' },
    },
    {
      name: '33',
      coords: [
        [106.44, 29.5],
        [116.55, 40.01],
      ],
      lineStyle: { color: '#3eef1d' },
    },
    {
      name: '44',
      coords: [
        [112.85, 38.95],
        [116.55, 40.01],
      ],
      lineStyle: { color: '#3eef1d' },
    },
    {
      name: '55',
      coords: [
        [82.78, 43.27],
        [116.55, 40.01],
      ],
      lineStyle: { color: '#3eef1d' },
    },
    {
      name: '66',
      coords: [
        [89.78, 43.27],
        [116.55, 50.01],
      ],
      lineStyle: { color: '#3eef1d' },
    },
  ]
  let planePath =
    'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
  for (let i = 0; i < outvalue.length; i++) {
    outdata.push({
      value: outvalue[i],
      name: outname[i],
    })
  }
  //设置配置项
  //地图组件
  let option = {
    tooltip: {
      show: true,
      formatter: function (params) {
        return (
          '&nbsp;&nbsp;' +
          params.name +
          '&nbsp;&nbsp;&nbsp;' +
          params.value +
          '人&nbsp;&nbsp;'
        )
      },
    },

    visualMap: {
      type: 'continuous',
      text: ['', ''],
      showLabel: true,
      left: '50',
      min: 0,
      max: 50,
      seriesIndex: [0],
      inRange: {
        color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096'],
      },

      outOfRange: {
        color: ['#999999'],
      },
      splitNumber: 0,
    },
    geo: {
      map: 'china',
      show: true,
      roam: false,
      label: {
        emphasis: {
          show: false,
        },
      },
      // itemStyle: {
      //   normal: {
      //     borderColor: 'rgba(0,63,140,0.2)',
      //     shadowColor: 'rgba(0,63,140,0.2)',
      //     shadowOffsetY: 20,
      //     shadowBlur: 30
      //   }
      // }
    },
    series: [
      {
        type: 'map',
        map: 'china',
        aspectScale: 0.75,
        // zoom:1.1,
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            areaColor: '#B2CAE0',
            borderColor: '#fff',
            borderWidth: 1,
          },
          emphasis: {
            areaColor: '#FFAE00',
          },
        },
        emphasis: {
          itemStyle: {
            areaColor: null,
            borderWidth: 3,
            shadowColor: 'rgba(0,0,0,.2)',
            shadowOffsetX: 5,
            shadowOffsetY: 5,
          },
        },
        animation: false,
        data: outdata,
      },
      {
        name: '散点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render', // 加载完毕显示特效
        top: 10,
        bottom: 10,
        zlevel: 2,

        rippleEffect: {
          number: 5, // 波纹数量
          period: 4, // 动画周期 数值越大，波动越慢
          scale: 3.5, // 动画中波纹的最大缩放比例
          brushType: 'stroke',
        },
        data: scatter.map((it) => {
          return {
            name: 'cccccccc',
            value: it,
            itemStyle: {
              normal: {
                color: '#f9b207', // 如果想颜色不一样 就换成这个，并且 在上面color数组中修改，添加想要的颜色，--colorF()
                areaColor: '#f9b207',
              },
            },
          }
        }),
        symbolSize: function (val) {
          return val[2] / 10
        },
      },
      // 地图线的动画效果
      {
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        // 自定义图标
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          normal: {
            color: 'a6c84c',
            width: 1,
            opacity: 0.6,
            curveness: 0.2,
          },
        },
        // 默认图标
        // effect: {
        // show: true,
        // period: 4, // 箭头指向速度，值越小速度越快
        // trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
        // symbol: 'arrow', // 箭头图标
        // symbolSize: 3, // 图标大小
        // },
        // lineStyle: {
        //   normal: {
        //     color: '#f9b207',
        //     width: 0.1, // 尾迹线条宽度
        //     opacity: 0.5, // 尾迹线条透明度
        //     curveness: 0.3 // 尾迹线条曲直度
        //   }
        // },
        data: lineToLf,

        z: 3,
      },
    ],
  }
  mychart.setOption(option)
})
</script>

<style scoped></style>
