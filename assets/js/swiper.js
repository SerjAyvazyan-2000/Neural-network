


let advantagesSwiper = new Swiper(".transform-swiper", {
    spaceBetween: 21,
    slidesPerView: 3,
    loop: true,

    pagination: {
        el: ".transform-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {slidesPerView: 1, spaceBetween: 10,},
        400: {slidesPerView: 1, spaceBetween: 10,},
        540: {slidesPerView: 1.3,},
        576: {slidesPerView: 1.5},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2.5},
        1139: {slidesPerView: 3},
        1200: {slidesPerView: 3},

    },


});



function initSwiper() {
    let reviewsSwiper;

    const isMobile = window.innerWidth <= 992;
    const direction = isMobile ? "horizontal" : "vertical";
    const delay = isMobile ? 4000 : 2000;

    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
    }

    reviewsSwiper = new Swiper(".reviews-swiper", {
        direction: direction,
        spaceBetween: 16,
        slidesPerView: 3,
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: delay,
            disableOnInteraction: false,
        },
        speed: 2000,

        breakpoints: {
            320: {slidesPerView: 1,},
            490: {slidesPerView: 1.2,},
            620: {slidesPerView: 1.5,},
            700: {slidesPerView: 1.5},
            897: {slidesPerView: 2},
            992: {slidesPerView: 2.6},
            1096: {slidesPerView: 3},
            1232: {slidesPerView: 3},
            1920: {slidesPerView: 3},
        },

    });
    const swiperContainer = document.querySelector(".reviews-swiper");

    if(swiperContainer){

        swiperContainer.addEventListener("mouseenter", () => {
            reviewsSwiper.autoplay.stop();
        });

        swiperContainer.addEventListener("mouseleave", () => {
            reviewsSwiper.autoplay.start();
        });
    }

}

initSwiper();

