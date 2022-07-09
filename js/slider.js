$(document).ready(function() {
    $('.slider').slick({
arrows:false,
dots:true,
appendDots:'.slider-dots',
dotsClass:'dots'
    });

let hamburger=document.querySelector('.hamburger');
let times=document.querySelector('.times');
let mobilenav=document.querySelector('.mobile-nav');
let onclick=document.querySelector('.onclick')
let onclick2=document.querySelector('.onclick2')
let onclick3=document.querySelector('.onclick3')
let onclick4=document.querySelector('.onclick4')

hamburger .addEventListener('click', function(){
mobilenav.classList.add('open');
});

times .addEventListener('click', function(){
mobilenav.classList.remove('open');
});
onclick .addEventListener('click', function(){
    mobilenav.classList.remove('open');
    });
onclick2 .addEventListener('click', function(){
    mobilenav.classList.remove('open');
    });
onclick3 .addEventListener('click', function(){
    mobilenav.classList.remove('open');
    });
onclick4 .addEventListener('click', function(){
    mobilenav.classList.remove('open');
    });

});
