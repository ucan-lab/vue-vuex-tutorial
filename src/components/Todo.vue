<template>
  <section>
    <h1>todo list. {{ doneTodosCount }}</h1>
    <div class="container">
      <ul id="example-1">
        <li v-for="todo in doneTodos" :key="todo.id">
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <span>id: 2 {{ $store.getters.getTodoById(2).text }}</span>
  </section>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  padding: 0;
}
ul li {
  text-align: left;
}
</style>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    doneTodos () {
      return this.$store.getters.doneTodos
    },
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    }
  }
}
</script>
