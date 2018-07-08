import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'hello', done: true },
      { id: 2, text: 'world', done: false },
      { id: 3, text: 'foo', done: true },
      { id: 4, text: 'bar', done: true },
      { id: 5, text: 'sample', done: false },
      { id: 6, text: 'foobar', done: true },
      { id: 7, text: 'foobarfoo', done: true },
      { id: 8, text: 'foobarfoobar', done: true },
      { id: 9, text: 'foobarfoobarfoo', done: true },
      { id: 10, text: 'foobarfoobarfoobar', done: true },
      { id: 11, text: 'foobarfoobarfoobarfoo', done: true },
      { id: 12, text: 'foobarfoobarfoobarfoobar', done: true },
      { id: 13, text: 'foobarfoobarfoobarfoobarfoo', done: true },
      { id: 14, text: 'foobarfoobarfoobarfoobarfoobar', done: true }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
