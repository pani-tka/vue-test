<template>
  <div>
    <h1>TODOS</h1>
    <AddNewTodo @addTodo="addTodo"></AddNewTodo>
    <ul v-for="(todo, index) in todos" :key='index'>
      <li>
        {{todo}}
        <button v-on:click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import AddNewTodo from './components/add-new-todo'
export default {
  name: "App",
  
  components: {
    AddNewTodo
  },
  
  data() {
    return {
      todos: []
    }
  },

  methods: {
    addTodo (newTodo) {
      this.todos.push(newTodo)
    },
    removeTodo (index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>
