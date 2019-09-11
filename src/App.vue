<template>
  <div>
    <div v-if="!isLoading" class="loader-container">
      <img class="loader-img" src="./source/spinner.png" alt=""/>
    </div>
    <div v-else class="app-container">
      <h1 class="app-title">YOUR TODO-APP</h1>
      <div class="container">
        <AddNewTodo></AddNewTodo>
        <TodoList v-if="todosCounter"/>
        <p v-else>Nothing left in the list.</p>
      </div>
    </div>
  </div>
</template>

<script>
import AddNewTodo from './components/add-new-todo'
import TodoList from './components/todo-list'

export default {
  name: "App",
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    AddNewTodo,
    TodoList
  },
  computed: {
    todosCounter() {
      return this.$store.state.todos.length;
    }
  },
  created() {
    this.$store.dispatch('initialiseStore')
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = true;
    }, 1000)
  }
}
</script>

<style scoped>

.loader-container {
  height: 100%;
}

@keyframes spin {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}

.loader-img {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  animation: spin 0.2s linear 0s infinite;
}

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
