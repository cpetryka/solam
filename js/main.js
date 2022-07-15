
// OwlCarousel
$('.projects-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 8000,
    responsive: {
        0: {
            items: 1
        },
        520: {
            items: 2
        },
        800: {
            items: 3
        },
        1100: {
            items: 4
        }
    }
})

$('.partners-carousel').owlCarousel({
    loop: true,
    margin: 60,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
})

// CountTo
$(document).ready(function () {
    $('.timer').viewportChecker({
        callbackFunction: function (elem, action) {
            elem.countTo({
                speed: 2500
            });
        }
    });
});