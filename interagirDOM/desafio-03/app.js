new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor !== 37 ? "Valor Diferente" : "Valor Igual";
        },
    },
    watch: {
        valor(novo, antigo){
            setTimeout(() => {
              this.valor = 0
            }, 5000);
          }
      },
});