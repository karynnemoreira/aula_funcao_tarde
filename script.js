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

// function oi3 (nome, profissao, cidade){
//     console.log(`${nome} , ${profissao} e mora em ${cidade}`)
// }
// oi3("Brendon" , "facilitador front-end" , "Rio de Janeiro")


// -- FUNÇÃO COM PARÂMETRO 

//estrura básica de uma função com parâmetro 
// function nomeDaFuncao(valor){
// console.log("Mostra pra mim o meu valor:" + valor )
// }

// nomeDaFuncao("1 real")

//ex2:

// function mostrarNome(nome){
// console.log(nome)
// }
// mostrarNome(`Rafa`)
// mostrarNome("Brendon")
// mostrarNome('André')

//ex3: 

// function mostrarAnimais(animal1, animal2, animal3){
// console.log(animal1, animal2, animal3)
// }
// mostrarAnimais("macaco", "papagaio","girafa")

// //macaco = animal1
// //papagaio = animal2
// //girafa = animal3

//ex4:

// function mostrarIdade(idade1, idade2){
//     console.log(idade1 + idade2)
// }
// mostrarIdade(15, 22)

//FUNÇÃO COM RETURN
//O return tem o objetivo de parar a execução da função e retorna um valor. Caso o valor não for definido ele vai retornar como indefinido.

//Estrutura básica de uma função com return

// function nomeDaFuncao(numero){
// return numero * 2
// }

//console.log(nomeDaFuncao(4)) // pedimos para o console.log mostrar a minha função e o valor do meu parâmetro

//ex2

// function triplo (caixinhaQueAindaNaoSeiQualEoValor){
// return caixinhaQueAindaNaoSeiQualEoValor * 3
// }
// console.log(triplo(15))

//ex4
// function cor (apelidoDaMinhaCaixinha){
// return apelidoDaMinhaCaixinha 
// }
// console.log(cor("preto"))

//UTILIZANDO VARIÁVEL DENTRO DE UM PARÂMETRO

// let variavel = `Morango` //declarando uma variável

// function mostrarFruta(fruta){ //criamos uma função chamada mostrarFruta, e dentro do parâmetro () demos um nome para a minha caixinha que ainda não sei o valor.
//     console.log(fruta)
// }
// mostrarFruta(variavel) //chamamos o nome da variável como argumento. Diferente de digitar um valor para ela.

//ex2

// let concessionaria = "Honda"

// function mostrarConcessionaria (marca){
// console.log(`Minha concessionária trabalha com a marca: ${marca}`)
// }
// mostrarConcessionaria(concessionaria)

//ex3

// let aluno = "turma da tarde" //1º criar uma variável

// function classe (caixinha){
// console.log(`Mostre a minha ` + caixinha)
// }
// classe(aluno)

//Switch - é uma estrutura condicional. Parecido com o if e else.
//break - parar 
//default: Se não for, me mostra uma mensagem. 

//Estrutura básica do switch

// switch (variável){
//     case condição:
//         console.log(ação)
//         break;
//         default :
//         console.log("Mensagem caso não for true")
// }

//ex1
// let carro = "uno"
// switch(carro){
// case "uno":
//     console.log("Você é um uninho")
//     break;//para
//     default: 
//     console.log("Você não é pálio para o uninho")
// }

//ex2
// let idade = 26; //1º criar uma variável

// switch(idade){
// case 19:
//     console.log("Você é maior de idade")
//     break;
//     case 17:
//         console.log("Você é menor de idade")
//         break;
//         default:
//             console.log("Não foi possível verificar")
// }

//ex3

// let mercado = "leite"

// switch (mercado) {
//     case "pão":
//         console.log("Não temos esse produto!")
//         break;
//     case "manteiga":
//         console.log("Não temos esse produto!")
//         break;
//     case "leite":
//         console.log("Sim, temos esse produto!")
//         break;
//     default:
//         console.log("Não temos esses produtos")
// }


//Com if e else
// let mercado = "leite"

// if (mercado == "pão"){
// console.log("Sim, temos esse produto!")
// } else{
//     console.log(`O produto que tenho é só ${mercado}`)
// }


//
//Crie uma variável chamada “food”. Esta variável deve receber uma string com o nome de uma comida.

// Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: 

//Caso lasanha, retorne no console: “Não vendemos esta comida aqui”. 
//Caso pizza, retorne no console: “Estamos com escassez de pizza” 
//E caso salada, retorne no console: “Aqui está, são 3 reais”. 
//Teste com estas três opções e verifique o console do seu navegador. Crie também um default , que retornará uma mensagem de erro no console. 

// let food = "big mac"

// switch(food){
// case "lasanha": 
// console.log("Não vendemos lasanha aqui")
// break;
// case "pizza":
//     console.log("Estamos com escassez de pizza")
//     break;
//     case "salada":
//         console.log("Aqui está, são 3 reais")
//         default: 
//         console.log(`Só temos ${food}`)
// }



let perfume = "floral"

switch(perfume){
    case "amadeirado":
        console.log("Esse perfume não quero")
        break;

        case "cítrico":
        console.log("Esse perfume não quero")
        break;

        case "purovoodo":
        console.log("Meu marido tem dois empregos")

        default:
            console.log(`O perfume que eu quero é o ${perfume} `)
}