/*jslint browser:true */
/*global $:false, jQuery:false, console:false */

$(document).ready(function ($) {
    'use strict';
    //Toggle .collapsed class for animation of burger icon
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('collapsed');
    });

    //Control SVG animoation at ABOUT_ME section
    setTimeout(function () {
        $('.img-bg').fadeIn(3000);
        $('.img-stroke').fadeOut(3000);
    }, 3000);


    //idea of determining scroll direction taken from:
    //http://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
    var lastScrollTop = 0,
        scrollSpeed = 2.0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) { //if scroll down
            $('.img-bg').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
            $('.img-stroke').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
        } else { //if scroll up
            $('.img-bg').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
            $('.img-stroke').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
        }
        lastScrollTop = st;
    });

    $('.ui-x').click(function () {
        $('.console').css('display', 'none');
    });
    $('.ui-down').click(function () {
        $('.console').css({
            'height': '20px',
            'resize': 'none',
            'overflow': 'hidden',
            'padding': '13px'
        });


    });
    $('.ui-up').click(function () {
        $('.console').css({
            'height': '350px',
            'resize': 'both',
            'overflow': 'auto',
            'padding': '40px 5px 5px'
        });


    });


});
