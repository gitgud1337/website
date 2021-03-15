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
let artistButton = document.querySelector('.artistButton');
let landingCol = document.querySelectorAll('.landingPageCol');
// let artistCol = document.querySelectorAll('.ar');

let card = document.querySelector('.cardRow');
artistButton.addEventListener('mousedown', e => {
    card.classList.add('test');
})

artistButton.addEventListener('mouseenter', e => {
    artistButton.classList.add('bigger');
})
artistButton.addEventListener('mouseleave', e => {
    artistButton.classList.remove('bigger');
})

artistButton.addEventListener('mousedown', e => {
    landingCol.forEach((div, divX) => {
        div.classList.add('remove');
    });
})

// artistButton.addEventListener('mousedown', e => {
//     artistCol.forEach((div, divX) => {
//         div.classList.add('moveUp');
//     });
// })

//SCROLL DOWN TO ARTIST COLUMN
// $(".artistButton").click(function () {
//     $('html,body').animate({
//         scrollTop: $(".artistsTitleCol").offset().top
//     },
//         'slow');
// });

// REMOVE LOGO AND INFO


// FADE IN ARTISTS