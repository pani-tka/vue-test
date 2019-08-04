<template>
  <div>
    <h1>TODOS</h1>
    <AddNewTodo @addTodo="addTodo"></AddNewTodo>
    <TodoList 
      v-if="todos.length" 
      :todos="todos" 
      @removeTodoById='removeTodoById' 
      @editTodo='editTodo'
      @cancelEdit='cancelEdit'
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
      let todo = {
        title: newTodo,
        completed: false,
        editing: false
      };
      if (newTodo != '') {
        this.todos.push(todo)
      } 
    },
    removeTodoById (id) {
      this.todos.splice(id, 1);
    },
    editTodo (index, todo, editTodoCache) {
      if (todo.title.trim() == "") todo.title = this.editTodoCache;
      todo.editing = false;
    },
    cancelEdit (index, todo, editTodoCache) {
      todo.title = this.editTodoCache;
      todo.editing = false;
    }
  }
}
</script>
