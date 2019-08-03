/* jshint esversion: 8 */
const base_url = 'https://api.jikan.moe/v3';

async function searchAnime(event) {
  const search = document.querySelector('.search__feild').value;

  // event.preventDefault();
  // const form = new FormData();
  // const search = form.get('search');

  try{
    // fetches info from api and awaits its result
    const res = await fetch(`${base_url}/search/anime?q=${search}&page=1`);
    // takes that result and converts it to understandble data
    const data = await res.json();
    // takes the data and updats the dom with that data
    const searchRes = document.getElementById('search__res');

    searchRes.innerHTML = document.
    searchRes = data.results
    .filter((value,index) => {
      if (index < 1 ) {
        return value;
      }
    })
    .map(anime => {
      return `
        <img class="search__res--img" src="${anime.image_url}" alt="Anime image">
        <h2 class="search__res--title">${anime.title}</h2>
      `;
    });

  }catch(err){
    console.warn(err);
  }

}


// cancels the defaults action of the form and runs a function instead
function pageLoaded() {
  const form = document.getElementById('search_form');
  form.addEventListener('submit', e=> {
    e.preventDefault();
    searchAnime();
  });
}

// function pageLoaded() {
//   const form = document.getElementById('search_form');
//   form.addEventListener('submit', searchAnime);
// }

pageLoaded();
