const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'imgs/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(x) {
        //https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    displayedImage.src = x.target.src;
    };
}

/* Wiring up the Darken/Lighten button */
