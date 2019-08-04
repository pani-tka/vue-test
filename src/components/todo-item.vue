<template>
  <li>
    <input type="checkbox" v-model="todo.completed">
    <div v-if="!todo.editing" @click="editMode(todo)" :class="{completed: todo.completed}">
      {{todo.title}} 
      <button @click="$emit('editTodo',editTodoCache)">Edit</button>
      <button @click="$emit('removeTodoItem')">Remove</button>
    </div>
    <div v-else>
      <input 
        type="text" 
        v-focus 
        v-model="todo.title" 
        @keyup.enter="$emit('editTodo', editTodoCache)"
        @keyup.esc="$emit('cancelEdit', editTodoCache)"
      />
      <button @click="$emit('cancelEdit', editTodoCache)">Cancel</button>
    </div>
  </li>
</template>

<script>
import Vue from 'vue'

export default Vue.component('TodoItem', {
  props: {
    todo: Object,
  },

  data() {
    return {
      editTodoCache: ""
    }
  },

  methods:{
    editMode (todo) {
      todo.editing = true; 
      this.editTodoCache = todo.title;
    }
  },
  
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
})
</script>
