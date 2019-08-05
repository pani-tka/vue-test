<template>
  <ul>
    <TodoItem 
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @removeTodoItem="$emit('removeTodoById', index)"
      @editTodo="$emit('editTodo', index, todo)"
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
