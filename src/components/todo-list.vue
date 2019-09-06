<template>
    <ul class="todo-list">
      <TodoItem
        :class="{ completed: todo.completed }"
        v-for="(todo, index) in todos"
        :key="index"
        :index="index"
        :todo="todo"
      ></TodoItem>
    </ul>
</template>

<script>
import TodoItem from "./todo-item";

export default {
  name: "TodoList",
  components: {TodoItem},
  computed: {
    todos() {
      return this.$store.state.todos;
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


