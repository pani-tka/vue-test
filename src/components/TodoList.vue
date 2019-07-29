<template>
  <div>
    <TodoHeader
      v-bind:value="newTodoName"
      placeholder="New todo"
      @keydown.enter="addTodo"
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
      todos: [
        {id: 0, title: "Create vue-project"},
        {id: 1, title: "Display 'Test'"},
        {id: 2, title: "Try to transfom in todo-list"}
      ],
      newTodoName: '',
    };
  },
  methods: {
    addTodo () {
      const todoName = this.newTodoName;
      if (todoName) {
				this.todos.push({
					id: todos.length+1,
					title: todoName
				})
				this.newTodoName = ''
			}
    },
    removeTodo(selectedTodoId) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== selectedTodoId
      })
    }
  }

});
</script>
