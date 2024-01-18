<template>
  <h1> Counter View </h1>
  <h2>{{ counter }}</h2>

  <button @click="aumentar()">Aumentar</button>
  <button @click="decrementar()">Disminuir</button>
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
  name: 'Counter',
  setup() {

    const { counter, aumentar, decrementar } = useCounter(25)

    return {
      counter, aumentar, decrementar
    }

  }
}
</script>

<style>

</style>