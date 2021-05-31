new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("Intruder Alert")
        },
        armazenaValor(event) {
            this.valor = event.target.value
        }
    }
})