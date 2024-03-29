import { ref } from 'vue'
import axios from 'axios'

const useUsers = () => {

    const users        = ref([])
    const isLoading    = ref(true)
    const currentPage  = ref(1)
    const errorMessage = ref('')

    const getUsers = async ( page = 1) => {

        if (page <= 0) page = 1

        isLoading.value = true

        const { data } = await axios.get('https://reqres.in/api/users', {
            params: {
                page: page
            }
        })

        if ( data.data.length > 0 ) {
            errorMessage.value = ''
            users.value = data.data
            currentPage.value = page
        } else if ( currentPage.value > 0 ) {
            errorMessage.value = 'No hay mas usuarios.'
        }

        isLoading.value = false
    }        

    
    getUsers()

    return {
        users,
        isLoading,
        currentPage,
        errorMessage,

        nextPage: () => getUsers(currentPage.value + 1),
        prevPage: () => getUsers(currentPage.value - 1)
    }

}

export default useUsers