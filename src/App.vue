<template>
  <div>
    <h1>TODOS</h1>
    <input v-model="newTodo" placeholder="New todo">
    <button v-on:click="addTodo">Add</button>
    <ul v-for="(todo, index) in todos" :key='index'>
      <li>
        {{todo}}
        <button v-on:click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newTodo: '',
      todos: [],
    }
  },
  methods: {
    addTodo () {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    },
    
    removeTodo (index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>