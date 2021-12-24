const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.getElementById("img")
const imgs = [
    {src: "imgs/village.jpg",
    alt: "christmas village at night with snow and christmas tree"},
    {src: "imgs/present.jpg",
    alt: "white and gold wrapped present on white table with snowflake decorations"},
    {src: "imgs/doggies.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"}]

let imgNum = 0;

next.addEventListener('click', (e) => {
    img.classList.remove('img-fadein');
    imageCarousel("next");
    e.preventDefault();
});

previous.addEventListener('click', (e) => {
    img.classList.remove('img-fadein');
    imageCarousel("prev");
    e.preventDefault();
});

function imageCarousel(direction) {

    direction == 'next' ? imgNum++ : imgNum--;

    if(imgNum >= imgs.length) {
        imgNum = 0;
    } else if (imgNum == -1) {
        imgNum = imgs.length - 1;
    }

    img.src = imgs[imgNum].src;
    img.alt = imgs[imgNum].alt;
    }

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.