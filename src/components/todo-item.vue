<template>
  <li>
    <label>{{todo}}</label>
    <button @click="$emit('removeTodoItem')">Remove</button>
  </li>
</template>

<script>
import Vue from 'vue'

export default Vue.component('TodoItem', {
  props: {
    todo: String,
  }
})
</script>
