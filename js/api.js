/* jshint esversion: 8 */
const base_url = 'https://api.jikan.moe/v3';
const search = document.querySelector('.search__feild').value;

async function searchAnime() {

  const form = new FormData(this);
  const search = form.get('search');
  // fetches info from api and awaits its result
  const res = await fetch(`${base_url}/search/anime?q=${search}&page=1`);
  // takes that result and converts it to understandble data
  const data = await res.json();
  // logs data to console
  console.log(data);
}


function pageLoaded() {
  const form = document.querySelector('.search__feild');
  form.addEventListener('submit', e=> {
    e.preventDefault();
    searchAnime();  
  });
}

pageLoaded();
