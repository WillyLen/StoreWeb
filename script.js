

const menuToggle = document.getElementById('menu-toggle');
const links = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
    links.classList.toggle('active');
});