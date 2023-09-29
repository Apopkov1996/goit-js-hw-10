const BASE_URL = 'https://api.thecatapi.com'
const options = {
    headers: {
        'x-api-key' : 'live_aUFqRDdCUhNgAKkwm1toN44d52zqmJ1i8nfxJCvrFxi8kJLGtAgN6nyIP42LEG2F'
    },
}

export function fetchBreeds() {
    const END_POINT = '/v1/breeds'
    const url = `${BASE_URL}${END_POINT}`

    return fetch(url, options).then(res => {
        if(!res.ok ) {
            throw new Error(res.status)
        }
        return res.json()
    })
};


export function fetchCatByBreed(breedId) {
    const END_POINT = '/v1/images/search';
    const PARAMS = `?breed_ids=${breedId}`;
    const url = `${BASE_URL}${END_POINT}${PARAMS}`

    return fetch(url, options).then(res => {
        if(!res.ok ) {
            throw new Error(res.status)
        }
        return res.json()
    }) 
}


