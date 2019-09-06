import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: []
  },

  mutations: {
    INITIALISE_STORE(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
    ADD_TODO(state, title) {
      state.todos.push({
        title: title,
        completed: false
      });
      localStorage.setItem('store', JSON.stringify(state));
    },
    EDIT_TODO_BY_ID(state, {title, id}) {
      state.todos[id].title = title;
      localStorage.setItem('store', JSON.stringify(state));
    },
    REMOVE_TODO_BY_ID(state, id) {
      state.todos.splice(id, 1);
      localStorage.setItem('store', JSON.stringify(state));
    },
    TOGGLE_STATUS(state, todo){
      todo.completed = !todo.completed;
      localStorage.setItem('store', JSON.stringify(state));
    },
  },

  actions: {
    initialiseStore({ commit}) {
      commit('INITIALISE_STORE')
    },
    addTodo({commit}, payload) {
      commit('ADD_TODO', payload);
    },
    editTodoById({commit}, payload) {
      commit('EDIT_TODO_BY_ID', payload)
    },
    removeTodoById({commit}, payload) {
      commit('REMOVE_TODO_BY_ID', payload)
    },
    toggleStatus({commit}, payload) {
      commit('TOGGLE_STATUS', payload)
    }
  },

  getters: {}
});