<template>
  <div class="box">
    <img src="../../assets/images/error_images/404.png" alt="" />
    <button @click="goHome">点我跳回首页</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
let $router = useRouter()
const goHome = () => {
  $router.push('/home')
}
</script>

<style scoped lang="scss">
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
  img {
    width: 800px;
    height: 400px;
  }
  button {
    width: 200px;
    height: 30px;
    border-radius: 10px;
    background-color: black;
    color: aliceblue;
  }
}
</style>
