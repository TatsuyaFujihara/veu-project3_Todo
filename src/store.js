import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },
    getters: {
        todos: state => state.todos
    },

    mutations: {
        addTodo(state, { content, status }) {
            const todo = {
              content: content,
              status: status
            };
            state.todos.push(todo);
          }
    },

    actions: {
        addTodo({ commit }, todo) {
            commit("addTodo", todo);
        }
    }
});