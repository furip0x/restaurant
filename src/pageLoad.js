import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import loadContact from './contact';

const pageLoad = () => {
    const navLinks = document.querySelectorAll('.main-nav__link');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.forEach((link) => {link.classList.remove('active');});
            const linkId = link.getAttribute('id');
            link.classList.add('active');

            if (linkId === 'home' || linkId === 'logo') loadHome();
            else if (linkId === 'menu') loadMenu();
            else if (linkId === 'about') loadAbout();
            else if (linkId === 'contact') loadContact();
        });
    });

    loadHome();
};

export default pageLoad;