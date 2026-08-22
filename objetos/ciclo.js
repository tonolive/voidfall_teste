export const ciclo1 = {

    cartas: [],

    montarCartas: function(cartas){
        this.cartas = cartas;
        this.embaralhar();
    },
    embaralhar: function(){
        this.cartas.sort(() => Math.random() - 0.5);
    },
    mostrarTodasAsCartas: function(){
        console.log(this.cartas);
    },
    mostrarAsDuasProximasCartas: function(){
        console.log(`Primeira carta: ${this.cartas[0]} \nSegunda Carta: ${this.cartas[1]}`);
    },
    organizarAsDuasCartas: function(topo){
        // Precisa adicionar algum método de entrada do usuário 
        // Para ele escolher qual a carta que ficará no topo
        // e qual carta irá para o fundo do baralho
        if(topo == "2"){
            let primeiraCarta = this.cartas[1];
            let ultimaCarta = this.cartas[0];
            let vetorTemporario = [...this.cartas];
            let i = 1;

            this.cartas[0] = primeiraCarta;

            while(this.cartas.length-1 > i){
                this.cartas[i] = vetorTemporario[i+1];
                i++;
            }
            this.cartas[i] = ultimaCarta;
        }else{
            let primeiraCarta = this.cartas[0];
            let ultimaCarta = this.cartas[1];
            let vetorTemporario = [...this.cartas];
            let i = 1;

            this.cartas[0] = primeiraCarta;

            while(this.cartas.length-1 > i){
                this.cartas[i] = vetorTemporario[i+1];
                i++;
            }
            this.cartas[i] = ultimaCarta;
        }
    },
    mostrarEvento: function(){
        return this.cartas[0].id;
    }
}

export const ciclo2 = {


    embaralhar: function(){

    },
    mostrarTodasAsCartas: function(){

    },
    mostrarAsDuasProximasCartas: function(){

    },
    organizarAsDuasCartas: function(){
        
    }
}

export const ciclo3 = {


    embaralhar: function(){

    },
    mostrarTodasAsCartas: function(){

    },
    mostrarAsDuasProximasCartas: function(){

    },
    organizarAsDuasCartas: function(){
        
    }
}