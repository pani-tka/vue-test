<template>
  <div>
    <TodoHeader
      placeholder="New todo"
      @addTodo="addTodo"
    />
    <ul v-if="todos.length">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
    <p v-else>
      Nothing left in the list.
    </p>
  </div>
</template>

<script>

import Vue from 'vue';
import TodoHeader from './TodoHeader';
import TodoItem from "./TodoItem.vue";

export default Vue.component('TodoList', {
  components: {
    TodoItem,
    TodoHeader
  },
  data: function() {
    return {
      todos: [],
      newTodoName: ''
    };
  },
  methods: {
    addTodo (newTodoName) {
      debugger
        this.todos.push({
          id: this.todos.length+1,
          title: newTodoName
        })
        this.props.newTodoName = ''
    },
    removeTodo(selectedTodoId) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== selectedTodoId
      })
    }
  }

});
</script>
