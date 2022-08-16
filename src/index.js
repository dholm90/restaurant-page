import './style.css';
import loadPage from './page-load.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');
    return element;
}

function events() {
    const homeButton = document.querySelector('#homeButton');
    const menuButton = document.querySelector('#menuButton');
    const contactButton = document.querySelector('#contactButton');

    homeButton.addEventListener('click', function () {
        home();
    })

    menuButton.addEventListener('click', function () {
        menu();
    })

    contactButton.addEventListener('click', function () {
        contact();
    })
}

document.body.appendChild(component());
loadPage();
events();
home();
console.log("webpack is working!");