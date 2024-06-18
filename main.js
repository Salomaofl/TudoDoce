document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('clicked'));
            card.classList.add('clicked');
        });
    });

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phoneNumber = '5511983922181'; // Substitua pelo número de telefone da loja, no formato internacional (e.g., 5511999999999 para um número brasileiro).

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Nome: ${encodeURIComponent(name)}%0ADúvida: ${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});