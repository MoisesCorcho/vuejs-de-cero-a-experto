const app = Vue.createApp({
//    template: `
//    <h1> Hola Mundo </h1>
//    <p>Desde app.js</p>
//    ` 

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Waine"
        }
    },
    methods: {
        changeQuote( event ){
            console.log('Algo', event)
            this.author = '-Moises Corcho'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    } 

})

app.mount('#myApp')