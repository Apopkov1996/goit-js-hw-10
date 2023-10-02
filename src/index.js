import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
import SlimSelect from "slim-select";

const refs = {
    selectEl: document.querySelector('.breed-select'),
    textLoadEl: document.querySelector('.loader'),
    textErrorEl: document.querySelector('.error'),
    divEl: document.querySelector('.cat-info'),
};

refs.textLoadEl.classList.add('is-hidden');
refs.textLoadEl.classList.add('.loader')
refs.textErrorEl.classList.add('is-hidden');
refs.divEl.classList.add('is-hidden');

refs.textLoadEl.textContent = ''

refs.selectEl.addEventListener('change', onSelectElChange);

function onSelectElChange() {
    refs.textLoadEl.classList.remove('is-hidden');
    

    const catId = refs.selectEl.value;
    
    fetchCatByBreed(catId).then(data => {
        refs.textLoadEl.classList.add('is-hidden');
        refs.divEl.classList.remove('is-hidden');
        renderPage(data)
    }).catch(error => {
        refs.textErrorEl.classList.remove('is-hidden');
        refs.textLoadEl.classList.add('is-hidden');
        refs.divEl.classList.add('is-hidden');
    })  
};


fetchBreeds().then(data => {
    const markup = data
        .map(el => {
        return `<option value='${el.id}'>${el.name}</option>`
    }).join('');

    refs.selectEl.innerHTML= markup;
    // new SlimSelect({
    //     select: '.breed-select',
    // })
    
}).catch(error => {
    refs.textErrorEl.classList.remove('is-hidden');
});

function renderPage(data) {
    const markup =  `
        <h2 class="header-cat-info ">${data[0].breeds[0].name}</h2>
        <section class = "section-cat">
        <div class = "div-cat-left">
        <img class="img-cat-info" src="${data[0].url}" alt="cat" width = "600" height = "400">
        </div>
        <div class = "div-cat-right">
        <p class="text-cat-info-first"><span class = "span">Description: </span>${data[0].breeds[0].description}</p>
        <p class="text-cat-info-second"><span class = "span">Temperament: </span>${data[0].breeds[0].temperament}</p>
        </div>
        </section>
        `
    refs.divEl.innerHTML = markup;
};






