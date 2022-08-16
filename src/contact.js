export default function contact() {
    const mainContent = document.querySelector('.main-content');
    const container = document.createElement('div');
    mainContent.textContent = '';

    container.innerText = "Contact Content";

    container.classList.add('contact');

    mainContent.appendChild(container);
}