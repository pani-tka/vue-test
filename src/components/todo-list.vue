<template>
  <div>
    <div class="tabs">
      <div class="filters">
        <button
          v-for="filter in filters"
          :key="filter"
          :filter="filter"
          :class ="{active: stateFilter === filter}"
          @click="changeFilter(filter)"
        >
          {{filter}}
        </button>
      </div>
    </div>
    <ul class="todo-list">
      <TodoItem
        :class="{ completed: todo.completed }"
        v-for="todo in filteredTodos"
        :key="todo.uuid"
        :id="todo.uuid"
        :todo="todo"

      ></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./todo-item";

export default {
  name: "TodoList",
  components: {TodoItem},
  computed: {
    stateFilter () {
      return this.$store.state.filter;
    },
    filteredTodos () {
      return this.$store.getters.filteredTodos;
    },
  },
  data () {
    return {
      filters: ['In Progress', 'Completed', 'All']
    }
  },
  methods: {
    changeFilter (filter) {
      this.$store.dispatch('changeFilter', filter);
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
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
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

button.active {
  background-color: #5c8a03;
  color: #fff;
}
</style>


