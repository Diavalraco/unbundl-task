document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        startAt: 0,
        perView: 1,
        gap: 0,
        autoplay: 1500,
        hoverpause: true,
        breakpoints: {
            600: {
                perView: 1
            },
            1000: {
                perView: 1
            },
            1400: {
                perView: 1
            }
        }
    }).mount();
});
