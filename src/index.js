import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

// fetchBreeds().then(console.log)
// fetchCatByBreed('chee').then(console.log)

const refs = {
    selectEl: document.querySelector('.breed-select'),
    textLoadEl: document.querySelector('.loader'),
    textErrorEl: document.querySelector('.error'),
    divEl: document.querySelector('.cat-info'),
};

refs.selectEl.addEventListener('change', onSelectElClick);

function onSelectElClick() {
    
};

fetchBreeds().then(data => {
    const markup = data.map(el => {
        return `<option value='${el.id}'>${el.name}</option>`
    }).join('');

    refs.selectEl.innerHTML = markup;
})


