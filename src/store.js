import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
    filter: 'In Progress'
  },
  mutations: {
    INITIALISE_STORE(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
    ADD_TODO (state, title) {
      state.todos.push({
        title: title,
        completed: false,
        uuid: (function uuidv4() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
        })()
      });
      localStorage.setItem('store', JSON.stringify(state));
    },
    EDIT_TODO_BY_ID(state, {title, index}) {
      Vue.set(state.todos[index], 'title', title);
      localStorage.setItem('store', JSON.stringify(state));
    },
    REMOVE_TODO_BY_ID(state, index) {
      state.todos.splice(index, 1);
      localStorage.setItem('store', JSON.stringify(state));
    },
    TOGGLE_STATUS(state, index) {
      Vue.set(state.todos[index], 'completed', !state.todos[index].completed);
      localStorage.setItem('store', JSON.stringify(state));
    },
    CHANGE_FILTER(state, filter) {
      state.filter = filter;
    }
  },

  actions: {
    initialiseStore({commit}) {
      commit('INITIALISE_STORE');
    },
    addTodo({commit}, payload) {
      commit('ADD_TODO', payload);
    },
    editTodoById({commit}, payload) {
      commit('EDIT_TODO_BY_ID', payload);
    },
    removeTodoById({commit}, payload) {
      commit('REMOVE_TODO_BY_ID', payload);
    },
    toggleStatus({commit}, payload) {
      commit('TOGGLE_STATUS', payload);
    },
    changeFilter({commit}, payload) {
      commit('CHANGE_FILTER', payload);
    }
  },

  getters: {
    filteredTodos(state) {
      switch (state.filter) {
        case 'In Progress':
          return state.todos.filter(todo => !todo.completed);
          break;
        case 'Completed':
          return state.todos.filter(todo => todo.completed);
          break;
        default:
          return state.todos;
      }
    }
  },
});