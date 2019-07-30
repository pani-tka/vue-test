<template>
  <div>
    <input v-model="newTodoName"/>
    <button @click="$emit('addTodo', newTodoName)">
      +
    </button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('TodoHeader', {
  props: ['newTodoName'],
  data: function() {
    return {
      newTodoName: '',
    }; 
  }
});
</script>