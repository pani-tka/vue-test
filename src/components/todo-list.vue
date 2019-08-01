<template>
  <ul>
    <TodoItem 
      v-for="(todo, index) in todos"
      :key="index"
      :index='index'
      :todo="todo"
      @removeTodo="$emit('removeTodo', index)"
    />
  </ul>
</template>

<script>
import Vue from 'vue'
import TodoItem from './todo-item'

export default Vue.component('TodoList', {
  props: {
    todos: Array
  },
  components: {
    TodoItem
  }
})

</script>
