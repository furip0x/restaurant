const menuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML =`
    <div class="menu__item">
        <div class="menu__title">Pizza 1</div>
        <div class="menu__price">$15</div>
    </div>
    <div class="menu__item">
        <div class="menu__title">Pizza 2</div>
        <div class="menu__price">$20</div>
    </div>
    <div class="menu__item">
        <div class="menu__title">Pizza 3</div>
        <div class="menu__price">$25</div>
    </div>
    <div class="menu__item">
        <div class="menu__title">Pizza 4</div>
        <div class="menu__price">$30</div>
    </div>
    <div class="menu__item">
        <div class="menu__title">Pizza 5</div>
        <div class="menu__price">$28</div>
    </div>
    <div class="menu__item">
        <div class="menu__title">Pizza 6</div>
    <div class="menu__price">$32</div>
    </div>
    <div class="menu__item">
        <div class="menu__title">Pizza 7</div>
        <div class="menu__price">$34</div>
    </div>
    <div class="menu__item">
        <div class="menu__title">Pizza 8</div>
        <div class="menu__price">$36</div>
    </div>
    <div class="menu__item">
        <div class="menu__title">Pizza 9</div>
        <div class="menu__price">$38</div>
    </div>
    `;

    return menu;
};

const loadMenu = () => {
    const content = document.getElementById('content');
    content.classList.add('content--inner-page')
    content.textContent = '';
    return content.appendChild(menuPage());
};

export default loadMenu;