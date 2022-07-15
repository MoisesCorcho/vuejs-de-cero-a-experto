<template>
  <img v-if="img" :src="img" alt="bg">
  <div class="bg-dark"></div>

  <div class="indecision-container">
    <input
      type="text"
      placeholder="Hazme una pregunta" 
      v-model="question">

    <br><br>
    
    <p>Recuerda terminar con un signo de interrogación (?)</p>

    <div v-if="isValidQuestion">
        <h2>{{ question }}</h2>
        <h1>{{ answer }}</h1>

        <!-- No lo puedes hacer de esta forma porque toma el valor de tal vez en vez de pensando -->
        <!-- <h1>{{ answer == 'yes'? 'Si!' : answer == 'no'? 'No!' : 'Tal vez...' }}</h1> -->

        <!-- Hacerlo de esta manera genera el mismo error que arriba -->
        <!-- <h1 v-if="answer == 'yes'">Si</h1>
        <h1 v-else-if="answer == 'no'">No!</h1>
        <h1 v-else>Tal vez</h1> -->
    </div>
  </div>
</template>

<script>
export default {
    data() {
        //Retornamos un objeto reactivo
        return {
            question: null,
            answer: null,
            img: null,
            isValidQuestion: false
        }
    },
    methods: {
        async getAnswer() {
            this.answer = 'Pensando...'

            const {answer, image} = await fetch('https://yesno.wtf/api').then(r => r.json());
console.log(answer)
            this.answer = answer === 'yes'? 'Si!' : answer === 'no'? 'No!' : 'Tal vez...'
            this.img = image
        }
    },
    watch: {
        question( value, oldValue){

            this.isValidQuestion = false

            if( !value.includes('?') ) return 

            this.isValidQuestion = true

            //TODO :: Realizar peticion HTTP
            this.getAnswer()
        }
        
    }
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>