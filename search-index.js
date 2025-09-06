const template = document.querySelector(".container");
const results = document.querySelector(".results");
const id = "Jaws";

async function search(event) {
  const id = event.target.value;
  await getData(id);
  results.innerHTML = `Search results for "${id}"`;
}

async function getData(id) {
template.innerHTML = `<div class='loading'><i class="fa-solid fa-spinner"></i></div>`

  try {
    const promise = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=406892b9&s=${id}`);
    const promiseData = await promise.json();
    template.innerHTML = "";

    for (let i = 0; i < 6; i++) {
      const movie = promiseData.Search[i];

      template.innerHTML += `<div class="movie__template">
        <figure class="movie__poster">
            <img class="movie__poster--img" src="${movie.Poster}" alt="" onerror="this.onerror=null; this.src='./notavail.png';">
        </figure>
        <div class="movie__title">${movie.Title}</div>
        <div class="movie__year">${movie.Year}</div>
        <div class="movie__category">${movie.Type}</div>
    </div>`;
    }} 
  catch (err) 
  {template.innerHTML = `<p>❌ Could not load results.</p>`;}

}

getData(id);