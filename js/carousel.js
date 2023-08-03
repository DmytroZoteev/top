const slides = [
    `<div class="features-item">
                <div class="features-item__icon-container">
                    <img class="features-item__icon" src="img/mdi_brush.png" alt="Brush">
                </div>
                <div class="features-item__title-container">
                    <h3 class="features-item__title">OpenType features Variable fonts</h3>
                </div>
                <div class="features-item__subtitle-container">
                    <p class="features-item__subtitle">Slate helps you see how many more days you need to work to
                        reach your financial goal.</p>
                </div>
            </div>`,
    `<div class="features-item">
            <div class="features-item__icon-container">
                <img class="features-item__icon" src="img/mdi_drawing.png" alt="Drawing">
            </div>
            <div class="features-item__title-container">
                <h3 class="features-item__title">Design with real data</h3>
            </div>
            <div class="features-item__subtitle-container">
                <p class="features-item__subtitle">Slate helps you see how many more days you need to work to
                    reach your financial goal.</p>
            </div>
        </div>`,
    `<div class="features-item">
                <div class="features-item__icon-container">
                    <img class="features-item__icon" src="img/mdi_draw.png" alt="Draw">
                </div>
                <div class="features-item__title-container">
                    <h3 class="features-item__title">Fastest way to take action</h3>
                </div>
                <div class="features-item__subtitle-container">
                    <p class="features-item__subtitle">Slate helps you see how many more days you need to work to
                        reach your financial goal.</p>
                </div>
            </div>`,
];

const carouselSlide = document.querySelector('.carousel-container');


let currentSlide = 0;

function renderSlide() {
    carouselSlide.innerHTML = slides[currentSlide];
    if (window.innerWidth >= 768) {
        const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        carouselSlide.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth >= 950) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            carouselSlide.innerHTML += slides[thirdSlideIdx];
        }
    }
};

renderSlide();

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
};

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
};

const btnNext = document.querySelector('.button-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.button-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);