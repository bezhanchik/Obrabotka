
const swiper = new Swiper('#dovertes .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1078: {
            spaceBetween: 50,
        }
    }
});
