<template>
  <div>
    <h1>TODOS</h1>
      <ul>
        <li v-for="(todo, index) in todos" :key='index' >
          {{ todo}}
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      todos: ['one', 'two', 'three', 'four']
    }
  }
}
</script>