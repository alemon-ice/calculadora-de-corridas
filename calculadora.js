// Regras de negócio
let tarifaBase = 2
let tarifaDistancia = 1.4
let tarifaTempo = 0.26
let distancia = prompt(`Informe a distância da corrida`)
let tempo = prompt(`Informe o tempo da corrida`)
let valorCorrida = tarifaBase + distancia * tarifaDistancia + tempo * tarifaTempo

alert(`Sua corrida deu R$ ${valorCorrida.toFixed(2)}`)