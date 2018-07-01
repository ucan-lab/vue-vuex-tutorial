<template>
  <section>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </section>
</template>

<script>
export default {
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>
