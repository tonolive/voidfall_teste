

export const tabuleiroJogador = {
    casa: "",
    tropasInativas: 0,
    tropasAtivas: 0,
    agendas: [],
    tecnologias: [],
    marcadorGloria: 2,
    marcadorReivindicacao: 0,
    marcadorRecompensa: 0,
    focoPreferido: [],
    habilidadeCasa: [],
    trilhaSociedade: [],
    trilhaGovernanca: [],
    trilhaEconomia: [],

    montar: function(casas, configuracaoCasa){
        this.casa = casas.casa;
        this.tropasInativas = casas.tropas[configuracaoCasa].inativas;
        this.tropasAtivas = casas.tropas[configuracaoCasa].prontas;
        this.agendas.push(casas.agendaInicial[configuracaoCasa]);
        this.tecnologias.push(casas.tecnologiaInicial);
        
    }
}