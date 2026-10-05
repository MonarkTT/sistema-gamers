const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarmenu() {
    console.log("\n=======================");
    console.log("Bem-vindo ao sistema de cadastro de jogadores!");
    console.log("---------- SISTEMA DE GAMERS ----------");
    console.log("Digite 1 para cadastrar um jogador");
    console.log("Digite 2 para deletar um jogador");
    console.log("Digite 3 para mostrar o time atual");
    console.log("Digite 4 para calcular a média da equipe");
    console.log("Digite 5 para atualizar a pontuação de um jogador");
    console.log("Digite 6 para atualizar a função de um jogador");
    console.log("Digite 7 para buscar um jogador pelo nome");
    console.log("Digite 8 para atualizar o nome de um jogador");
    console.log("Digite 9 para sair do sistema");
}
    

function cadastrajogador() {
    
        let nomejogador = prompt("Digite o nome do jogador: ");
        let funcaojogador = prompt("Digite a função no time: ");
        let pontuacaojogador = Number(prompt("Digite a pontuação do jogador: "));
    
        if (isNaN(pontuacaojogador)) {
            console.log("Pontuação inválida! O jogador não foi cadastrado.");
            return;
        } else {
            let recruta = {
                nome: nomejogador,
                funcao: funcaojogador,
                pontuacao: pontuacaojogador
            };
            time.push(recruta);
            console.log("jogador " + nomejogador + " foi cadastrado com sucesso!");
            console.log("======================="); 
            }       
}

function deletajogador() {
if (time.length === 0) {
            console.log("Não há jogadores cadastrados para deletar!");
            return;
        }

        let nomedeletado = prompt("Digite o nome do jogador que deseja deletar: ");
        let indexdeletado = -1;

        for (let i = 0; i < time.length; i++) {
            
            if (time[i].nome === nomedeletado) {
                indexdeletado = i;
                if (indexdeletado !== -1) {
                    time.splice(indexdeletado, 1);
                    console.log("Jogador " + nomedeletado + " foi deletado com sucesso!");
                    console.log("=======================");
                }
                break;
            }
        }

        if (indexdeletado === -1) {
            console.log("Jogador não encontrado!");
            return;
        }

        time.splice(indexdeletado, 1);
        console.log("jogador " + nomedeletado + "foi deletado com sucesso!");
        console.log("=======================");
}

function mostrarequipe() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados!");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + "| Função: " + jogador.funcao + "| Pontuação: " + jogador.pontuacao);
    }
}
     
function calculamedia() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados para calcular a média!");
        return;
    }

    let totalpontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalpontos = totalpontos + time[i].pontuacao;
    }

    let media = totalpontos / time.length;

    console.log("A média da equipe é: " + media.toFixed(2));
}

function atualizarpontuacao() {
    const nomedesejado = prompt("Digite o nome do jogador que deseja atualizar a pontuação: ");
    let encontrou = false;

    const novapontuacao = Number(prompt("Quantos pontos ele ganhou nessa partida? "));

    if (isNaN(novapontuacao)) {
        console.log("Pontuação inválida! A pontuação não foi atualizada.");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogadoratual = time[i];

        if (jogadoratual.nome === nomedesejado) {
            jogadoratual.pontuacao += novapontuacao;
            console.log("Pontuação do jogador " + jogadoratual.nome + " atualizada para: " + jogadoratual.pontuacao);
            encontrou = true;
            break;
        }
    }
    if (!encontrou) {
        console.log("Jogador não encontrado!");
    }
}

function atualizarfuncao() {
    const nomedesejado = prompt("Digite o nome do jogador que deseja atualizar a função: ");
    let encontrou = false;

    const novafuncao = prompt("Digite a nova função do jogador: ");

    for (let i = 0; i < time.length; i++) {
        let jogadoratual = time[i];

        if (jogadoratual.nome === nomedesejado) {
            jogadoratual.funcao = novafuncao;
            console.log("Função do jogador " + jogadoratual.nome + " atualizada para: " + jogadoratual.funcao);
            encontrou = true;
            break;
        }
    }
    if (!encontrou) {
        console.log("Jogador não encontrado!");
    }
}

function buscarjogador (nomedesejado) {
    
    console.log("Digite o nome do jogador que deseja buscar: ");
    console.log("buscando por: " + nomedesejado + "...");
    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
    let jogadoratual = time [i];
        if (jogadoratual.nome === nomedesejado) {
            console.log("Jogador encontrado!");
            console.log("Nome: " + jogadoratual.nome + "| Função: " + jogadoratual.funcao + "| Pontuação: " + jogadoratual.pontuacao);
            encontrou = true;
            break;
        }
    }
    if (!encontrou) {
        console.log("Jogador não encontrado!");
    }
}

function atualizarnome() {
    const nomedesejado = prompt("Digite o nome do jogador que deseja atualizar o nome: ");
    let encontrou = false;

    const novonome = prompt("Digite o novo nome do jogador: ");

    for (let i = 0; i < time.length; i++) {
        let jogadoratual = time [i];

        if (jogadoratual.nome === nomedesejado) {
            jogadoratual.nome = novonome;
            console.log("Nome do jogador atualizado para: " + jogadoratual.nome);
            encontrou = true;
            break;
        }
    }
    if (!encontrou) {
        console.log("Jogador não encontrado!");
    }
}

while (continuar === true) {
    mostrarmenu();
    let opcao = prompt("Digite sua opçao: ");

    if (opcao === "1") {
        cadastrajogador();
    } else if(opcao === "2") {
        deletajogador();
    } else if (opcao === "3") {
        mostrarequipe();
    } else if (opcao === "4") {
        calculamedia();
    } else if (opcao === "5") {
        atualizarpontuacao();
    } else if (opcao === "6") {
        atualizarfuncao();
    } else if (opcao === "7") {
        let nomedesejado = prompt("Digite o nome do jogador que deseja buscar: ");
        buscarjogador(nomedesejado);
    } else if (opcao === "8") {
        atualizarnome();
    } else if (opcao === "9") {
        continuar = false;
        console.log("obrigado por utilizar o GamersTeam Manager, volte sempre!");
        break;
    } else {
        console.log("Opção inválida, tente novamente!");
    }
} 