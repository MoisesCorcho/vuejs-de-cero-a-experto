<template> 
  <h1>Counter - Vuex</h1>

  <h2>Direct Access {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>

  <h1>Map State</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
  <h2>lastRamdonInt: {{ lastRandomInt }}</h2>

  <h2>Direct Getter: {{ $store.getters['counter/squareCount'] }}</h2>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    // eslint-disable-next-line
    name: 'Counter',

    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState( 'counter', ['count', 'lastMutation', 'lastRandomInt', 'isLoading'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        //     lastMutation: 'lastMutation'
        // })
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5)
        },
        // ...mapActions('counter', ['incrementRandomInt'])
        ...mapActions( 'counter', {
            randomInt: 'incrementRandomInt'
        })
    }
}
</script>
