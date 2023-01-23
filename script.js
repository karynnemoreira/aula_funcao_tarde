//Revisão de operadores, a ordem dos operadores alteram o resultado.

// let a = 2; 
// let b = 1;

// //a =-b //errado
// a -=b //certo

//  console.log(a);

//  // += -= *= /=

// Propriedades de string 
//string pode ser chamada com "" , '' ou ``


//Bônus 1
// let frase = "Gatos são os melhores amigos dos humanos"

//  frase = frase.replace ("Gatos", "Cachorros");
// console.log(frase)

//replace: Troca um pedaço da string por outra coisa.

//Revisão If else

//Bônus 2
//Só posso usar os caracteres de $ ou _ para nome de variáveis.
// let nome = "Eduardo"
// let _nome = "Felipe"
// let $nome = "júlia"

// if(_nome.length < 6){
// console.log(`O nome do ${nome} tem MENOS de 6 letras`)
// }else{
// console.log(`O nome do ${nome} tem MAIS de 6 letras`)
// }

//Length: Conta cada unidade de código na string.

//Bônus 3
// Verificar se o nome começa com a letra L

// let nome = "Jefferson"
// if(nome.substring (0, 1) === "e"){
// console.log("Seu nome começa com a letra L")
// } else {
//     console.log(` Olá ${nome}, seu nome não começa com a letra L`)
// }

//substring: percorre as unidades de uma string (inicia, para)

//Matéria nova

//Função com parâmetro


// function mostrar (nome){
//     console.log(`Meu nome é ${nome}`)
// }
// mostrar("Brendon")


// function mostrar (nome) {
//     console.log (`Meu nome é ${ nome}`)
// }
// mostrar(`Capivara`)

// function animal (mamifero){ //criei uma função com o nome 'animal' e um parâmetro ()
// console.log(`Eu sou o animal ${mamifero}`)
// }
// animal("Macaco")//Valor que eu quero que apareça

//---- 

// let infos = function (nome , idade, cidade)  { //parâmetro
//     console.log (nome)
//     console.log (idade)
//     console.log (cidade)
// }
// infos ("Ana", "20 anos", "São Paulo") //argumentos execultados

// () //parâmetro


// let _nome = "Karynne"
// function mostrarNome(batata){
// console.log(`meu nome é ${batata}`)
// }
// mostrarNome (_nome)

// let animais = "pato"

// function nomeDaFuncao(animal){
//     console.log(`Esse é meu bicho, o ${animal}`)
// }
// nomeDaFuncao(animais)


//Função com return
//O return finaliza uma função e retorna um valor para onde essa função foi chamada. 
//O console.log ele só exibe os valores na tela

// function soma (n1, n2){
// return n1 + n2
// }
// console.log(soma(20, 4))

// function multiplicacao (k1, k2){
//     return  k1 * k2
// }
// console.log (multiplicacao (36, 74))


// function dobro (numero){
// return numero * 2
// }
// console.log(dobro(14))


// function triplo (number){
// return number * 3
// }
// console.log(triplo (60))


// function vitamina(fruta1 , fruta2){
//     return (fruta1) +  (fruta2)
// }
// console.log (vitamina ("banana ", "maçã"))

// // console.log (vitamina (`banana\t` ,"maçã" ))

//Exercício

//Criei uma função que exibiu "Boa tarde" no console
// function oi (){
//     console.log(`Boa tarde`)
// }
// oi() //ativando a função


// function oi2 (nome){
//     console.log(`Boa tarde ` + nome + ` !` )
// }
// oi2(`turma`)

function oi3 (nome, profissao, cidade){
    console.log(`${nome} , ${profissao} e mora em ${cidade}`)
}
oi3("Brendon" , "facilitador front-end" , "Rio de Janeiro")
