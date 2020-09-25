/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/


const title = document.querySelector("h1").textContent.toLocaleUpperCase();

console.log(title)


/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ];

const listOfNumbers = document.querySelector(".numbers");

// let list = "";
// numbers.forEach((number) => {
//   list += `<p class='red'> - ${number}</p>`
// });

// listOfNumbers.innerHTML = list;

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/


let list = "";
numbers.forEach((number) => {
  if(number % 2 === 0) {
    list += `<li class='red'> - ${number}</li>`;
  } else {
    list += `<li class='blue'> - ${number}</li>`;
  }
});

listOfNumbers.innerHTML = list;



/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

const bodyPage = document.querySelector('body');
bodyPage.setAttribute('class','body-background');


/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const addLink = document.querySelector('.link');
addLink.setAttribute('href','https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo')


/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/


console.log(addLink)


/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

const titleProps = document.querySelector('h1');

console.log(titleProps.style)


/*
  08

  - Remova a classe "body-background", do elemento body.
*/


bodyPage.removeAttribute('class');


/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/


const pageLink = document.querySelector('a');
const getAttributte = pageLink.getAttribute('class');

if(getAttributte === 'link') {
  console.log('Havia um link na página');
  pageLink.setAttribute("class","");
}
