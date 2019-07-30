<template>
  <div>
    <h1>TODOS</h1>
      <input v-model="newTodo" placeholder="New todo">
      <button v-on:click="addTodo">Add</button>
      <ul>
        <li v-for="(todo, index) in todos" :key='index' >
          {{todo}}
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
    addTodo (newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = ''
    }
  }
}
</script>