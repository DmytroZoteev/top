let burgerBtn = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__box-navlist-soclink');

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
})