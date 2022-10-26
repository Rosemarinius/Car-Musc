
new Swiper('.slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: ".slider__arrow-r",
        prevEl: ".slider__arrow-l",
    },
});

new Swiper('.material__slider', {
    loop: true,

    navigation: {
        nextEl: ".text-slider__arrow-r",
        prevEl: ".text-slider__arrow-l",
    },
})

new Swiper('.material__text-slider', {
    loop: true,
    
    navigation: {
        nextEl: ".text-slider__arrow-r",
        prevEl: ".text-slider__arrow-l",
    },
})


new Swiper('.pluses__slider', {
    loop: true,

    navigation: {
        nextEl: ".pluses-slider__arrow-r",
        prevEl: ".pluses-slider__arrow-l"
    }
})

new Swiper('.pluses__text-slider',{
    loop: true,

    navigation: {
        nextEl: ".pluses-slider__arrow-r",
        prevEl: ".pluses-slider__arrow-l"
    }
})