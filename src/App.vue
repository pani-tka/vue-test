<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <div v-if="isLoading">
          <v-layout justify-center row>
            <v-dialog content-class="loading-dialog" fullscreen persistent v-model="isLoading">
              <v-container fill-height>
                <v-layout align-center justify-center row>
                  <v-progress-circular :size="70" :width="7" color="light-green darken-3" indeterminate></v-progress-circular>
                </v-layout>
              </v-container>
            </v-dialog>
          </v-layout>
        </div>
        <div class="app-container" v-else>
          <v-toolbar-title class="text-center pa-12">YOUR TODO-APP</v-toolbar-title>
          <AddNewTodo />
          <TodoList v-if="todosCounter" />
          <v-card-text class="text-center pa-12" v-else>Nothing left in the list.</v-card-text>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AddNewTodo from './components/add-new-todo.vue';
import TodoList from './components/todo-list.vue';

export default {
  name: 'App',
  components: {
    AddNewTodo,
    TodoList,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    todosCounter() {
      return this.$store.state.todos.length;
    },
  },
  created() {
    this.$store.dispatch('initialiseStore');
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style scoped>
.app-container {
  min-height: 300px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
