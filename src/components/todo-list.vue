<template>
  <ul>
    <TodoItem 
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @removeTodoItem="$emit('removeTodoById', index)"
      @editTodo="editTodoById($event, index)"
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
  },
  
  methods: {
    editTodoById (editingValue, index) {
      this.$emit('editTodoById', index, editingValue)
    }
  }
})

</script>
