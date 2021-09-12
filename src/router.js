import Vue from 'vue'
import Router from 'vue-router'
import Todo from './views/todo.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {path: '/todo', component: Todo}
    ]
})