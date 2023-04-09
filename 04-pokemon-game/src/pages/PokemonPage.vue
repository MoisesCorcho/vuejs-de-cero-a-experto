<template>

    <h1 v-if="respuestas==2">
        Perdiste!
    </h1>
    <h1 v-if="respuestas==3">
        No ves que ya perdiste nojoda, que? Que mas mondá puyas las opciones esas, que eres marica?
    </h1>
    <h1 v-if="respuestas==4">
        Mani... Ya tienes las vidas en negativo... Eche, ya deja esa vaina quieta! >:v
    </h1>
    <h1 v-if="respuestas==5">
        Tu no lees una verga, verdad?
    </h1>
    <h1 v-if="respuestas==6">
        Ah que no haces caso en esta verga, no? Don mondá te voy a decir
    </h1>
    <h1 v-if="respuestas==7">
        Marica, cule pereza validar que esta mierda de juego se reinicie al tener 0 vidas, ya dejame quieto, ya!
    </h1>
    <h1 v-if="respuestas==8">
        Estoy seguro que otros juegos no tienen que aguantar este tipo de abusos...
    </h1>
    <h1 v-if="respuestas==9">
        Sabes que? Ya me aburrí de esta mierda, voy es a reiniciarme >:v
    </h1>
    <h1 v-if="respuestas==10">
        Nos vemos.
    </h1>
    
    <h2>Vidas: {{vidas}}</h2> <h2>puntuación: {{puntuacion}}</h2>

    <h1 v-if="!pokemon">Espere por favor...</h1>


    <div v-else>

        <h1>¿Quien es este pokemon?</h1>

        <PokemonPicture 
            :pokemon-id="pokemon.id" 
            :show-pokemon="showPokemon"
        />
        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection="checkAnswer"
        />

        <template v-if="showAnswer">
            <h2>{{ message }}</h2>

            <template v-if="showContinueButton">
                <button @click="newGameContinuar">
                    Continuar
                </button>
            </template>
            
        </template>

        <template v-if="showNewGameButton">
            <button @click="newGame">
                Nuevo juego
            </button>
        </template>

        
    </div>
    
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null, 
            showPokemon: false,
            showAnswer: false,
            message: '',
            vidas: 3,
            showNewGameButton: false,
            showContinueButton: true,
            respuestas: 0,
            puntuacion: 0
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer( pokemonId ) {
            this.showPokemon = true
            this.showAnswer = true

            if( pokemonId === this.pokemon.id ){ 
                this.message = `Correcto! ${this.pokemon.name}`
                this.puntuacion++
            }else{
                this.message = `Oops, era ${this.pokemon.name}`
                this.vidas--
            }

            if(this.vidas <= 0){
                this.showNewGameButton = true
                this.showContinueButton = false
            }

            if(this.vidas === 0){ this.respuestas = 2 }
            if(this.vidas < 0  ){ this.respuestas = 3 }
            if(this.vidas < -10){ this.respuestas = 4 }
            if(this.vidas < -20){ this.respuestas = 5 }
            if(this.vidas < -30){ this.respuestas = 6 }
            if(this.vidas < -40){ this.respuestas = 7 }
            if(this.vidas < -50){ this.respuestas = 8 }
            if(this.vidas < -60){ this.respuestas = 9 }
            if(this.vidas < -70){ this.respuestas = 10 }
            if(this.vidas < -80){ this.newGame() }

        },
        newGame() {

            this.pokemonArr         = []
            this.showPokemon        = false
            this.showAnswer         = false
            this.pokemon            = null
            this.vidas              = 3
            this.respuestas         = 0
            this.showContinueButton = true
            this.showNewGameButton  = false
            this.message            = ''
            this.puntuacion         = 0 
            this.mixPokemonArray()

        },
        newGameContinuar() {
            this.showPokemon = false
            this.message = ''
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
