// Importações
// Importa o objeto Cores de dentro da pasta (obrigatório usar .js no final)
import { Cores } from './configuracoes/cores.js';
import {cartasDociclo1, cartasDociclo2, cartasDociclo3} from './configuracoes/cartasDosCiclos.js'
import { ciclo1, ciclo2, ciclo3 } from './objetos/ciclo.js';
import { casas } from './configuracoes/casas.js';
import { tabuleiroJogador } from './objetos/tabuleiroJogador.js';
import { tabuleiroRecursos } from './objetos/tabuleiroRecursos.js';
import { cartas } from  './objetos/cartas.js';
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

// Apresentação
console.log(`${Cores.AZUL}Bem-vindo ao Voidfall${Cores.RESET}`);
//console.log(`Esta é uma implementação teste do jogo de ${Cores.ROXO}boardgame Voidfall${Cores.RESET} e ainda esta na fase de concepção do projeto.`);

// Configurar a partida
let jogo = true;
let quantidadeDeCiclos = 0;
let quantidadeCatastrofe = 0;
const casaEscolhida = "Belitan";
const configuracaoCasa = "C2-B";

//procura a casa que o jogador escolheu para jogar
const casa = casas.find(
    casa => casa.casa === casaEscolhida
);

//monta o tabuleiro do jogador coma casa escolhida
tabuleiroJogador.montar(casa, configuracaoCasa);



//console.log(tabuleiroJogador);
//console.log(cartas);
// jogador escolhe o nível da dificuldade
// jogador escolhe a casa que deseja jogar
// jogador escolhe o mapa que deseja jogar
// jogador escolhe se quer jogar com a opção A ou B da casa
// o jogo configura todas as variáveis necessárias para iniciar a partida com as configurações que o jogador escolheu


// Abrir o primeiro Ciclo do jogo
ciclo1.montarCartas(cartasDociclo1);
//ciclo1.mostrarTodasAsCartas();
quantidadeDeCiclos = ciclo1.cartas[0].quantidadeDeCiclos;
console.log(`${Cores.ROXO}A quantidade de Rodadas do ciclo 1 é ${Cores.FUNDO_AZUL}${quantidadeDeCiclos}${Cores.RESET} e o Evento do ciclo 1: ${ciclo1.mostrarEvento()}`);

//Enquanto quantidadeDeciclos > 0 {
// Jogador escolhe a carta que deseja jogar
// jogador escolhe uma das 9 opções
// chamar a função correspondente da opção selecionada
// }




//quantidadeDeCiclos = ciclo2.cartas[0].quantidadeDeCiclos;
//Enquanto quantidadeDeciclos > 0 {
// Jogador escolhe a carta que deseja jogar
// jogador escolhe uma das 9 opções
// chamar a função correspondente da opção selecionada
// }

//quantidadeDeCiclos = ciclo3.cartas[0].quantidadeDeCiclos;
//Enquanto quantidadeDeciclos > 0 {
// Jogador escolhe a carta que deseja jogar
// jogador escolhe uma das 9 opções
// chamar a função correspondente da opção selecionada
// }