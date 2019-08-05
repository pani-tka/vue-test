<template>
  <div>
    <h1>TODOS</h1>
    <AddNewTodo @addTodo="addTodo"></AddNewTodo>
    <TodoList 
      v-if="todos.length" 
      :todos="todos" 
      @removeTodoById='removeTodoById' 
      @editTodo='editTodo'
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
      let todo = {title: newTodo};
      this.todos.push(todo)
    },
    removeTodoById (id) {
      this.todos.splice(id, 1);
    },
    editTodo (index, todo) {
      if (todo.title.trim() == "") {
        todo.title = this.beforeEditingValue;
      }
    }
  }
}
</script>
