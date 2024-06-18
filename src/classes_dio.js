
class hero {
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }
  atacar(){
    if(this.tipo == "mago"){
      let ataque = "magia"
      console.log("O "+ this.tipo + " atacou usando " + ataque)
      
    }else if(this.tipo == "guerreiro"){
      let ataque = "espada"
      console.log("O "+ this.tipo + " atacou usando " + ataque)
      
    }else if(this.tipo == "monge"){
      let ataque = "artes marciais"
      console.log("O "+ this.tipo + " atacou usando " + ataque)
      
    }else if(this.tipo == "ninja"){
      let ataque = "shuriken"
      console.log("O "+ this.tipo + " atacou usando " + ataque)
    }
  } 
}


let mago = new hero("Harry Potter",17,"mago")
let guerreiro = new hero("Marcus",46,"guerreiro")
let monge = new hero("Bankei",30,"monge")
let ninja = new hero("Kato",34,"ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
