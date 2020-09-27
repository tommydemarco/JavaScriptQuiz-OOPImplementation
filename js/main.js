$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

//animation part
(function(){
    document.addEventListener("DOMContentLoaded", function(){
        var invisibleElements = document.querySelectorAll('.invisible-element');
        var i = 0;
        for (i; i<invisibleElements.length; i++){
            invisibleElements[i].classList.add('animate__animated')
            invisibleElements[i].classList.add('animate__backInUp')
        }
        var invisibleTitle = document.querySelector('.invisible-title');
        invisibleTitle.classList.add('animate__animated')
        invisibleTitle.classList.add('animate__backInDown')
    });
})();


jQuery(document).ready(function () {
    if ($(window).scrollTop() > 10) {
        $('.navbar').addClass('active');
    } else {
        $('.navbar').removeClass('active');
    }
});
