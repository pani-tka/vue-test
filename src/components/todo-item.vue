<template>
  <li>
    <div v-if="!todo.editing" @click="todo.editing = true; editTodoValue=todo.text">
      {{todo.text}}
      <button @click="$emit('removeTodoItem')">Remove</button>
      </div>
    <input v-else type="text" v-model="todo.text" @keyup.enter="$emit('editTodo', todo)"/>
  </li>
</template>

<script>
import Vue from 'vue'

export default Vue.component('TodoItem', {
  props: {
    todo: Object,
  }
})
</script>
