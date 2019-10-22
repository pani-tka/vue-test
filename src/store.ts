import Vue from 'vue';
import Vuex, { MutationTree, ActionTree } from 'vuex';

import { ITodoItem } from './types/todo';

Vue.use(Vuex);

export interface IRootState {
  todos: ITodoItem[];
  filter: string;
  filters: string[];
}

const getIndex = (state: IRootState, id: string): number => state.todos.findIndex((item: ITodoItem) => item.uuid === id);

const uuidv4 = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // tslint:disable-next-line:no-bitwise
    const r = (Math.random() * 16) | 0;
    // tslint:disable-next-line:no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const RootState: IRootState = {
  todos: [],
  filter: 'inProgress',
  filters: ['inProgress', 'completed', 'all'],
};

const mutations: MutationTree<IRootState> = {
  INITIALISE_STORE(state: IRootState): void {
    if (localStorage.getItem('todos')) {
      state.todos = Object.assign(state.todos, JSON.parse(localStorage.getItem('todos')));
    }
  },
  ADD_TODO(state: IRootState, title: string): void {
    state.todos.push({
      title,
      completed: false,
      uuid: uuidv4(),
    });
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  EDIT_TODO_BY_ID(state: IRootState, { title, id }: { title: string; id: string }): void {
    Vue.set(state.todos[getIndex(state, id)], 'title', title);
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  REMOVE_TODO_BY_ID(state: IRootState, id: string): void {
    state.todos.splice(getIndex(state, id), 1);
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  TOGGLE_STATUS(state: IRootState, id: string): void {
    const index = getIndex(state, id);
    const currentStatus = state.todos[index].completed;

    Vue.set(state.todos, index, Object.assign(state.todos[index], { completed: !currentStatus }));
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  CHANGE_FILTER(state: IRootState, filter: string): void {
    state.filter = filter;
  },
};

const actions: ActionTree<IRootState, IRootState> = {
  initialiseStore({ commit }): void {
    commit('INITIALISE_STORE');
  },
  addTodo({ commit }, payload: string): void {
    commit('ADD_TODO', payload);
  },
  editTodoById({ commit }, payload: {title: string, id: string}): void {
    commit('EDIT_TODO_BY_ID', payload);
  },
  removeTodoById({ commit }, payload: string): void {
    commit('REMOVE_TODO_BY_ID', payload);
  },
  toggleStatus({ commit }, payload: string): void {
    commit('TOGGLE_STATUS', payload);
  },
  changeFilter({ commit }, payload: string): void {
    commit('CHANGE_FILTER', payload);
  },
};

const getters = {
  filteredTodos(state: IRootState): ITodoItem[] {
    switch (state.filter) {
      case 'inProgress':
        return state.todos.filter(todo => !todo.completed);
      case 'completed':
        return state.todos.filter(todo => todo.completed);
      default:
        return state.todos;
    }
  },
};

export const store = new Vuex.Store({
  state: RootState,
  mutations,
  actions,
  getters,
});
