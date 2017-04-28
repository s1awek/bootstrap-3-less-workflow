/*jslint browser:true */
/*global $:false, jQuery:false */

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

});
