const aboutPage = () => {
    const about = document.createElement('div');
    about.classList.add('about');
    about.innerHTML =`
    <img src="img/about-pizza.png">
    <img src="img/about-pizza2.jpg">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu volutpat diam. Mauris quis egestas sem. Integer eget consectetur quam. Nulla euismod odio non turpis mollis, ut tempus odio aliquet. Duis a bibendum ante. Suspendisse bibendum a ligula a vulputate. Sed dolor purus, sollicitudin non tincidunt congue, consectetur in quam. Mauris efficitur quam ut velit dapibus, eu vulputate nisl ornare. Suspendisse id neque tincidunt, varius lorem ac, rutrum risus. Nullam lectus risus, lobortis non nibh ut, vestibulum suscipit felis. Sed sed sapien cursus, ornare libero quis, facilisis est. Vestibulum commodo ut urna nec consectetur. In varius elit sed scelerisque consequat. Nulla sed sodales erat. Sed felis eros, placerat nec magna id, pharetra pretium est. Duis a bibendum ante. Suspendisse bibendum a ligula a vulputate. Sed dolor purus, sollicitudin non tincidunt congue, consectetur in quam. Mauris efficitur quam ut velit dapibus, eu vulputate nisl ornare, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu volutpat diam. Mauris quis egestas sem. Integer eget consectetur quam. Nulla euismod odio non turpis mollis, ut tempus odio aliquet. Suspendisse bibendum a ligula a vulputate. Sed dolor purus, sollicitudin non tincidunt congue, consectetur in quam. Mauris efficitur quam ut velit dapibus, eu vulputate nisl ornare. Suspendisse bibendum a ligula a vulputate. Sed dolor purus, sollicitudin non tincidunt congue, consectetur in quam. Mauris efficitur quam ut velit dapibus, eu vulputate nisl ornare, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `;

    return about;
};

const loadAbout = () => {
    const content = document.getElementById('content');
    content.classList.add('content--inner-page')
    content.textContent = '';
    return content.appendChild(aboutPage());
};

export default loadAbout;