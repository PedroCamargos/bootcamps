let input = gets()

let qtdEntradas = parseInt(input)
let melhor = 999
// T (2 <= T <= 99) relativo ao número de tentativas de um dia
// Ti (9 <= Ti <= 11) relativo ao tempo, em segundos

for(let i = 0; i < qtdEntradas; i++){
    
    input = gets()
    let tempo = parseFloat(input)
    
    if (9 <= tempo <= 11) {
      if ( tempo < melhor) {
        melhor = tempo
      }
    }
    
}
print(melhor)