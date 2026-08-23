export const casas = [
    {
        casa: "Belitan",
        habilidadeCasa: {},
        focoPreferido: {},
        configuracoes: {

            "C2-A": {
                tecnologiaInicial: "Alvejar",
                agendaInicial: "C2-A",

                tropas: {
                    inativas: 8,
                    prontas: 2,
                    home: 2,
                    adjacentes: 2
                },

                habilidadeAgenda: "aumentarNivelEnergiaEm1",

                recursos: {
                    alimento: 4,
                    energia: 4,
                    material: 2,
                    credito: 3,
                    ciencia: 2,

                    nivelAlimento: 2,
                    nivelEnergia: 3,
                    nivelMaterial: 2,
                    nivelCredito: 0,
                    nivelCiencia: 0
                },

                populacaoHome: 2,
                populacaoAdjacente: 2,

                guildasHome: ["alimento"],
                guildasAdjacente: ["energia", "material"],

                trilhaAvancada: {
                    trilhaSociedade: 0,
                    trilhaGovernanca: 0,
                    trilhaEconomia: 0
                }
            },

            "C2-B": {
                tecnologiaInicial: "Refinaria",
                agendaInicial: "C2-B",

                tropas: {
                    inativas: 9,
                    prontas: 2,
                    home: 1,
                    adjacentes: 2
                },

                habilidadeAgenda: "aumentarNivelCreditosEAlimentosEm1",

                

                recursos: {
                    alimento: 5,
                    energia: 3,
                    material: 3,
                    credito: 5,
                    ciencia: 5,

                    nivelAlimento: 3,
                    nivelEnergia: 2,
                    nivelMaterial: 2,
                    nivelCredito: 1,
                    nivelCiencia: 0
                },

                populacaoHome: 2,
                populacaoAdjacente: 2,

                guildasHome: ["alimento"],
                guildasAdjacente: ["energia", "material"],

                trilhaAvancada: {
                    trilhaSociedade: 1,
                    trilhaGovernanca: 0,
                    trilhaEconomia: 0
                }
            }
        }
    }
];