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

  $('.img-stroke').attr('src', 'img/abc_gwiazdy.svg?' + Math.random()); // append random query string to animated SVG to prevent browser caching and skipping animation.

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
      $('.sun').css('top', '+' + Math.floor($(window).scrollTop() * 0.04) + 'px');
    } else { // if scroll up
      $('.img-bg').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
      $('.img-stroke').css('top', '-' + Math.floor($(window).scrollTop() * scrollSpeed) + 'px');
      $('.sun').css('top', '+' + Math.floor($(window).scrollTop() * 0.04) + 'px');
    }
    lastScrollTop = st;
  });
  // oppening and closing fake console
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
      'height': '340px',
      'resize': 'both',
      'overflow': 'auto',
      'padding': '40px 5px 5px'
    });
  });

  $('.bio').textillate({
    loop: false,
    initialDelay: 2500,
    autoStart: true,
    in: {
      effect: 'fadeInRightBig',
      delayScale: 1.5,
      delay: 5,
      sync: false,
      shuffle: false,
      reverse: false
    },
    type: 'char'
  });

  $('.console-wrapper, .img-wrapper', '.sun').AniView();

  $('.navbar-toggle').on('click', function() {
    var sunPositionMove = ($('.sun').position().left + 250) + 'px';
    var sunPositionBack = ($('.sun').position().left - 250) + 'px';
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
      $('.sun').css({
        'transition': 'left 1s ease',
        'left': sunPositionMove
      });
    } else {
      $('.sidenav').toggleClass('menu-show menu-hidden');
      $('.navbar-toggle').toggleClass('collapsed');
      $('.sidenav').css('width', '0px');
      $('.site-wrap').css('left', '0px');
      $('.navbar-toggle').css('left', '15px');
      $('.sun').css({
        'transition': 'left 1s ease',
        'left': sunPositionBack
      });
    }
  });

  if (!$('#myCanvas').tagcanvas({
      textColour: '#fff',
      outlineColour: 'transparent',
      reverse: true,
      depth: 0.3,
      maxSpeed: 0.1,
      initial: [0.030, 0.150],
      imageScale: 0.8,
      activeCursor: 'default',
      noSelect: true,
      wheelZoom: false

    }, 'tags')) {
    // something went wrong, hide the canvas container
    $('#myCanvasContainer').hide();
  }
  $('.cloud1-trigger').waypoint(function(direction) {
    console.log(direction);
    if (direction === 'down') {
      $('.cloud1').addClass('cloud1-vissible');
    } else {
      $('.cloud1').removeClass('cloud1-vissible');
    }
  });

  $('.cloud2-trigger').waypoint(function(direction) {
    if (direction === 'down') {
      $('.cloud2').addClass('cloud2-vissible');
    } else {
      $('.cloud2').removeClass('cloud2-vissible');
    }
  });

  $('.cloud3-trigger').waypoint(function(direction) {
    if (direction === 'down') {
      $('.cloud3').addClass('cloud3-vissible');
    } else {
      $('.cloud3').removeClass('cloud3-vissible');
    }
  });
});
