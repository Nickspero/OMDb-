const template = document.querySelector(".container");
const results = document.querySelector(".results");
const id = "Jaws";

async function search(event) {
  const id = event.target.value;
  results.innerHTML = `Search results for "${id}"`;
  await getData(id);
}

async function getData(id) {
  template.innerHTML = "";
  template.classList.add("loading");

  try {

    const promise = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=406892b9&s=${id}`)
    const promiseData = await promise.json();

    for (let i = 0; i < 6; i++) {
      template.innerHTML += `<div class="movie__template">
        <figure class="movie__poster">
            <img class="movie__poster--img" src="${promiseData.Search[i].Poster}" alt="">
        </figure>
        <div class="movie__title">${promiseData.Search[i].Title}</div>
        <div class="movie__year">${promiseData.Search[i].Year}</div>
        <div class="movie__category">${promiseData.Search[i].Type}</div>
    </div>`
    }} 
    catch (err) {
    template.innerHTML = `<p>❌ Could not load results.</p>`;} 
    finally {
    template.classList.remove("loading");}
}

getData(id);
