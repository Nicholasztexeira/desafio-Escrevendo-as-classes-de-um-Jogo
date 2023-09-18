class hero{
    constructor(nome, idade, tipo, ataque){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
    }
    get atacar () {
        console.log(`O ${this.tipo} atacou usando ${this.ataque} `)
    }
}
let heroMago = new hero ("Magician", 18, "mago", "magia");
let heroGuerreiro = new hero ("Guereirician", 32, "guerreiro", "espada");
let heroMonge = new hero ("Mongiciano", 45, "monge", "artes marciais");
let heroNinja = new hero ("Ninjakai", 35, "ninja", "shuriken");


heroMago.atacar( ) 
