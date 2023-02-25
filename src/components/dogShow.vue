<script lang="ts" setup>
import axios from "axios";
import { ref} from "vue";



const rawData = await axios.get('https://dog.ceo/api/breeds/image/')

console.log(rawData);
</script>

<template>
<!--  <div>{{rawData.data.message}}</div>-->
  <img :src="rawData && rawData.data.message" alt="" v-if="rawData.data">

</template>

<style scoped>

</style>