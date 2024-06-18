
let saldo_rankeadas = rankear(7,1)

function rankear(vitorias,derrotas){
  let rank_jogador = vitorias - derrotas
  
if (vitorias < 10){
  nivel = "Ferro"
  
}else if (vitorias > 10 && vitorias <= 21){
  nivel = "Bronze"
  
}else if (vitorias > 20 && vitorias <= 50){
  nivel = "Prata"
  
}else if (vitorias > 50 && vitorias <= 80){
  nivel = "Ouro"
  
}else if (vitorias > 80 && vitorias <= 90){
  nivel = "Diamante"
  
}else if (vitorias > 90 && vitorias <= 100){
  nivel = "Lendário"
  
}else if (vitorias >= 101){
  nivel = "Imortal"
  
}else {
  console.log("Valor de vitórias inválido tente novamente")
} 

  return rank_jogador
}



console.log("O Herói tem saldo de "+ saldo_rankeadas, "e está no nível de "+ nivel)
 