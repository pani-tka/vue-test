<template>
  <li>
    <div v-if="!todo.editing" @click="editMode(todo)">
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
        @keyup.esc="cancelEdit"
      />
      <button @click="cancelEdit">Cancel</button>
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
    },
    cancelEdit () {
      this.todo.title = this.editTodoCache;
      this.todo.editing = false;
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
