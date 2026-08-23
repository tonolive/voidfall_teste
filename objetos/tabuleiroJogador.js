

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
        this.tropasInativas = casas["configuracoes"][configuracaoCasa]["tropas"].inativas;
        this.tropasAtivas = casas["configuracoes"][configuracaoCasa]["tropas"].prontas;
        this.agendas.push(casas["configuracoes"][configuracaoCasa]["agendaInicial"]);
        this.tecnologias.push(casas["configuracoes"][configuracaoCasa]["tecnologiaInicial"]);
        
    }
}