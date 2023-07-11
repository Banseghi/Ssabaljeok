const togglebutton = document.querySelector('.navbar_togglebutton');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

togglebutton.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
