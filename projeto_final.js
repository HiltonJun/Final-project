const prompt = require('prompt-sync')();

let playagain = 'nao';
const perguntas = [`pergunta 1`, `pergunta 2`, `pergunta 3`];
const finais = [`final 1`, `final 2`, `final 3`];
let check = true;
//laço playagain
do{
    const progresso = [];

    const player = {
        name = 'Personagem',
        xp = 0,
        level = 1,
        life = 3,
        time = ['manhã', 'tarde', 'noite'],
        upxp: upxp = (x) => player.xp += x,
        downlife: downlife = (x) => player.life -= x,
        levelup: levelup = () => player.life += 1,
    } 

    console.clear();
    console.log('introdução');
    player.nome = prompt('Qual é o seu nome? ');

    while (check){ 
        let resposta = prompt(perguntas[0]);
        if (resposta == 'sim'){
            while(check){
                resposta = prompt(perguntas[1]);
                if (resposta == 'sim'{
                    while(check){
                    resposta = prompt(perguntas[3]);
                        
                    }
                }else if (resposta =='nao'){
                    resposta = prompt(perguntas[4]);
                }else{
                    console.log ('Resposta inválida');
                }
            } 
        }else if(resposta == 'nao'){
            resposta = prompt(perguntas[2])
        }else{
            console.log ('Resposta inválida');
        }
    }






    while(true){
        playagain = prompt(`Deseja jogar novamente? Responda com "sim" ou "nao": `).toLowerCase().trim();
        
        if (playagain != "sim" && playagain != "nao"){
            console.log(`Resposta inválida.`);

        }else{
            break;
        }        
    }

}while(playagain == 'sim')