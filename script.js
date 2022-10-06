function calcularValor () {
  //Cria referência aos elementos da página
  let inValor = document.getElementById('inValor')
  let inTempo = document.getElementById('inTempo')
  let outTotal = document.getElementById('outTotal')

  //Obtem conteúdos dos campos de entrada
  let valor = Number(inValor.value.replace('.', ',').replace(',','.'))
  let tempo = Number(inTempo.value)
  
  //Calcula o valor a ser pago  e arredonda para cima
  let tempoUso = Math.ceil(tempo / 15)
  let total = tempoUso * valor

  //Altera o conteúdo da linha de resposta
  outTotal.textContent += 'Valor a pagar R$: ' + total.toFixed(2)

}
//Cria referência ao elemento btCalcularValorPg (botão)
let btCalcularValorPg = document.getElementById('btCalcularValorPg')

//Registra um evento associado ao botão, para carregar uma função
btCalcularValorPg.addEventListener('click', calcularValor)
