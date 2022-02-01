// hamburger menu toggle
const hamburger = document.querySelector('.header__toggle');
const navUl = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const mainTabs = document.querySelector('.main__tabs');
const hero = document.querySelector('.main__hero');




hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
    logo.classList.toggle('active');
    mainTabs.classList.toggle('active');
    hero.classList.toggle('active');

})


// planet pseudo elements
// const planetUnderline = document.querySelectorAll('.planet-name'), ':after';

// planetUnderline.addEventListener('click', () => {
//     console.log("whatsuppppp");
// })



// tabs
const tabs = document.querySelectorAll('.main__tab');
const mainContainer = document.querySelector('.main__container');
const contents = document.querySelectorAll('.main__hero');

mainContainer.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
        tabs.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        contents.forEach(content => {
            content.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})