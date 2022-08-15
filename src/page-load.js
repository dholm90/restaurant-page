export default function loadPage() {
    // Get #content
    const content = document.getElementById('content');

    // Header
    const header = document.createElement('header');
    const left = document.createElement('div');
    const logo = document.createElement('div');
    const h1 = document.createElement('h1');
    const right = document.createElement('div');
    const fb = document.createElement('div');
    const insta = document.createElement('div');
    const phone = document.createElement('div');
    const email = document.createElement('div');

    h1.innerText = "Edelweiss Tavern";
    fb.innerText = "fb";
    insta.innerText = "insta";
    phone.innerText = "phone";
    email.innerText = 'email';

    right.classList.add('right');

    header.appendChild(left);
    left.appendChild(logo);
    left.appendChild(h1);
    header.appendChild(right);
    right.appendChild(fb);
    right.appendChild(insta);
    right.appendChild(phone);
    right.appendChild(email);

    // Navigation
    const nav = document.createElement('section');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    home.innerText = 'Home';
    menu.innerText = 'Menu';
    contact.innerText = 'Contact';

    nav.classList.add('nav');

    nav.appendChild(ul);
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);

    const mainContent = document.createElement('section');
    mainContent.classList.add('main-content');

    // Footer
    const footer = document.createElement('footer');
    const copyright = document.createElement('div');
    const designer = document.createElement('div');

    copyright.innerText = 'Copyright Edleweiss Tavern 2022';
    designer.innerText = "Website developed by WebsiteSolutions.ca";

    copyright.classList.add('copyright');
    designer.classList.add('designer');

    footer.appendChild(copyright);
    footer.appendChild(designer);

    // Finalize
    content.appendChild(header);
    content.appendChild(nav);
    content.appendChild(mainContent);
    content.appendChild(footer);

}