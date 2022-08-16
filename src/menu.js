export default function menu() {
    const mainContent = document.querySelector('.main-content');
    const container = document.createElement('div');
    mainContent.textContent = '';

    container.innerText = "Menu Content";

    container.classList.add('menu');

    mainContent.appendChild(container);
}