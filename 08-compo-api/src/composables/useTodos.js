import { computed, ref } from 'vue'
import { useStore } from 'vuex'


const useTodos = () => {
    const store = useStore()

    const currentTab = ref('all')
    const isOpen = ref(false)
    const input = ref('')

    return {

      currentTab,

      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),
      pending: computed(() => store.getters['pendingTodos']),

      getTodosBytab: computed(() => store.getters['getTodosBytab'](currentTab.value)),
      toggleTodo: ( id ) => store.commit('toggleTodo', id),
      isOpen,
      closeModal: () => isOpen.value = false, 
      openModal : () => isOpen.value = true, 
      newTodo: () => {
        store.commit('createTodo', input.value)
        isOpen.value = false
        input.value = ''
      },
      input
    }
}

export default useTodos