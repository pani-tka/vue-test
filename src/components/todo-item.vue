<template>
  <li>
    <label>{{todo}}</label>
    <button @click="$emit('removeTodo', index)">Remove</button>
  </li>
</template>

<script>
import Vue from 'vue'

export default Vue.component('TodoItem', {
  props: {
    todo: String,
    index: Number
  }
})
</script>