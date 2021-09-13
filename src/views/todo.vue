<template>
    <div id="app">
        <h2>ToDpリスト</h2>
        <div class="form-check-inline">
        <label class="mr-2"><input name="select" type="radio" value="すべて">すべて</label>
        <label class="mr-2"><input name="select" type="radio" value="作業中">作業中</label>
        <label class="mr-2"><input name="select" type="radio" value="完了">完了</label>
        </div>
        <table>
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">コメント</th>
                    <th scope="col">状態</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(todo, index) in todos" :key="index">
                <td>{{index}}</td>
                <td>{{todo.content}}</td>
                <td v-if="todo.status">
                    <input type="button" value="完了" @click="todo.status = false">
                </td>
                <td v-else>
                    <input type="button" value="未完了" @click="todo.status = true">
                </td>
                <td><input type="button" value="削除"></td>
            </tr>
                
            </tbody>
        </table>
        <p>
        <label><input type="text" v-model="task"></label>
        <input type="button" value="追加" @click="onAdd">
        </p>
        <p class="lists">{{task}}</p>
        <p class="lists">{{todos}}</p>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            task: ""
        };
    },
    computed: {
        todos() {
            return this.$store.getters.todos;
        }
    },
    methods: {
        onAdd () {
            const todo = {
                content: this.task,
                status: false
            };
            this.$store.dispatch("addTodo", todo);
        }
    }
}
</script>