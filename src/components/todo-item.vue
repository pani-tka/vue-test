<template>
  <li>
    <div v-if="!isEditing">
      {{todo}} 
      <button @click="editMode">Edit</button>
      <button @click="$emit('removeTodoItem')">Remove</button>
    </div>
    <div v-else>
      <input 
        type="text" 
        v-model="editingValue" 
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
    todo: String,
  },

  data() {
    return {
      isEditing: false,
      editingValue: ''
    }
  },

  methods: {
    editMode () {
      this.editingValue = this.todo;
      this.isEditing = true;
    },
    saveEdit () {
      this.$emit('editTodo', this.editingValue);
      this.isEditing = false;
    },
    cancelEdit () {
      this.isEditing = false;
    }
  }
})

</script>
