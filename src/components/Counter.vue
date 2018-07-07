<template>
  <section>
    <p>{{ total }}</p>
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
  // computed: mapState([
  //   'count'
  // ])
  computed: {
    total () {
      return this.price * 1.08
    },
    // オブジェクトスプレット演算子で、外のオブジェクトとこのオブジェクトを混ぜる
    ...mapState([
      'count'
    ]),
    ...mapState({
      'foo': this.price
    })
  }
}
</script>
