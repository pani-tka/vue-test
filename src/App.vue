<template>
  <div>
    <h1 class="app-title">YOUR TODO-APP</h1>
    <div class="container">
      <AddNewTodo></AddNewTodo>
      <TodoList v-if="todosCounter"/>
      <p v-else>Nothing left in the list.</p>
    </div>
  </div>
</template>

<script>
import AddNewTodo from './components/add-new-todo'
import TodoList from './components/todo-list'

export default {
  name: "App",
  created() {
    this.$store.dispatch('initialiseStore')
  },
  components: {
    AddNewTodo,
    TodoList
  },
  computed: {
    todosCounter() {
      return this.$store.state.todos.length;
    }
  }
}
</script>

<style scoped>

.container {
  width: 80%;
  min-height: 300px;
  margin: 50px auto 30px;
  border: 2px solid #2d0c03;
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
}

.container p {
  font-size: 20px;
  font-family: "Helvetica Neue", serif;
  color: #5c8a03;
  text-align: center;
}

.app-title {
  text-align: center;
  font-size: 40px;
  font-weight: normal;
  font-family: "Helvetica Neue", serif;
  letter-spacing: 1px;
  color: #2d0c03;
}

</style>
