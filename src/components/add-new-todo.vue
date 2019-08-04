<template>
  <div>
    <input v-model="newTodo" placeholder="Please, add what you need to do..." @keyup.enter='clearTodoInput'/>
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
    }
  }
})
</script>
