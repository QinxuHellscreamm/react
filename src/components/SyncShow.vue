<script setup lang="ts">
import { ref } from "vue";

let res = ref(await new Promise((resolve) => {
  setTimeout(() => {
    return resolve({
      result: "加载完成",
    });
  }, 2000)
}))
setTimeout(()=>{
  res.value.result = '1s'
},1000)
console.log(res)
</script>

<template>
  <h1>{{ res.result }}</h1>
</template>

<style scoped></style>
