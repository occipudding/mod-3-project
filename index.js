const consumer_key = 'menxZlpBlzWeKAOZRMiG';
const consumer_secret = 'UNMotHHyUDlzROfXLCYWrMfwwbWAYrfb';
const artistDisplay = document.querySelector(".artist-display");
const form = document.querySelector("form");

function fetchArtist(artist) {
  fetch(`https://api.discogs.com/database/search?q=${artist}&artist&key=${consumer_key}&secret=${consumer_secret}`).then(resp => resp.json()).then(addArtistToDom);
}

form.addEventListener('submit', formSubmit)

function addArtistToDom(data) {
  console.log(data.results[0]);
  artistDisplay.innerHTML = `
    <h1>${data.results[0].title}</h1>
    <img src=${data.results[0].cover_image}>
  `
}

function formSubmit(e) {
  e.preventDefault();
  let artist = e.target.querySelector("#artist").value;
  artist = /\s/.test(artist) ? artist.split(' ').join('-') : artist;
  fetchArtist(artist);
  form.reset();
}
