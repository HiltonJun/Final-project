const prompt = require('prompt-sync')();

let horario = 0;
let usuario = '';
let resposta = 'sim';
let escolha = '';
const tempo = ['manhã','tarde','noite'];

const pet = {
    nome: 'pet',
    energia: 1,
    saude: 1,
    saciedade: 1,
    idade: 1,
    peso: 1,
    humor: 1,
    
    dormir: function(){
        this.energia++;
        this.idade++ ;
        this.saciedade--;
        this.peso+= 0.5;    
        if(horario == 1){
            this.energia+=2;
        }else if(horario == 2){
            this.energia+=1;
        }
        horario = 0;                
    },

    aviso: function(){
        if(this.energia <= 0){
            console.log(`Seu Pet está muito cansado.`);
            this.saude--;
        }
        if(this.saude <= 0){
            console.log(`Seu Pet está doente.`);
        }
        if(this.saciedade <= 0){
            console.log(`Seu pet está com fome.`);
            this.saude--;
        }
        if(this.humor <= 0){
            console.log(`Seu pet está entediado.`);
            this.saude--;
        }    
    },

    medicar: function(){
        this.saude++;
        conmouse.log(`Seu pet está curado :)`);
        this.humor--;
        horario+=0.5;            
    },
    
    brincar: function(){
        console.log('Vamos brincar de Jokenpô')
        //definição das variáveis
        let rounds = 2;
        let player = -1;
        let placar = [0,0]; //player = placar[0]; Pet = placar[1]
        const options = ['pedra', 'papel', 'tesoura'];
        console.clear();    

        prompt(`Prescione Enter para continuar.`);
        console.clear();

        //laço rounds      
        for(let i = 0; i < rounds; i++){        
            //escolha e validação do player
            while (true){
                player = prompt(`Round ${i+1}. Escolha (pedra, papel ou tesoura): `).toLowerCase().trim();
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
                console.log(`O ${this.nome} ganhou este round. O jogo está em ${placar[1]} a ${placar[0]} para o IPet`);
            }else if(player == "pedra" && pet == "tesoura" || player == "papel" && pet == "pedra" || player == "tesoura" && pet == "papel"){
                placar[0]++
                console.log(`Parabéns, você ganhou este round. O jogo está em ${placar[0]} a ${placar[1]} para você`);
            }else{
                console.log(`Vocês empataram. Ninguém pontuou neste round. Continua ${placar[0]} a ${placar[1]}`);
            }
            console.log();  

            prompt(`Prescione Enter para continuar.`);              
            console.clear();
        }

        //exibindo o placar final
        console.log(`
        E o jogo termina em:
        ${usuario}: ${placar[0]}
        ${this.nome}: ${placar[1]}
        
        `);
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
    },
    
    alimentar: function(x){
        do{
            console.clear();
            console.log(`Escolha entre as opções:

            1) Maçã  2) Hambúrguer  3) Água
    
            `);
            x = +prompt(`Qual o número da sua escolha? `);
        
            if (isNaN(x) && (x > 3 || x < 0 && x % 1 != 0)){
                console.log();
                console.log('Opção inválida.');
                setTimeout(() => {  console.log(); }, 2000);
            }
        }while (isNaN(x) && (x > 3 || x < 0 && x % 1 != 0));

        if (x == 1){
            this.fome++;
            this.saude++;
        }else if (x == 2){
            this.fome += 2;
            this.humor++;
            this.peso++
            this.saude--;
        }else{
            this.humor--;
            this.saude--;
        }
        horario += 0.5;
    },
};

usuario = prompt('Olá! Por favor informe o seu nome: ');
console.log(`
    ${usuario}, o seu vizinho bate na sua porta e lhe informa que terá que viajar por uma semana.
Ele implora que você tome conta de seu pet, dizendo que é uma tarefa muito fácil, porém de muita
importância.
`);
while(true){
    resposta = prompt('Você aceita cuidar do pet? Sim ou não? ').toLowerCase().trim();
    
    if (resposta != "sim" && resposta != "nao"){
        console.log("Resposta inválida.");
    }else if (resposta == 'nao'){
        console.log(`   O seu vizinho acena com a cabeça e deixa a sua casa entristecido. Talvez 
        você tenha se livrado de um grande problema, ou talvez tenha perdido a oportunidade de fazer uma
        grande amizade.`)
        break;
    }else{
        console.log();
        pet.nome = prompt('Dê um apelido para o pet: ');
        console.log(`
            Para cuidar de ${pet.nome} você precisa escolher atividades para fazer com ele(a).
        Cada atividade vai afetar seus atributos e consumir tempo. Você deve garantir que
        ${pet.nome} esteja bem ao final de 7 dias.`)
        break;
    }

}

while (resposta == "sim") {

    for(pet.idade = 1; pet.idade < 8;){
        pet.aviso();
        console.log(`Dia ${pet.idade}. ${tempo[Math.floor(horario)]}.`);
        console.log();
        escolha = prompt(`Qual atividade você deseja fazer? Alimentar, medicar, exercitar, dormir ou brincar? `).toLowerCase().trim();
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
            horario = 0
        }
        
    }
    while (true){
        resposta = prompt("Quer jogar novamente? ")

        if (resposta != "sim" && resposta != "nao"){
            console.log("Resposta inválida.");
        }else{
            break
        }
    }    
}