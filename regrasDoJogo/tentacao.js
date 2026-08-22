async function iniciarJogo() {
    // Cria a interface de leitura
    const rl = readline.createInterface({ input, output });

    ciclo1.mostrarAsDuasProximasCartas();

    // Faz a pergunta e aguarda a resposta do usuário
    const acao = await rl.question('O que você deseja fazer? (1- A primeira carta vai para o topo do baralho, 2- A segunda carta vai para o topo do baralho): ');

    //console.log(`Você escolheu a opção: ${acao}`);

    //console.log(typeof acao);
    ciclo1.organizarAsDuasCartas(acao);
    // Fecha a interface após terminar a leitura
    rl.close();
    ciclo1.mostrarTodasAsCartas();
}

iniciarJogo();