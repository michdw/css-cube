$(document).ready(function() {

  function tiltCube(div, tilt, reset) {
    $(div).hover(function() {
      $('.cube').removeClass('resetUp resetDown resetLeft resetRight resetUpLeft resetUpRight resetDownLeft resetDownRight').addClass(tilt);
    }, function() {
      setTimeout(function() {
        $('.cube').removeClass('tiltUp tiltDown tiltLeft tiltRight tiltUpLeft tiltUpRight tiltDownLeft tiltDownRight').addClass(reset);
      }, 100);
      setTimeout(function() {
        $('.cube').removeClass(reset);
      }, 400);
    });
  }

  function clickAnimation(dot, spin) {
    dot.on('click', function() {
      $('.cube').addClass(spin);
      $('.direction').fadeOut();
      setTimeout(function() {
        $('.cube').removeClass(spin);
        $('.direction').fadeIn();
      }, 1250);
    });
  }

  $('.cube, .direction').on('mouseover', function() {
    $('.instructions').delay(1000).fadeOut(200);
  });

  tiltCube($('.north'), 'tiltDown', 'resetDown');
  tiltCube($('.south'), 'tiltUp', 'resetUp');
  tiltCube($('.west'), 'tiltRight', 'resetRight');
  tiltCube($('.east'), 'tiltLeft', 'resetLeft');
  tiltCube($('.nw'), 'tiltDownRight', 'resetDownRight');
  tiltCube($('.ne'), 'tiltDownLeft', 'resetDownLeft');
  tiltCube($('.sw'), 'tiltUpRight', 'resetUpRight');
  tiltCube($('.se'), 'tiltUpLeft', 'resetUpLeft');
  clickAnimation($('.top'), 'spinDown');
  clickAnimation($('.bottom'), 'spinUp');
  clickAnimation($('.left'), 'spinRight');
  clickAnimation($('.right'), 'spinLeft');

  $('.front').on('click', function() {
    $('.cube').addClass('spinDiagonal');
    $('.direction').fadeOut();
    setTimeout(function() {
      $('.cube').removeClass('spinDiagonal');
      $('.direction').fadeIn();
    }, 1050);
  });

});
