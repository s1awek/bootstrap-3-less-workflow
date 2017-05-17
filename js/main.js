/* jslint browser:true */
/* global $:false, console:false */

$(document).ready(function($) {
  'use strict';
  // Toggle .collapsed class for animation of burger icon
  // $('.navbar-toggle').on('click', function() {
  //   $(this).toggleClass('collapsed');
  // });

  // Control SVG animoation at ABOUT_ME section
  setTimeout(function() {
    $('.img-bg').fadeIn(3000);
    $('.img-stroke').fadeOut(3000);
  }, 3000);

  $('.img-stroke').attr('src', 'img/abc_a.svg?' + Math.random()); // append random query string to animated SVG to prevent browser caching and skipping animation.

  // idea of determine scroll direction taken from:
  // http://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
  var lastScrollTop = 0;
  var scrollSpeed = 2.0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) { // if scroll down
      $('#projects-bg').addClass('projects');
      $('.img-bg').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
      $('.img-stroke').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
    } else { // if scroll up
      $('.img-bg').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
      $('.img-stroke').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
    }
    lastScrollTop = st;
  });
  // oppening and closing fake console on ABOUT_ME page
  $('.ui-x').click(function() {
    $('.console').css('display', 'none');
  });
  $('.ui-up').click(function() {
    $('.console').css({
      'height': '20px',
      'resize': 'none',
      'overflow': 'hidden',
      'padding': '13px'
    });
  });
  $('.ui-down').click(function() {
    $('.console').css({
      'height': '350px',
      'resize': 'both',
      'overflow': 'auto',
      'padding': '40px 5px 5px'
    });
  });

  $('.bio').textillate({
    loop: false,
    initialDelay: 0,
    autoStart: true,
    in: {
      effect: 'fadeInLeftBig',
      delayScale: 1.5,
      delay: 1,
      sync: false,
      shuffle: true,
      reverse: false
    },
    type: 'char'
  });

  $('.row-projects').AniView();

  $('.navbar-toggle').on('click', function() {
    if ($('.sidenav').hasClass('menu-hidden')) {
      $('.sidenav').toggleClass('menu-show menu-hidden');
      $('.navbar-toggle').toggleClass('collapsed');
      $('.sidenav').css({
        'transition': 'width 1s ease',
        'width': '250px'
      });
      $('.site-wrap').css({
        'transition': 'left 1s ease',
        'left': '250px'
      });
      $('.navbar-toggle').css({
        'transition': 'left 1s ease',
        'left': '180px'
      });
    } else {
      $('.sidenav').toggleClass('menu-show menu-hidden');
      $('.navbar-toggle').toggleClass('collapsed');
      $('.sidenav').css('width', '0px');
      $('.site-wrap').css('left', '0px');
      $('.navbar-toggle').css('left', '15px');
    }
  });
});
