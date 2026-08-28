import { producaoRecurso } from "../configuracoes/producaoRecursos.js";

export const tabuleiroRecursos = {

    alimento: {
        nivel: 0,
        producao: 0,
        quantidade: 0
    },
    energia: {
        nivel: 0,
        producao: 0,
        quantidade: 0
    },
    material: {
        nivel: 0,
        producao: 0,
        quantidade: 0
    },
    credito: {
        nivel: 0,
        producao: 0,
        quantidade: 0
    },
    ciencia: {
        nivel: 0,
        producao: 0,
        quantidade: 0
    },

    montar: function(recursos){
        this.alimento.nivel = recursos.recursos.nivelAlimento;
        this.energia.nivel = recursos.recursos.nivelEnergia;
        this.material.nivel = recursos.recursos.nivelMaterial;
        this.credito.nivel = recursos.recursos.nivelCredito;
        this.ciencia.nivel = recursos.recursos.nivelCiencia;
    
        this.alimento.producao = producaoRecurso(this.alimento.nivel);
        this.energia.producao = producaoRecurso(this.energia.nivel);
        this.material.producao = producaoRecurso(this.material.nivel);
        this.credito.producao = producaoRecurso(this.credito.nivel);
        this.ciencia.producao = producaoRecurso(this.ciencia.nivel);
        

    }
}