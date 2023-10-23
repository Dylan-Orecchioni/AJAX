// je vais creer une fonction qui m'affichera une image random d'un chien en passant par une API https://dog.ceo/api/breeds/image/random

const btn = document.querySelector('.button');
const img = document.querySelector('.box img');
console.log(btn);
console.log(img);

btn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breed/husky/images/random')
        .then(res => res.json())
        .then(data => {
            img.src = data.message;
        })
})
