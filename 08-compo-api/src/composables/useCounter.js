import { ref } from 'vue'

const useCounter = ( initValue = 5 ) => {

    const counter = ref(initValue)

    function aumentar() {
        counter.value++
    }

    function decrementar() {
        counter.value--
    }

    return {
        counter, 
        aumentar,
        decrementar
      }

}

export default useCounter