$(function () {

  var $body = $('body');
  var $sideL = $('.side-left');
  var $payBox = $('.pay-box');
  var windowWidth = $(window).width();
  var $buttonSetPromo = $('.js-set-promo');
  var $promoInput = $('.js-promo-input');
  var $scrollTo = $('.js-scroll-to');

  var PROMO_CODE = 'MDAdesignonline';

  $body.addClass('index-page');

  /**
   * set min height to side left of top section
   */
  function setHeightSideLeft() {
    var payBoxHeight = $payBox.height();
    $sideL.css('min-height', payBoxHeight+'px');
  }
  setHeightSideLeft();

  /**
   * set promo code to form
   */
  $buttonSetPromo.on('click', function (e) {
    e.preventDefault();

    scrollTo($('#pay-box'), 0);

    $promoInput.val(PROMO_CODE).trigger('change');
  });

  /**
   * scroll to block
   */
  $scrollTo.on('click', function (e) {
    e.preventDefault();
    var hrefId = $('#'+$(this).attr('href'));

    if (hrefId)
      scrollTo(hrefId, 0);

  });


  $(window).on('resize', function () {
    windowWidth = $(window).width();
    setHeightSideLeft();
  });

  /**
   * scroll to block
   * @param selector
   */
   function scrollTo(selector, offset, time, scrollElem, position) {
    if (time != 0) {
      time = 500;
    }

    setTimeout(function () {
      !offset ? offset = 0 : offset;
      if (!position == true){
        var scroll = $(selector).offset().top - offset;
      } else {
        var scroll = $(selector).position().top - offset;
      }

      if (!scrollElem){
        scrollElem = $('html,body');
      }
      scrollElem.animate({
        scrollTop: scroll
      }, time);
    }, 10);
  };

});
