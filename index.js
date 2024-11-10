let rl = require('readline-sync');

class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        switch(this.tipo){
            case "mago" :
                ataque = "magia";
            break;
            case "guerreiro" :
                ataque = "espada";
            break;
            case "monge":
                ataque = "artes marciais";
            break;
            case  "ninja":
                ataque = "shuriken";
            break;
        }

        console.log("O " + this.tipo + " atacou usando " + ataque);
    }
}

console.log("Seja bem-vindo aventureiro!");

let nome = rl.question("Insira seu nome:");
let idade = rl.questionInt("Insira a sua idade:");
let tipo = rl.questionInt("Selecione a sua classe: 1-Mago  2-Guerreiro  3-Monge  4-Ninja  ");
//usei a escolha com numeros para evitar de a pessoa digitar errado a classe ou digitar com letras maiusculas, o que dificultaria nas comparacoes
switch(tipo){
    case 1:
        tipo = "mago";
    break;
    case 2:
        tipo = "guerreiro";
    break;
    case 3:
        tipo = "monge";
    break;
    case 4:
        tipo = "ninja";
    break;
}

const heroi = new Heroi(nome, idade, tipo);
heroi.atacar();