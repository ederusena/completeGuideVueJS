new Vue({
  el: '#desafio',
data: {
  nome: 'Eder Sena',
idade: '34',
imageGoogle: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
},
methods: {
randomico: function () {
  return Math.floor(Math.random() * (1 - 0 + 1)) + 0
}
}
})
