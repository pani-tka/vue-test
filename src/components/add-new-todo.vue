<template>
  <div>
    <input v-model="newTodo" placeholder="Please, add what you need to do..." @keyup.enter='createNewTodo'/>
    <button @click='createNewTodo'>Add</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.component('AddNewTodo', {
  data () {
    return {
      newTodo: ''
    }
  },

  methods: {
    createNewTodo () {
      if (this.newTodo != '') {
        this.$emit('addTodo', this.newTodo);
        this.newTodo = '';
      }
    }
  }
})
</script>
