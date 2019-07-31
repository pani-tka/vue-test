<template>
  <ul>
    <li v-for="(todo, index) in todos" :key='index'>
      {{todo}}
      <button @click="$emit('removeTodo', index)">Remove</button>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'

export default Vue.component('TodoList', {
  props: {
    todos: Array
  }
})

</script>
