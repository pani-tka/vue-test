<template>
  <input 
  v-model="newTodoName"
  />
</template>

<script>
import Vue from 'vue';

export default Vue.component('TodoHeader', {
  props: ['newTodoName'],
});
</script>