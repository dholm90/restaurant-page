export default function home() {
    const mainContent = document.querySelector('.main-content');
    const container = document.createElement('div');
    mainContent.textContent = '';

    container.innerText = "Home Content";

    container.classList.add('home');

    mainContent.appendChild(container);
}