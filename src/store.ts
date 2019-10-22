import Vue from 'vue';
import Vuex from 'vuex';

import { ITodoItem } from './types/todo';

Vue.use(Vuex);

export interface ITodoState {
  todos: ITodoItem[];
  filter: string;
  filters: string[];
}

const getIndex = (state: ITodoState, id: string) => state.todos.findIndex((item: ITodoItem) => item.uuid === id);

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // tslint:disable-next-line:no-bitwise
    const r = (Math.random() * 16) | 0;
    // tslint:disable-next-line:no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const store = new Vuex.Store({
  state: {
    todos: [],
    filter: 'inProgress',
    filters: ['inProgress', 'completed', 'all'],
  },

  mutations: {
    INITIALISE_STORE(state) {
      if (localStorage.getItem('todos')) {
        state.todos = Object.assign(state.todos, JSON.parse(localStorage.getItem('todos')));
      }
    },
    ADD_TODO(state, title) {
      state.todos.push({
        title,
        completed: false,
        uuid: uuidv4(),
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    EDIT_TODO_BY_ID(state, { title, id }) {
      Vue.set(state.todos[getIndex(state, id)], 'title', title);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    REMOVE_TODO_BY_ID(state, id) {
      state.todos.splice(getIndex(state, id), 1);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    TOGGLE_STATUS(state, id) {
      const index = getIndex(state, id);
      const currentStatus = state.todos[index].completed;

      Vue.set(state.todos, index, Object.assign(state.todos[index], { completed: !currentStatus }));
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    CHANGE_FILTER(state, filter) {
      state.filter = filter;
    },
  },

  actions: {
    initialiseStore({ commit }) {
      commit('INITIALISE_STORE');
    },
    addTodo({ commit }, payload) {
      commit('ADD_TODO', payload);
    },
    editTodoById({ commit }, payload) {
      commit('EDIT_TODO_BY_ID', payload);
    },
    removeTodoById({ commit }, payload) {
      commit('REMOVE_TODO_BY_ID', payload);
    },
    toggleStatus({ commit }, payload) {
      commit('TOGGLE_STATUS', payload);
    },
    changeFilter({ commit }, payload) {
      commit('CHANGE_FILTER', payload);
    },
  },

  getters: {
    filteredTodos(state) {
      switch (state.filter) {
        case 'inProgress':
          return state.todos.filter(todo => !todo.completed);
        case 'completed':
          return state.todos.filter(todo => todo.completed);
        default:
          return state.todos;
      }
    },
  },
});
