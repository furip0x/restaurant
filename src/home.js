const homePage = () => {
    const home = document.createElement('div');
    home.classList.add('home-text');

    home.innerHTML =
        `<div class="home-slogan"><span>BEST PIZZA</span>IN TOWN</div>
        `;

    return home;
}

const loadHome = () => {
    const content = document.getElementById('content');
    content.textContent = '';
    content.classList.remove('content--inner-page');
    return content.appendChild(homePage());
}

export default loadHome;