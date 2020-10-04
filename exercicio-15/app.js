/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('.videos');
const lis = Array.from(ul.children);
// const insertVideoClass = (elem) => { elem.classList.add('video')};

// lis.forEach(insertVideoClass)


/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2Parent = document.querySelector(('h2'));

// console.log(h2Parent.parentElement)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1Sibling = document.querySelector('h1');
// console.log(h1Sibling.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

const ulPrevSibling = document.querySelector('ul');
// console.log(ulPrevSibling.previousElementSibling)


/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

// const lis = document.querySelectorAll('li');
// const addEventListenerLi = function(el) {
//   console.log(el.target)
// }

// lis.forEach(li => {
//   li.addEventListener('click', addEventListenerLi)
// })

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]


const btn = document.querySelector('button');
const list = document.querySelector('ul.videos');

btn.addEventListener('click', function() {

  // videos.forEach((video) => {
  //   const li = document.createElement('li')
  //   li.textContent = `${video.name} duração ${video.length}`;
  //   list.append(li)
  // })


  // for(i = 0; i < videos.length; i++) {
  //   const li = document.createElement('li')
  // li.textContent = `${videos[i].name} duração ${videos[i].length}`;
  // list.append(li)
  // }

})

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/
//const lis = document.querySelector('li');

lis.forEach(li => {
  li.addEventListener('click', function(el) {
    document.querySelector('body').remove();
  })
})