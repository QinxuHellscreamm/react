<script setup lang="ts">
import {
  ref,
  computed,
  reactive,
  onMounted,
  onRenderTriggered,
  watch,
  inject
} from "vue";
import TeleportTest from "./TeleportTest.vue";
const user = inject('user')
defineProps<{ msg: string }>();
/*
 * js
 * const emit = defineEmits(['change', 'update'])
 *
 * ts
 * const emit = defineEmits<{
 *   (event: 'change'): void
 *   (event: 'update', id: number): void
 * }>()
 * emit('change')
 * emit('update', 1)
 * */
interface emitObj {
  age: number;
  name: string;
}
const emit = defineEmits<{
  (event: "change"): void;
  (event: "update", obj: emitObj): void;
}>();
// const count = ref(0)
// const double = computed(()=>{
//   return count.value * 2
// })
// const plus = ()=>{
//   count.value++
// }
interface dataProps {
  count: number;
  double: number;
  plus: () => void;
}
const data: dataProps = reactive({
  count: 0,
  plus: () => {
    data.count++;
    emit("update", { name: "lisi", age: data.count });
  },
  double: computed(() => {
    return data.count * 2;
  }),
});
// onRenderTriggered((e) => {
//   console.log(e);
// });
onMounted(() => {
  console.log(data);
});
watch(data, (newVal) => {
  console.log(newVal);
});
const modalShow = ref(false)
const closeModal = ()=>{
  modalShow.value = false
}
</script>

<template>
  <h1 @click="modalShow = true">{{ msg }}</h1>
  <div>{{user && user.name}}</div>
  <div class="card">
    <!--    <button type="button" @click="plus">count is {{ count }}</button>-->
    <!--    <button type="button">double is {{ double }}</button>-->
    <button type="button" @click="data.plus">count is {{ data.count }}</button>
    <button type="button" @click="emit('change')">
      double is {{ data.double }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>
    , the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <TeleportTest @closeModal="closeModal" v-if="modalShow"/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
