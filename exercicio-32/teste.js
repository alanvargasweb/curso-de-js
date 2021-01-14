// const getPokemon = async () => {
//     const bubassaur =  fetch('https://pokeapi.co/api/v2/pokemon/1');
//     const charmander =  fetch('https://pokeapi.co/api/v2/pokemon/4');
//     const squirtle =  fetch('https://pokeapi.co/api/v2/pokemon/7');

//     const results = await Promise.all([bubassaur, charmander, squirtle]);
//     results.forEach( async response =>  console.log(await response.json()));
// }

// getPokemon()

const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await
            (response)
                .json()
    } catch (error) {
        console.log(error.message)
    }
}

const logUsers = async () => {
    const users = await getUsers()
    console.log(users)
}

logUsers()