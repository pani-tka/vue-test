<template>
  <li :id="todoId" class="todo">
      <label>{{todoTitle}}</label>
      <button @click="$emit('remove', todo.id)">
      X
    </button>
  </li>
</template>

<script>

import Vue from 'vue'

export default Vue.component('TodoItem', {
  props: ['todo'],
  data: function() {
    return {
      todoTitle: this.todo.title,
      todoId: this.todo.id,
    }
    console.log(todo)
  },
})
</script>


