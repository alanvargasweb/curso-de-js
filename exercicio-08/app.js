/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

// function multiplication(n1 = 0, n2 = 0) {
//   let res = parseInt(n1) * parseInt(n2);
//   return res;

// }

// console.log(multiplication(3,3))

// correct

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

// const  multiplication = function(n1, n2) {
//   return (n1 * n2);
// }

// console.log(multiplication(9,9))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

// function repeatNumber(n = 10) {
//   let res = ''
//   for( i = 0; i <= n; i++) {
//     res += `Essa é a ${i}° vez que esse número é exibido n/`;
//   }

//   return res;

// }

// function repeatNumber(n = 10) {
//   return `Esta é a ${n}ª vez que essa string é exibida.`
// }

// let repNumb = 0;
// for(i = 0; i < 10; i++) {
//   console.log(repeatNumber(i));
// }


// function log(number = "Você deve passar um valor para ser exibido") {
//   return console.log(number)
// }

// for(i = 0; i < 7; i++) {
//   log(`Essa é a ${i}° vez que esse número é exibido`);

// }

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail'];


// const transformToUppercase = function(array = []) {
//   let newMillennialWords = [];

//   for(i = 0; i < array.length; i++) {
//     let wordUperCase = array[i].toUpperCase();
//     newMillennialWords.push(wordUperCase);
//   }

//   return newMillennialWords;

// }


// console.log(transformToUppercase(millennialWords));

// correct


/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];

// const isPositiveOrNegative = function() {
//   let message = null;
//   let positive = 0;
//   let negative = 0;
//   let total = 0

//   for(i = 0; i < randomNumbers.length; i++) {
//     let num = randomNumbers[i];

//     num>0 ? negative++ : positive++;
//   }

//   total = positive + negative;
//   message = `O array "randomNumbers" possui ${total} números, sendo ${positive} positivos e ${negative} negativos.`
  
//   return message;
// }

// console.log(isPositiveOrNegative());

// correct




/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/



function getOddNumbers(n = []) {
  let newArrayOfOddNumbers = []

  for(let i = 0; i < n.length; i++) {
    
    let num = n[i];
    let odd = num % 2 === 0;

    if(odd) {
      newArrayOfOddNumbers.push(num);
    }

  }

  return newArrayOfOddNumbers;
}

gon = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]);

console.log(gon)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]


// let newPhase = ``
// for (i = 0; i < functions.length; i++) {
//   newPhase += `${functions[i]()} `;
// }


// console.log(newPhase)