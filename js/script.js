const { createApp } = Vue

createApp({
  data() {
    return {
      email: [], // Array per memorizzare gli indirizzi email generati
      emailRnd: true, // Flag per controllare se tutti gli indirizzi sono stati generati
    }
  },
  methods: {
    getEmailRnd: function () {
        // Quando la funzione viene chiamata, impostiamo il emailRnd su false e svuotiamo l'array degli indirizzi email
        this.emailRnd= false;
        this.email=[];
        
        // Utilizziamo un ciclo for per generare 10 indirizzi email
        for (let i = 0; i < 10; i++ ) {
            // Otteniamo un indirizzo email casuale           
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    // Una volta ottenuta la risposta, aggiungiamo l'indirizzo email all'array email
                    this.email.push(resp.data.response);
                    // Solo se abbiamo ottenuto tutti gli indirizzi email (10), impostiamo emailRnd su true
                    if (this.email.length === 10) {
                        this.emailRnd = true
                    }
                });
        }
    },
  }
}).mount('#app')