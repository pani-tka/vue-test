<template>
  <div>
    <input v-model="newTodo" placeholder="New todo"/>
    <button @click='clearTodoInput'>Add</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.component('AddNewTodo', {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    clearTodoInput () {
      this.$emit('addTodo', this.newTodo);
      this.newTodo = '';
    },
  }
})
</script>
