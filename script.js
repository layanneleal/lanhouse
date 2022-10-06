function calcularValor () {
  let inValor = document.getElementById('inValor')
  let inTempo = document.getElementById('inTempo')
  let outTotal = document.getElementById('outTotal')

  let valor = Number(inValor.value.replace('.', ',').replace(',','.'))
  let tempo = Number(inTempo.value)
  

  let tempoUso = Math.ceil(tempo / 15)
  let total = tempoUso * valor

  outTotal.textContent += 'Valor a pagar R$: ' + total.toFixed(2)

}
let btCalcularValorPg = document.getElementById('btCalcularValorPg')
btCalcularValorPg.addEventListener('click', calcularValor)
