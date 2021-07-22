const contactPage = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerHTML =`
        <h1>MONSTER PIZZA</h1>
        <p>Phone: 123 456 789</p>
        <p>Address: New York, NY 10004, USA</p>
    `;

    return contact;
};

const loadContact = () => {
    const content = document.getElementById('content');
    content.classList.add('content--inner-page')
    content.textContent = '';
    return content.appendChild(contactPage());
};

export default loadContact;