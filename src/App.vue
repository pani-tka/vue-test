<template>
  <div>
    <h1>TODOS</h1>
    <AddNewTodo @addTodo="addTodo"></AddNewTodo>
    <TodoList 
      v-if="todos.length" 
      :todos="todos" :todo='todo' 
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
      todos: [],
      todo:{},
      editTodoValue:'',
    }
  },

  methods: {
    addTodo (newTodo) {
      let todo = {
        text: newTodo,
        editing: false
      };
      this.todos.push(todo);
    },

    removeTodoById (id) {
      this.todos.splice(id, 1);
    },

    editTodo(todo) {
      if (todo.text.trim() == "") todo.text = this.editTodoValue;
      todo.editing = false;
    },
  }
}
</script>
