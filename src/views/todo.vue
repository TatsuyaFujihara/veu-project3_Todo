<template>
    <div id="app">
        <h2>ToDpリスト</h2>
        <div class="form-check-inline">
            <label class="mr-2"><input name="select" type="radio" value="0" v-model="status">すべて</label>
            <label class="mr-2"><input name="select" type="radio" value="1" v-model="status">作業中</label>
            <label class="mr-2"><input name="select" type="radio" value="2" v-model="status">完了</label>
        </div>
        <table>
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">コメント</th>
                    <th scope="col">状態</th>
                </tr>
            </thead>
        <!-- todo全てを表示 -->
            <tbody>
                <tr v-for="(todo, index) in todos" :key="index">
                    <td>{{index}}</td>
                    <td>{{todo.content}}</td>
                    <td>
                        <button @click="todo.status = !todo.status">{{ todo.status ? "完了" : "作業中" }}</button>
                    </td>
                    <td><input type="button" value="削除" @click="deleteTodo(index)"></td>
                </tr>
            </tbody>
        </table>
        <p>
        <label><input type="text" v-model="task"></label>
        <input type="button" value="追加" @click="onAdd">
        </p>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            task: "",
            status: 0
        };
    },
    computed: {
        todos() {
            if (this.status == 1) {
                return this.$store.getters.todos.filter(todo => !todo.status);
            } else if(this.status == 2) {
                return this.$store.getters.todos.filter(todo => todo.status);
            } else {
                return this.$store.getters.todos;
            }
        }
    },
    methods: {
        onAdd () {
            const todo = {
                content: this.task,
                status: false
            };
            this.$store.dispatch("addTodo", todo);
        },
        deleteTodo(index){
            this.$store.dispatch("deleteTodo", index);
        }
    }
}
</script>