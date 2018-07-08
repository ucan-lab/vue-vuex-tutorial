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
import { mapState } from 'vuex'

export default {
  data () {
    return {
      price: 100
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // }
  computed: mapState([
    'count'
  ])
}
</script>
