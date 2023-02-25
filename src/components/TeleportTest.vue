<script setup lang="ts">
const emit = defineEmits<{
  (event: 'closeModal'):void
}>();
</script>

<template >
  <teleport to="#app-modal">
    <div class="modal">
      <div></div>
      <button class="btn" @click="emit('closeModal')">关闭</button>
    </div>
  </teleport>
</template>



<style scoped>
  .modal{
    width: 200px;
    height: 200px;
    border:1px solid #000;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;
  }
  .btn{
    margin-top: 50px;
  }
</style>