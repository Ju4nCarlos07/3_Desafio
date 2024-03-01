class hero{
   constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque 
        if(this.tipo === "mago"){ataque = "magia";}
        else if(this.tipo === "guerreiro"){ataque = "espada";}
        else if(this.tipo === "monge"){ataque = "artes marciais";}
        else if(this.tipo === "ninja"){ataque = "shuriken";}
        else{ataque = "as mãos";}
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

let aventureiro = new hero("Nauj",16,"guerreiro");
aventureiro.atacar()

let pacifista = new hero("Akira",38,"monge");
pacifista.atacar()