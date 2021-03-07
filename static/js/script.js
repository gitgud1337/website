// INTRO
let intro = document.querySelector('.splash');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {

        logoSpan.forEach((img, idx)=>{
            setTimeout(()=>{
                img.classList.add('active');
            }, (idx + 1) * 888)
        });

        setTimeout(()=>{
            logoSpan.forEach((img, idx)=>{
                setTimeout(()=>{
                    img.classList.remove('active');
                    img.classList.add('fade');
                }, (idx + 1) * 888)
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 4444);

    });
});


// CURSOR
$(document).mousemove(function (e) {
    $('.pointer').css({ left: e.pageX, top: e.pageY });
})


// OTHER
