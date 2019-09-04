<template>
  <div>
    <div class="tabs">
      <div class="filters">
        <button
          :class="{ selected: visibility === 'inProgress' }"
          @click="filterTodos('inProgress')"
        >
          InProgress
        </button>
        <button
          :class="{ selected: visibility === 'completed' }"
          @click="filterTodos('completed')"
        >
          Complete
        </button>
        <button
          :class="{ selected: visibility === 'all' }"
          @click="filterTodos('all')"
        >
          All
        </button>
      </div>
    </div>
    <ul class="todo-list">
      <TodoItem
        :class="{ completed: todo.completed }"
        :key="index"
        :todo="todo"
        @editTodo="editTodoById($event, index)"
        @removeTodoItem="$emit('removeTodoById', index)"
        v-for="(todo, index) in filteredTodos"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./todo-item";

const filters = {
  all(todos) {
    return todos;
  },
  inProgress(todos) {
    return todos.filter(todo => !todo.completed);
  },
  completed(todos) {
    return todos.filter(todo => todo.completed);
  }
};
export default {
  name: "TodoList",
  props: {
    todos: Array
  },
  data() {
    return {
      visibility: "inProgress"
    };
  },
  components: {
    TodoItem
  },
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos);
    }
  },
  methods: {
    editTodoById(editingValue, index) {
      this.$emit("editTodoById", index, editingValue);
    },
    filterTodos: function (filter) {
      this.visibility = filter;
    }
  }
};
</script>

<style scoped>
.todo-list {
  width: 80%;
  margin: 30px auto;
  padding: 0;
  list-style: none;
}

.todo-list li {
  position: relative;
  font-size: 24px;
  border-radius: 10px;
  transition: background 0.3s ease;
}

.filters {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 1rem 1.5rem 1rem;
}

.filters button {
  cursor: pointer;
  width: 85px;
  height: 40px;
  font-family: "Helvetica Neue", serif;
  color: #5c8a03;
  font-size: 10px;
  border: 2px solid #5c8a03;
  border-radius: 15px;
  margin: 0 5px 0 5px;
  outline: 0;
}

button.selected {
  background-color: #5c8a03;
  color: #fff;
}
</style>
