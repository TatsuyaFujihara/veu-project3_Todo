import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },
    getters: {
        todos: state => state.todos,
        isDonetodos: state => state.todos.filter(todo => !todo.status),
        Donetodos: state => state.todos.filter(todo => todo.status)
    },

    mutations: {
        addTodo(state, { content, status }) {
            const todo = {
              content: content,
              status: status
            };
            state.todos.push(todo);
        },
        delete(state, index) {
            state.todos.splice(index, 1)
        }
    },

    actions: {
        addTodo({ commit }, todo) {
            commit("addTodo", todo);
        },
        deleteTodo({ commit }, index) {
            commit("delete", index);
        }
    }
});