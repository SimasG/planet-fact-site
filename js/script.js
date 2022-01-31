// hamburger menu toggle
const hamburger = document.querySelector('.header__toggle');
const navUl = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
    logo.classList.toggle('active');
})


// planet pseudo elements
// const planetUnderline = document.querySelectorAll('.planet-name'), ':after';

// planetUnderline.addEventListener('click', () => {
//     console.log("whatsuppppp");
// })



// tabs