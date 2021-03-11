// INTRO
// let intro = document.querySelector('.splash');
// let logoSpan = document.querySelectorAll('.logo');

// window.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {

//         logoSpan.forEach((img, idx) => {
//             setTimeout(() => {
//                 img.classList.add('active');
//             }, (idx + 1) * 777)
//         });

//         setTimeout(() => {
//             logoSpan.forEach((img, idx) => {
//                 setTimeout(() => {
//                     img.classList.remove('active');
//                     img.classList.add('fade');
//                 }, (idx + 1) * 777)
//             })
//         }, 2000);

//         setTimeout(() => {
//             intro.style.top = '-100vh';
//         }, 4444);

//     });
// });


// CURSOR
$(document).mousemove(function (e) {
    $('.pointer').css({ left: e.pageX, top: e.pageY });
})

// MAKE ARTISTS TEXT IN NAVBAR BIGGER ON MOUSEENTER
let items = document.querySelectorAll('.artistButton');

items.forEach((link, i) => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('bigger');
    })
    link.addEventListener('mouseleave', () => {
        link.classList.remove('bigger');
    })
})

// SCROLL DOWN TO ARTIST COLUMN
$(".artistButton").click(function () {
    $('html,body').animate({
        scrollTop: $(".artistsTitle").offset().top
    },
        'slow');
});