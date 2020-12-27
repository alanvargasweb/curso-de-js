/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

const getData = (url) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }

    if (isRequestNotOk) {
      reject('Não foi possivel retiornar a lista')
    }

  })

  request.open('GET', url);
  request.send();
  })
}

// getData('https://jsonplaceholder.typicode.com/users')
//   .then(res => {
//     console.log(res)
//   })
//   .catch(error => {
//     console.log(error)
//   })

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const makeCalculation = (n1, n2, operator, operation) => {
  return `Resultado da operação: ${n1} ${operator} ${n2} = ${operation}`
}

const calculator = operator => (n1, n2) => ({
  "+": makeCalculation(n1, n2, operator, n1 + n2),
  "-": makeCalculation(n1, n2, operator, n1 - n2),
  "x": makeCalculation(n1, n2, operator, n1 * n2),
  "/": makeCalculation(n1, n2, operator, n1 / n2),
})[operator] || `Não foi possivel retornar o valor de ${n1} ${operator} ${n2}`;



const sum = calculator('+')
// console.log(sum(3,6));

/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

// const divisaoNorte = ['norte', 'nordeste','noroeste', 'centro'];
// const divisaoSul = ['sul','sudeste','leste','oeste'];

// const nacional = divisaoNorte.concat(divisaoSul)
/* --------------------------------------------------------- */ 
const regiaoNorte = ['AP', 'PA', 'MA', 'PI'];
const regiaoNoroeste = ['AC', 'AM', 'RR'];
const regiiaoNordeste = ['CE', 'RN', 'PE', 'PB'];
const regiaoCentral = ['TO', 'GO', 'DF'];

const divNorte = regiaoNorte.concat(regiaoNoroeste, regiiaoNordeste, regiaoCentral);
//console.log(divNorte)

const regiaoSul = ['RS', 'SC', "PR"];
const regiaoSudeste = ['SP', 'RJ', 'MG'];
const regiaoLeste = ['BA', 'SE', 'ES', "AL"];
const regiaoOeste = ['MT', 'MS', 'RO'];

const divSul = regiaoSul.concat(regiaoSudeste, regiaoLeste, regiaoOeste)
//console.log(divSul)

let nacional = divSul.concat(divNorte);
//console.log(nacional)

const existDF = nacional.includes('FN')

if(existDF === false) {
  nacional.unshift('FN')
}

//console.log(nacional)

const brasil = nacional.map((item, index) => ({ id: index, estado: item }));

console.log(brasil)

/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/



const newSul = nacional.splice(1,3)
//console.log(newSul)
//console.log(nacional)
const newStates = ['TJ', 'TR', 'MJ', 'SS']; 
nacional = nacional.concat(newStates);
// console.log(nacional)

const hasleterJ = nacional.some(item => item.includes('J'))
console.log(hasleterJ)


/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/
