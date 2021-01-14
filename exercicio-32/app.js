



const container = document.querySelector('.out');
const form = document.querySelector('form')
let images = []


const fetchGitUsers = async username => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=cEBuB5IRrG3JTQdgrnkIZow3Awdk3gCG&limit=1&q=${username}`);
  const imgs = await response.json();

  images = imgs.data[0].images.original.url;
  container.innerHTML = `<img src='${images}' />`
}

const logGitHubUser = async username => {
  console.log(await fetchGitUsers(username))
}


form.addEventListener('submit', (event) => {
  event.preventDefault()
  const val = event.target.search.value
  logGitHubUser(val)
})









