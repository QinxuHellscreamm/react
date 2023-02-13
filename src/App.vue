<script setup lang="ts">
import { watch, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import getMousePosition from "./hooks/mousePosition";
import axiosGet from "./hooks/urlLoader";
const xy = getMousePosition();
interface emitObj {
  age: number;
  name: string;
}
const alertNum = (obj: emitObj) => {
  alert(obj.age + obj.name);
};
// https://dog.ceo/api/breeds/image/random
watch(xy, (newXY) => {
  console.log(newXY);
});
const dogs: [] = ref([]);
console.log(dogs.value);
const addDog = () => {
  const res = axiosGet("https://dog.ceo/api/breeds/image/random");
  console.log(res);
  dogs.value.push(res);
  console.log(dogs.value);
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank" v-for="item in dogs">
      <span v-if="item.loading">loading</span>
      <img v-else :src="item.result.message" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" @update="alertNum" @change="addDog" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
