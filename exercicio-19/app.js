/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/


const quizForm = document.querySelector('.quiz-form');

const answer = (event) => {
    event.preventDefault()

    const answers = [quizForm.askA.value, quizForm.askB.value, quizForm.askC.value];
    const message = document.createElement('div');

    let score = 0;
    let alert = "";
    let color = ''

    answers.forEach((elem) => {

        switch (elem) {
            case 'opt1':
                score += 3;
                break;

            case 'opt2':
                score += 6;
                break;

            default:
                score += 9;
        }
    });

    if (score < 15) {
        alert = "Sua vida é saudável";
        color = 'alert-primary';
    }  else if (score >= 15 && score < 20) {
        alert = "Solicitamos melhor cuidado com a sua vida"
        color = 'alert-warning';
    } else {
        alert = "Procure um medico"
        color = 'alert-danger';
    }

    const attrExists = document.querySelector('[data-feedback = "alert"]');

    if (attrExists) {
        attrExists.remove();
    }

    message.textContent = `Você fez ${score} pontos. ${alert}`

    message.setAttribute('data-feedback', 'alert');
    message.classList.add('alert', color,'text-center')

    quizForm.insertAdjacentElement('beforebegin', message);
}

quizForm.addEventListener('submit', answer);