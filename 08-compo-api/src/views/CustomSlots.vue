<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir modal</button>

  <modal 
    title="Hola Mundo"
    v-if="isOpen"
    @on:close="closeModal">
    <!-- <h2>Titulo del modal</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button>Salir</button> -->

    <template v-slot:body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </template>

    <template v-slot:footer>
        <button @click="closeModal">Salir</button>
    </template>

    <template v-slot:header>
        <h2>Titulo del modal</h2>
    </template>

    <!-- <template v-slot:exposed={hola}>
        {{hola['epa']}}
    </template> -->

  </modal>
</template>

<script>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
    components: {
        Modal
    },
    setup() {

        const isOpen = ref(false)

        return {
            isOpen,

            openModal : () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }

    }
}
</script>

<style scoped>

</style>