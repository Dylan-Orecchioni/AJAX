// je vais creer une fonction qui m'affichera une image random d'un chien en passant par une API https://dog.ceo/api/breeds/image/random

const btn = document.querySelector('.button');
const img = document.querySelector('.box img');
const select = document.querySelector('#race');
const photos = document.querySelector('.photos');

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(data => {
    const breeds = data.message;

    Object.keys(breeds).forEach(breed => {
        const option = document.createElement('option');
        option.value = breed;
        option.textContent = breed;
        select.appendChild(option);
    })
})

btn.addEventListener('click', () => {
    const race = select.value;

    if(race){
        fetch(`https://dog.ceo/api/breed/${race}/images/random`)
        .then(res => res.json())
        .then(data => {
            img.src = data.message;
        })
    }
})

// au clic sur la photo, ca enregistre la photos dans la div favoris en creant une image a chaque fois que je clic sur une photo.

img.addEventListener('click', () => {
    const imgFav = document.createElement('img');
    imgFav.classList.add("fav");
    imgFav.src = img.src;

    photos.appendChild(imgFav);
})


