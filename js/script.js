// hamburger menu toggle

const hamburger = document.querySelector('.header__toggle');
const navUl = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
// const underline = document.querySelector('.header__underline');
// const underlineTwo = document.querySelector('.header__menu-hr-line');



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
    logo.classList.toggle('active');
    // underline.classList.toggle('active');
    // underlineTwo.classList.toggle('active');

})