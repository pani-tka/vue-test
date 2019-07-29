<template>
  <div id="app">
    <h1>TODOLIST</h1>
    <TodoList/>
  </div>
</template>

<script>

import TodoList from './components/TodoList'

export default {
  name: "App",
    components: {
      TodoList
    }
}
</script>