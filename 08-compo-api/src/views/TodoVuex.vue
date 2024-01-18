<template>
  <h1>Lista de tareas de Thanos</h1>

  <h4>Pendientes: {{ pending.length }}</h4>

  <hr>
  <button 
    :class="{'active':currentTab == 'all'}"
    @click="currentTab = 'all'"
  >
    Todos
  </button>

  <button 
    :class="{'active':currentTab == 'pending'}"
    @click="currentTab = 'pending'"
  >
    Pendientes
  </button>

  <button 
    :class="{'active':currentTab == 'completed'}"
    @click="currentTab = 'completed'"
  >
    Completados
  </button>


  <div>
    <ul>
      <li 
        v-for="todo in getTodosBytab" :key="todo.id"
        :class="{'completed':todo.completed}"
        @dblclick="toggleTodo( todo.id )" 
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Crear todo</button>

  <modal 
    v-if="isOpen"
    @on:close="closeModal"
  >
    <template v-slot:header>
      
      <h2>Crear Nuevo Todo</h2>  
    </template>  

    <template v-slot:body>
      <form @submit.prevent="newTodo">
        <input 
          placeholder="Escriba el todo" 
          type="text"
          v-model="input" 
          >
        <br>
        <br>
        <button>Crear</button>
      </form>  
    </template>  

  </modal>

</template>

<script>
import useTodos from '@/composables/useTodos'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
  setup() {

    const { 
      currentTab,
      pending,
      getTodosBytab,
      toggleTodo,
      isOpen,
      closeModal,
      openModal,
      newTodo,
      input
    } = useTodos()

    return {
      currentTab,
      getTodosBytab,
      pending,
      toggleTodo,
      isOpen,
      closeModal,
      openModal,
      newTodo,
      input
    }

  }

}
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  ul {
    width: 300px;
    text-align: left;
  }

  li {
    cursor: pointer;
  }

  .active {
    background-color: #2c3e50;
    color: white;
  }

  .completed {
    text-decoration: line-through;
  }
</style>