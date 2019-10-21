<template>
  <v-row class="d-flex justify-center">
    <v-col cols="9">
      <v-container>
        <v-btn-toggle
          class="d-flex justify-center"
          color="light-green darken-3"
          group
          tile
          v-model="currentFilter"
        >
          <v-btn
            :class="{active: stateFilter === filter}"
            :filter="filter"
            :key="filter"
            :value="filter"
            @click="changeFilter(filter)"
            v-for="filter in filters"
          >
            {{filter}}
          </v-btn>
        </v-btn-toggle>
        <v-list class="ma-8" v-if="filteredTodos">
          <TodoItem
            :class="{ completed: todo.completed }"
            :id="todo.uuid"
            :key="todo.uuid"
            :todo="todo"
            v-for="todo in filteredTodos"
          >
          </TodoItem>
        </v-list>
        <div class="text-center pa-12" v-else>Nothing left in the list.</div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import TodoItem from "./todo-item";

export default {
  name: "TodoList",
  components: {TodoItem},
  data() {
    return {
      filters: ['inProgress', 'completed', 'all'],
      currentFilter: "inProgress",
    }
  },
  computed: {
    stateFilter () {
      return this.$store.state.filter;
    },
    filteredTodos () {
      return this.$store.getters.filteredTodos;
    },
  },
  methods: {
    changeFilter (filter) {
      this.$store.dispatch('changeFilter', filter);
    }
  }
};

</script>

