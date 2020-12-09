/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const dataAtual = new Date;

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];


const currenntMonth =  dataAtual.getMonth();
console.log(months[currenntMonth]);

console.log(months.indexOf('Fevereiro'));

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

const currentYear = dataAtual.getFullYear();
// console.log(currentYear);

/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/

const past = new Date('Febuary 27 1897');
// console.log(past)

/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

const currentHour = dataAtual.getHours();
// console.log(currentHour);

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/


const future = new Date('May 4 2021 00:00:00');

console.log(future)


/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/

const diference = future.getTime() - past.getTime();
const diferenceInDays = Math.round(diference / 1000 / 60 / 60 / 24)
console.log(diferenceInDays);


/*
  08
  
  Assim como a 1ª aplicação que implementamos no curso (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
