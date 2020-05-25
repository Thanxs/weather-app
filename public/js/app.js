console.log('Client side of JS is loaded!');

const weatherForm = document.querySelector('.weather-form');
const search = document.querySelector(".search");

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    console.log('testing!!!', location);
});