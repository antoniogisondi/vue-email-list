"use strict"

const app = Vue.createApp({
    data() {
        return {
            // VARIABILI CHE SERVONO PER LE FUNZIONI
            email: '',
            array_email:[]
        }
    },

    methods: {
        // FUNZIONE CHE TI CREA 10 EMAIL 
            createTenEmail(){
            for(let i=0; i < 10; i++){
                // CHIAMATA DELL ENDPOINT CON FUNZIONE CHE ESEGUE LA CHIAMATA ALL'ENDPOINT
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                this.array_email.push(result.data.response)
            })
            }
        }
    }
}).mount('#app')