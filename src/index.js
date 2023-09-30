import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const refs = {
    selectEl: document.querySelector('.breed-select'),
    textLoadEl: document.querySelector('.loader'),
    textErrorEl: document.querySelector('.error'),
    divEl: document.querySelector('.cat-info'),
};

refs.textLoadEl.classList.add('is-hidden');
refs.textErrorEl.classList.add('is-hidden')

refs.selectEl.addEventListener('change', onSelectElChange);

function onSelectElChange(e) {
    refs.textLoadEl.classList.remove('is-hidden');

    const catId = refs.selectEl.value
    fetchCatByBreed(catId).then(data => {
        refs.textLoadEl.classList.add('is-hidden');
        renderPage(data)
    }).catch(error => {
        refs.textErrorEl.classList.remove('is-hidden')
    })  
};


fetchBreeds().then(data => {
    const markup = data.map(el => {
        return `<option value='${el.id}'>${el.name}</option>`
    }).join('');

    refs.selectEl.innerHTML = markup;
}).catch(error => {
    refs.textErrorEl.classList.remove('is-hidden')
});

function renderPage(data) {
    const markup =  `
        <h2 class="header-cat-info">${data[0].breeds[0].name}</h2>
        <img class="img-cat-info" src="${data[0].url}" alt="cat" width = "400">
        <p class="text-cat-info">${data[0].breeds[0].description}</p>
        <p class="text-cat-info">${data[0].breeds[0].temperament}</p>
        `
    refs.divEl.innerHTML = markup;
}





