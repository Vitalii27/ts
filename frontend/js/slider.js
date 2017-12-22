// jQuery(function($) {
//     // arrow icons
//     var arrowLeft = '<img src="assets/images/content/slidearrow.svg" alt="arrow">';
//     var arrowRight = '<img src="assets/images/content/slidearrow.svg" alt="arrow">';

//     // preset options

//     var welcomeSlider = $('.js-welcome');
//     var welcomeOption = {
//         autoplay: true,
//         autoplaySpeed: 3000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         dots: false,
//         infinite: true,
//         fade: true,
//         cssEase: 'linear',
//         swipeToSlide: true,
//         accessibility: false // prevent page scroll up on autoplay
//     };

//     var partnersSlider = $('.js-partners-slide');
//     var partnersOption = {
//         slidesToShow: 5,
//         slidesToScroll: 5,
//         autoplaySpeed: 2000,
//         nextArrow: '<button type="button" class="slider_btn--next slider_btn">' + arrowRight + ' </button>',
//         prevArrow: '<button type="button" class="slider_btn--prev slider_btn">' + arrowLeft + '</button>',
//         infinite: true,
//         responsive: [{
//             breakpoint: 1600,
//             settings: {
//                 slidesToShow: 5,
//             }
//         }, {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 4,
//             }
//         }, {
//             breakpoint: 998,
//             settings: {
//                 slidesToShow: 3,
//             }
//         }, {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//             }
//         }, {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 dots: true
//             }
//         }]
//     }

//     // $('.welcome_slide').on('фаеукChange', function(event, slick, currentSlide, nextSlide) {
//     //     // welcomeSlider.slick(welcomeOption);
//     // });
//     welcomeSlider.slick(welcomeOption);
//     partnersSlider.slick(partnersOption);

// }); // ready
// // windowSize()