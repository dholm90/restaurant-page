import './style.css';
import loadPage from './page-load.js';

function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');
    loadPage;
    return element;
}



document.body.appendChild(component());
loadPage();
console.log("webpack is working!");