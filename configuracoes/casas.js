export const casas = [
    {
        casa: "Belitan",
        tecnologiaInicial: {
            "C2-A": "Alvejar",
            "C2-B": "Refinaria"
        },
        agendaInicial: {
            "C2-A": "C2-A",
            "C2-B": "C2-B"
        },
        tropas: {
            "C2-A": {
                inativas: 8,
                prontas: 2,
                home: 2,
                adjacentes: 2
            },
            "C2-B": {
                inativas: 9,
                prontas: 2,
                home: 1,
                adjacentes: 2
            }

        },
        habilidadesAgenda: {
            "C2-A": "aumentarNivelEnergiaEm1",
            "C2-B": "aumentarNivelCreditosEAlimentosEm1"
        },
        habilidadeCasa: {},
        focoPreferido: {},
        recursos: {
            "C2-A": {
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
            "C2-B": {
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
            }
        },
        populacaoHome: {
            "C2-A": 2,
            "C2-B": 2
        },
        populacaoAdjacente: {
            "C2-A": 2,
            "C2-B": 2
        },
        guildasHome: {
            "C2-A": ["alimento"],
            "C2-B": ["alimento"]
        },
        guildasAdjacente: {
            "C2-A": ["energia", "material"],
            "C2-B": ["energia", "material"]
        },
        trilhaAvancada: {
            "C2-A": {
                trilhaSociedade: 0,
                trilhaGovernanca: 0,
                trilhaEconomia: 0
            },
            "C2-B": {
                trilhaSociedade: 1,
                trilhaGovernanca: 0,
                trilhaEconomia: 0
            }
        }
    }
]