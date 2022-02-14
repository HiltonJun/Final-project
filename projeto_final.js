//Importação do prompt
import promptSync from 'prompt-sync';
const prompt = promptSync();
//Definição de variáveis
let horario = 0;
let usuario = '';
let resposta = 'sim';
let escolha = '';
const tempo = ['manhã','tarde','noite'];
//Importação de modulos da animação
import pedra from './modules/pedra.mjs';
import papel from './modules/papel.mjs';
import tesoura from './modules/tesoura.mjs';
import burger from './modules/burger.mjs';
import dormindo from './modules/dormindo.mjs';
import exercicio from './modules/exercicio.mjs';
import maca from './modules/maca.mjs';
import medicamento from './modules/medicamento.mjs';
import pao from './modules/pao.mjs';
import triste from './modules/triste.mjs';
import feliz from './modules/feliz.mjs';
import morto from './modules/morto.mjs';
import faminto from './modules/faminto.mjs';
import gordo from './modules/gordo.mjs';
//Função para adicionar espera
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
}
//Função para pergunta de sim ou não
function simnao(){
    do{
        console.log();
        resposta = prompt(`Sim ou não? `).toLowerCase().trim();        
        if (resposta != "sim" && resposta != "nao"){
            console.log(`\nResposta inválida.`);
        }
    }while (resposta != "sim" && resposta != "nao");
}
//Objeto pet com seus estatus e métodos
const pet = {
    nome: 'pet',
    energia: 2,
    saude: 2,
    saciedade: 2,
    dias: 1,
    peso: 1,
    humor: 2,
    
//Método da ação de por para dormir
    dormir: function(){
        this.energia++;
        this.dias++ ;
        this.saciedade--;
        this.peso+= 0.5;
        dormindo();
        if(horario == 1){
            this.energia+=2;
        }else if(horario == 2){
            this.energia+=1;
        }
        horario = 0;
    },
//Método de avisos de estatus críticos
    aviso: function(){
        if(this.energia <= 0){
            console.log(`\n${this.nome} está muito cansado.`);
            this.saude-=0.5;
            this.saciedade-=0.5;
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
            console.log(`\n${this.nome} está chateado.`);
            this.saude-=0.5;
        }else if (this.humor > 2){
            console.log(`\n${this.nome} está animado.`);
        }
        if(this.peso > 5){
            console.log(`\n${this.nome} está engordando.`);
        }  
    },
    // método para medicar
    medicar: function(){
        this.saude = 2;
        medicamento();
        console.log(`\n${this.nome} está curado :)`);
        this.humor--;
        horario++;
              
    },
    // método com o jogo brincar - jokenpô
    brincar: function(){
        console.log(`\nVamos brincar de Jokenpô\n`);
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
        if (player == "pedra"){
            console.log(`Você escolheu Pedra.\n`);
            pedra();
        }else if (player == "papel"){
            console.log(`Você escolheu Papel.\n`);
            papel();
        }else if (player == "tesoura"){
            console.log(`Você escolheu Tesoura.\n`);
            tesoura();
        }
        sleep(3000);
        console.clear();
        if (pet == "pedra"){
            console.log(`${this.nome} escolheu Pedra.\n`);
            pedra();
        }else if (pet == "papel"){
            console.log(`${this.nome} escolheu Papel.\n`);
            papel();
        }else if (pet == "tesoura"){
            console.log(`${this.nome} escolheu Tesoura.\n`);
            tesoura();
        }
        sleep(3000);
        console.clear();
        console.log();
        //Resultado do jogo
        if(player == "pedra" && pet == "papel" || player == "papel" && pet == "tesoura" || player == "tesoura" && pet == "pedra"){
            placar[1]++;
            console.log(`${this.nome} ganhou o jogo por ${placar[1]} a ${placar[0]}`);
            feliz();
        }else if(player == "pedra" && pet == "tesoura" || player == "papel" && pet == "pedra" || player == "tesoura" && pet == "papel"){
            placar[0]++;
            console.log(`Parabéns, você ganhou o jogo por ${placar[0]} a ${placar[1]}`);
            triste();
        }else{
            console.log(`O jogo terminou empatado!`);
        }           
        
        console.log(`\nIsso foi bastante divertido!\n`);
        console.log();  
        prompt(`Pressione Enter para sair.`);              
        console.clear();        
        
        this.humor++;
        this.energia--;
        this.saciedade--;
        this.peso--;
        horario++;
        
    },
//Método para exercitar o pet
    exercitar: function(){
        this.peso-=2;
        this.energia-=2;
        this.saciedade--;
        this.humor--;
        horario++;
        exercicio();
        console.log(`${this.nome} cansou.`);
    },
//Método para alimentar o pet    
    alimentar: function(x){
        do{
            console.log(`\nEscolha entre as opções: \n\n1) Maçã  2) Hambúrguer  3) Pão\n`);
            x = +prompt(`Qual o número da sua escolha? `);
        
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
            maca();
        }else if (x == 2){
            this.saciedade += 2;
            this.humor++;
            this.peso+= 2
            this.saude--;
            burger();
        }else{
            this.humor--;
            this.saude--;
            pao();
        }
        horario++;
    },
};
//Início do jogo com frase introdutória
console.clear();
console.log(`Olá! seja bem vindo ao pet digital\n`);
usuario = prompt('Por favor informe o seu nome: ');
console.log(`\n${usuario}, o seu vizinho bate na sua porta e lhe informa que terá que viajar por cinco dias. \nEle implora que você tome conta de seu pet, dizendo que é uma tarefa muito fácil, porém de muita importância.`);
//Primeira escolha com final opcional
console.log('\nVocê aceita cuidar do pet?');
simnao();

