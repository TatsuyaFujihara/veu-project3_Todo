<template>
  <div>
    <router-link to="Todo">todoへ</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    toTodo(){
      this.$router.push('/todo')
    }
  }
}
</script>

<style>
</style>
