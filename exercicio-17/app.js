/*
  01 correct

  - No envio do form, faça com que a página não seja recarregada.
*/

const form = document.querySelector('form');

const documentationLink = document.querySelector('a');
const inputValid = /[a-zA-Z)-9]{7,12}/;

const clearInput = () => {
  input.value = '';
  input.focus()
}

const submitForm = (evt) => {
  evt.preventDefault();
  const input = evt.target.input;
  const validation = inputValid.test(input.value) ? input.value : 'O número deve conter de 7 a 11 caraceres'
  console.log(validation)
  clearInput()
}

form.addEventListener('submit', submitForm)


/*
  02

  - No envio do form obtenha, através do objeto event, o texto inserido no  
    input e exiba-o no console.
*/

/*
  03

  - Teste uma regex que dá match com a palavra "documentation" do parágrafo do  
    index.html;
  - Exiba no console o boolean no qual este teste resulta.
*/

const machWithDocumentation = /documentation/;
const documentationLinkText = documentationLink.innerText;
// console.log(machWithDocumentation.test(documentationLinkText))

/*
  04

  - Escreva uma regex que dê match com a palavra "B99" da string abaixo;
  - A regex não deve conter (literalmente) os caracteres B99;
  - Teste se o match aconteceu e exiba o resultado no console.
*/

const B99message = 'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta'

const matchB99 = /[A-Z]{3}/;
// console.log(matchB99.test(matchB99))

/*
  05 correct

  - Modifique (manualmente) o valor que a const word armazena para que o  
    resultado do teste entre a regex e a string exibido no console seja true.
*/

const word = 'NASA'
const NASARegex = /^[A-Z]{4}$/
const NASAResult = NASARegex.test(word)

// console.log(NASAResult)

/*
  06

  - No envio do form, se o valor inserido no input conter, no mínimo, 7  
    caracteres, que podem ser quaisquer caracteres, exiba no console a mensagem
    "O valor inserido no input é válido =)";
  - Caso contrário, exiba "Valor inválido =(" no console.
  
  Exemplos:
    - "a[b@X7c" é um valor válido, pois contém 7 caracteres;
    - "jozeti" não é um valor válido, pois contém 6 caracteres.
*/


/*
  07

  - Agora, no envio do form, faça com que o valor permitido contenha de 7 a 11 
    caracteres mas não contenha caracteres especiais. Apenas letras maiúsculas  
    ou minúsculas e números serão permitidos.

  Exemplos:
    - "0xY79aYx54e" é um valor válido, pois contém 11 letras e números;
    - "eich_1961" não é um valor válido, pois contém um caractere especial.
*/
