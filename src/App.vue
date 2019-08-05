<template>
  <div>
    <h1>TODOS</h1>
    <AddNewTodo @addTodo="addTodo"></AddNewTodo>
    <TodoList 
      v-if="todos.length" 
      :todos="todos" 
      @removeTodoById='removeTodoById' 
      @editTodoById='editTodoById'
    />
    <p v-else>Nothing left in the list.</p>
  </div>
</template>

<script>
import AddNewTodo from './components/add-new-todo'
import TodoList from './components/todo-list'
export default {
  name: "App",

  components: {
    AddNewTodo,
    TodoList
  },
  
  data() {
    return {
      todos: []
    }
  },

  methods: {
    addTodo (newTodo) {
      this.todos.push(newTodo);
    },
    removeTodoById (id) {
      this.todos.splice(id, 1);
    },
    editTodoById (id, todo) {
      this.$set(this.todos, id, todo);
    }
  }
}
</script>
