/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')

// const ola = () => {
//   const hello = 'Hello'
//   console.log(hello)
// }

// setTimeout(ola, 3000)

// console.log('Linha 5')
// console.log('Linha 6')
// console.log('Linha 7')
// console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

function logGreeting(name) {
  console.log(`olá, ${name}`)
}

const x = callback => {
  callback('Alan')
}

// x(logGreeting)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const numbers = [3, 4, 10, 20];
const filterNumbers = (numbers) => numbers.filter(num => num < 5);
const lesserThanFive = filterNumbers(numbers);

// console.log(lesserThanFive)
// console.log([3, 4, 10, 20].filter((num) => num < 5));

/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209]
const getTotalPrce = (acc, cur) => acc + cur
const totalPrice = prices.reduce(getTotalPrce, 0);


// console.log(`Preço total: ${totalPrice}`)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/

let car = { color: 'amarelo' }
let secondCar = car;
secondCar.color = 'Azul';
console.log(car.color, secondCar.color)

/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

const checkParameters = (par1, par2, par3) => {

  const isUndefined = [par1, par2, par3].some(num => num === undefined)

  return isUndefined ? "A função deve ter 3 parametros" : `Os parametros são: ${par1},  ${par2} e  ${par3}`;
}

// console.log(checkParameters('Mazzolinha', 'Lulinha', 'Brandão'))

/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0
}

booksBox.addBoock = bookQuantity => {

  let { spaces} = booksBox;

  booksBox.booksIn += bookQuantity;

  if (booksBox.booksIn === spaces) {
    return `A caixa está cheia`;
  } 

  if (booksBox.booksIn + bookQuantity > spaces  ) {
    const availableSpace = spaces - booksBox.booksIn;
    return `Só cabe mais ${availableSpace}`;
  }

  return `Já há ${booksBox.booksIn} livros na caixa`;

  

}
booksBox.addBoock(2)
console.log(booksBox.addBoock(1))
console.log(booksBox)