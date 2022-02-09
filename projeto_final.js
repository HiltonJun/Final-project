const prompt = require('prompt-sync')();

let horario = 0;
let usuario = '';
let resposta = 'sim';
let escolha = '';
const tempo = ['manhã','tarde','noite'];
const finais = ['final1','final2','final3','final4','finalBom']

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
}

function simnao(){
    do{
        console.log();
        resposta = prompt(`Sim ou não? `).toLowerCase().trim();        
        if (resposta != "sim" && resposta != "nao"){
            console.log(`\nResposta inválida.`);
        }
    }while (resposta != "sim" && resposta != "nao");
}

const pet = {
    nome: 'pet',
    energia: 2,
    saude: 2,
    saciedade: 2,
    idade: 1,
    peso: 1,
    humor: 2,
    

    dormir: function(){
        this.energia++;
        this.idade++ ;
        this.saciedade--;
        this.peso+= 0.5;
        console.log('ZZZzzzz...');
        if(horario == 1){
            this.energia+=2;
        }else if(horario == 2){
            this.energia+=1;
        }
        horario = 0;
    },

    aviso: function(){
        if(this.energia <= 0){
            console.log(`\n${this.nome} está muito cansado.`);
            this.saude-=0.5;
            this.ssaciedade-=0.5;
        }else if (this.energia > 3){
            console.log(`\n${this.nome} está enérgico.`);
        }
        if(this.saude <= 0){
            console.log(`\n${this.nome} está doente.`);
        }else if (this.saude > 3){
            console.log(`\n${this.nome} está saudável.`);
        }
        if(this.saciedade <= 0){
            console.log(`\n${this.nome} está com fome.`);
            this.saude-=0.5;
        }else if (this.saciedade > 3){
            console.log(`\n${this.nome} está cheio.`);
        }
        if(this.humor <= 0){
            console.log(`\n${this.nome} está entediado.`);
            this.saude-=0.5;
        }else if (this.humor > 2){
            console.log(`\n${this.nome} está animado.`);
        }
        if(this.peso > 5){
            console.log(`\n${this.nome} está engordando.`);
        }  
    },

    medicar: function(){
        this.saude = 2;
        console.log(`\n${this.nome} está curado :)`);
        this.humor--;
        horario++;
              
    },
    
    brincar: function(){
        console.log(`Vamos brincar de Jokenpô`)
        //definição das variáveis
        let player = -1;
        let placar = [0,0]; //player = placar[0]; Pet = placar[1]
        const options = ['pedra', 'papel', 'tesoura'];
          
        prompt(`Pressione Enter para continuar.`);
        console.clear();
                
        //escolha e validação do player
        while (true){
            player = prompt(`Escolha (pedra, papel ou tesoura): `).toLowerCase().trim();
            if(options.indexOf(player) == -1){
                console.log(`Resposta inválida!`);
            }else{
                break;
            }
        }
        console.log();  

        //buscando o indice do player no array e atribuindo o valor        
        let playerIndex = options.indexOf(player);
        player = options[playerIndex];

        //escolha do pet
        let petIndex = Math.floor(Math.random()*options.length);
        let pet = options[petIndex];

        //calculo do resultado
        console.log(`Você escolheu "${player}", o ${this.nome} escolheu "${pet}".`);
        console.log();
          
        if(player == "pedra" && pet == "papel" || player == "papel" && pet == "tesoura" || player == "tesoura" && pet == "pedra"){
            placar[1]++
            console.log(`${this.nome} ganhou o jogo por ${placar[1]} a ${placar[0]}`);
        }else if(player == "pedra" && pet == "tesoura" || player == "papel" && pet == "pedra" || player == "tesoura" && pet == "papel"){
            placar[0]++
            console.log(`Parabéns, você ganhou o jogo por ${placar[0]} a ${placar[1]}`);
        }else{
            console.log(`O jogo terminou empatado!`);
        }           
        
        console.log(`Isso foi bastante divertido!`);
        console.log();  
        prompt(`Pressione Enter para sair.`);              
        console.clear();        
        
        this.humor++;
        this.energia--;
        this.saciedade--;
        horario++;
        
    },

    exercitar: function(){
        this.peso--;
        this.energia-=2;
        this.saciedade--;
        horario++;
        console.log(`${this.nome} cansou.`)
    },
    
    alimentar: function(x){
        do{
            console.log(`\nEscolha entre as opções: \n1) Maçã  2) Hambúrguer  3) Água`);
            x = +prompt(`\nQual o número da sua escolha? `);
        
            if (isNaN(x) || x > 3 || x < 1 || x % 1 != 0){
                console.log();
                console.clear();
                console.log('\nOpção inválida.');
            }else{
                console.log(`\nVocê alimentou ${this.nome}.`);
            }
        }while (isNaN(x) || x > 3 || x < 1 || x % 1 != 0);

        if (x == 1){
            this.saciedade++;
            this.saude++;
            this.peso++;
            this.energia+=2;
        }else if (x == 2){
            this.saciedade += 2;
            this.humor++;
            this.peso+= 2
            this.saude--;
        }else{
            this.humor--;
            this.saude--;
        }
        horario++;
    },
};

console.clear();
console.log(`Olá! seja bem vindo ao pet digital`);
usuario = prompt('\nPor favor informe o seu nome: ');
console.log(`\n${usuario}, o seu vizinho bate na sua porta e lhe informa que terá que viajar por um final de semana. \nEle implora que você tome conta de seu pet, dizendo que é uma tarefa muito fácil, porém de muita importância.`);

console.log('\nVocê aceita cuidar do pet?');
simnao();

if (resposta == 'nao'){
    console.log(`\nO seu vizinho acena com a cabeça e deixa a sua casa entristecido. Talvez você tenha se livrado de um grande problema, ou talvez tenha perdido a oportunidade de fazer uma grande amizade.`);
}else{
    console.log();
    pet.nome = prompt('\nDê um apelido para o pet: ');
    console.log(`\nPara cuidar de ${pet.nome} você precisa escolher atividades para fazer com ele(a).\nCada atividade vai afetar seus atributos e consumir tempo. Você deve garantir que ${pet.nome} esteja bem ao final de 5 dias.`)
    prompt(`\nPressione enter para continuar.`)
}

while (resposta == "sim") {

    for(pet.idade = 1; pet.idade < 6;){
        sleep(2000);
        console.clear();
        pet.aviso();
        console.log(`Dia ${pet.idade}. ${tempo[Math.floor(horario)]}.`);
        
        escolha = prompt(`\nQual atividade você deseja fazer? Alimentar, medicar, exercitar, dormir ou brincar? `).toLowerCase().trim();
        console.log();
        if (escolha == 'dormir'){
            pet.dormir();
        }else if (escolha == 'alimentar'){
            pet.alimentar();
        }else if (escolha == 'medicar'){
            pet.medicar();
        }else if (escolha == 'brincar'){
            pet.brincar();
        }else if (escolha == 'exercitar'){
            pet.exercitar();
        }
        if(horario > 2){
            horario = 0;
            pet.idade++;
        }
        
    }
    console.clear();
    if (pet.saude <= 0){
        console.log(finais[0]);
    }else if(pet.saciedade <= 0){
        console.log(finais[1]);
    }else if(pet.peso > 5){
        console.log(finais[2]);
    }else if (pet.humor <= 0){
        console.log(finais[3]);
    }else{
        console.log(finais[4]);
    }
    
    console.log("\nQuer jogar novamente?");
    simnao();

    pet.energia = 2;
    pet.saciedade = 2;
    pet.saude = 2;
    pet.idade = 1;
    pet.humor = 2;
    pet.peso = 1;
}