if (resposta == 'nao'){
    console.log(`\nO seu vizinho acena com a cabeça e deixa a sua casa entristecido. Talvez você tenha se livrado de um grande problema,\nou talvez tenha perdido a oportunidade de fazer uma grande amizade.\n`);
}else{
    console.log();
    pet.nome = prompt('Dê um apelido para o pet: ');
    console.log(`\nPara cuidar de ${pet.nome} você precisa escolher atividades para fazer com ele(a).\nCada atividade vai afetar seus atributos e consumir tempo. Você deve garantir que ${pet.nome} esteja bem ao final de 5 dias.\n`)
    prompt(`Pressione enter para continuar.`)
}
//Lista de finais
const finais = [
    `   Você acorda na manhã do sexto dia e vai checar como ${pet.nome} está. Você encontra ${pet.nome} na sua caminha mas ele não está se
    mexendo! Seu vizinho chega no pior momento como se pressentisse o ocorrido e ao checar ${pet.nome}, te escorraça da casa te chamando
    de assassino!`,
    `    Você recebe seu vizinho de volta a sua casa na manhã do sexto dia e percebe que ${pet.nome} está sem comida, a algum tempo.
    ${pet.nome} vem correndo encontrar o dono com cara de desespero! Como você pode ter esquecido de algo tão básico?`,
    `    Seu vizinho te acorda na manhã do sexto dia e diz com desdém que a sua preguiça deve ter passado para ${pet.nome}. Apontando
    para ${pet.nome} ele mostra como ele engordou, está uma bola!`,
    `    Você acorda na mãnha seguinte e ${pet.nome} está muito triste, ele ficou muito tempo longe do seu dono e não brincou o suficiente
    para ficar com um nivel de humor bom, seu vizinho ao chegar fica chateado por você não cuidar bem de ${pet.nome} e fica furioso com você!`,
    `    Parabéns! chegamos ao final dessa aventura com sucesso. ${pet.nome} está ótimo e agora você tem um novo amigo.`];

//Laço para jogar novamente    
while (resposta == "sim") {
    //Laço para contagem do tempo
    for(pet.dias = 1; pet.dias < 6;){
        sleep(2000);
        console.clear();
        pet.aviso();
        console.log(`\nDia ${pet.dias}. ${tempo[Math.floor(horario)]}.\n`);
        
        do{
            escolha = prompt(`Qual atividade você deseja fazer? Alimentar, medicar, exercitar, dormir ou brincar? `).toLowerCase().trim();
            if(escolha != 'alimentar' && escolha != 'medicar' && escolha != 'exercitar' && escolha != 'dormir' && escolha != 'brincar'){
                console.log(`\nResposta inválida!\n`);
            }

        }while(escolha != 'alimentar' && escolha != 'medicar' && escolha != 'exercitar' && escolha != 'dormir' && escolha != 'brincar');
        
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
            pet.dias++;
        }
        
    }
//Avaliação dos estatus do pet para definir qual foi o final atingido   
    console.clear();
    if (pet.saude <= 0){
        morto();
        console.log(finais[0]);
    }else if(pet.saciedade <= 0){
        faminto();
        console.log(finais[1]);
    }else if(pet.peso > 5){
        gordo();
        console.log(finais[2]);
    }else if (pet.humor <= 0){
        triste();
        console.log(finais[3]);
    }else{
        feliz();
        console.log(finais[4]);
    }
//Pergunta para jogar novamente    
    console.log("\nQuer jogar novamente?");
    simnao();
//Reset de valores das chaves de estatus do pet
    pet.energia = 2;
    pet.saciedade = 2;
    pet.saude = 2;
    pet.dias = 1;
    pet.humor = 2;
    pet.peso = 1;
};