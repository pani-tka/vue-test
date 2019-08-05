<template>
  <li>
    <div v-if="!isEditing">
      {{todo.title}} 
      <button @click="editMode">Edit</button>
      <button @click="$emit('removeTodoItem')">Remove</button>
    </div>
    <div v-else>
      <input 
        type="text" 
        v-focus 
        v-model="todo.title" 
        @keyup.enter="saveEdit"
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
      isEditing: false,
      beforeEditingValue: ""
    }
  },

  methods:{
    editMode () {
      this.isEditing = true;
      this.beforeEditingValue = this.todo.title;
    },
    saveEdit () {
      if (this.todo.title != '') {
        this.$emit('editTodo', this.beforeEditingValue);
        this.isEditing = false;
      }
    },
    cancelEdit () {
      this.todo.title = this.beforeEditingValue;
      this.isEditing = false;
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
