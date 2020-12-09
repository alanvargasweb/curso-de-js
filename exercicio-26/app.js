/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/


// console.log(currentDate)

const fixTime = (t) => {
  const timeFixed = t < 10 ? '0' + t : t;
  return timeFixed;
}

const getCurrentDate = () => {

  const currentDate = new Date()

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();

  const currentDateForm = `${fixTime(day)}/${fixTime(month)}/${fixTime(year)}`;

  return currentDateForm;
}

// console.log(getCurrentDate())


/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const getingFullDate = () => {

  const semanas = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const week = currentDate.getDay();

  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formatedDate = `${semanas[week]} ${fixTime(day)} de ${mes[10]} de ${fixTime(year)} ${fixTime(hour)}: ${fixTime(minutes)}:${fixTime(seconds)}`;

  return formatedDate;

}

// setTimeout(console.log(getingFullDate()), 100);

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const { id, isVerified } = user;
// console.log(id, isVerified)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA } = robotA;
const { name: nameB } = robotB;
console.log(nameA, nameB)

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const alphabet = { a, b, c }

console.log(alphabet)
/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = ({ target, property, willChange } = {}) => {

  const change = willChange === 'valor indesejado' ? 'valor desejado' : 'valor indesejado'

  useDataSomewhereElse({ target, property, willChange: change });
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container');



const getClockHTML = (clockContainer, hours, minutes, seconds) => {

  const fixTime = (time) => {
    return String(time).length === 1 ? `0${time}` : time;
  }

  let clock = `
            <span>${fixTime(hours)}</span> :
            <span>${fixTime(minutes)}</span> :
            <span>${fixTime(seconds)}</span>
          `
  clockContainer.innerHTML = clock;
}

const updateClock = () => {

  const present = new Date();
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  getClockHTML(clockContainer, hours, minutes, seconds);
}

setInterval(updateClock, 1000)
