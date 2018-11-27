var runAfter = [];

jQuery(function ($) {

  $('.has-childs li.off').on('click', function () {
    return false;
  });

  $('.has-childs > ul > li').on('click', function () {
    if (!$(this).hasClass('opened')) {
      $('.has-childs > ul > li.opened').find('.smenu').slideUp();
      $('.has-childs > ul > li').removeClass('opened');

      $(this).addClass('opened');
      $(this).find('.smenu').slideDown();
    }
    else {
      $(this).removeClass('opened');
      $(this).find('.smenu').slideUp();
    }
  });

  $('.nav-select .drop-menu > ul > li').on('mouseenter', function () {
    $(this).children('a').next('.submenu').fadeIn();
    $(this).children('a').addClass('active');
  });

  $('.nav-select .drop-menu > ul > li').on('mouseleave', function () {
    $(this).children('a').next('.submenu').fadeOut();
    $(this).children('a').removeClass('active');
  });

  $('[data-href]').on('click', function () {
    window.location.href = $(this).attr('data-href');
  });


  if ($.flexslider) {

    $('.faces_carousel.flexslider').flexslider({
      animation: "slide",
      controlNav: false,
      prevText: "",
      nextText: ""
    });


    $('#reviews-list .flexslider').flexslider({
      animation: "slide",
      controlNav: false,
      prevText: "",
      nextText: ""
    });
  }

  var $formTypeField = $('.pay-box input[name="form-type"]');
  var $lessonDateField = $('.pay-box input[name="lesson-date"]');


/*  $('.liveform .full-price span').click(function (e) {

    $('.pay-box .liveform, .pay-box .onlineform, .pay-box .hint2').fadeOut(300);
    setTimeout(function () {
      $('.pay-box .liveform-full, .pay-box .hint2').fadeIn();
    }, 600);

    $formTypeField.val($formTypeField.data('formtypes')['liveform-full']);
    $lessonDateField.val($lessonDateField.data('formtypes')['liveform-full']);

  });

  $('.liveform-full .full-price span').click(function (e) {

    $('.pay-box .liveform-full, .pay-box .onlineform, .pay-box .hint2').fadeOut(300);
    setTimeout(function () {
      $('.pay-box .liveform, .pay-box .hint2').fadeIn();
    }, 600);

    $formTypeField.val($formTypeField.data('formtypes')['liveform']);
    $lessonDateField.val($lessonDateField.data('formtypes')['liveform']);

  });*/

  var $formPayment = $("#id-form-payment");
  var promoServed = '';
  var promoTm = null;

  $("#placeSelector").find("INPUT[name=place]").on("click localclick", function () {
    var cId = $(this).val();
    $formTypeField.val(cId);
    $(".liveform-full .tip-date").addClass('hidden');
    $(".liveform-full .priceform").addClass('hidden');
    $(".liveform-full .tip-date-"+cId).removeClass('hidden');
    $(".liveform-full .priceform"+cId).removeClass('hidden');
    $formPayment.find(".liveform-full INPUT[name=code]").trigger("localchange");
  });


  $('.smenu li').on("click localclick", function (e) {
    if (!$(this).hasClass('active')) {
      $(this).siblings("LI").removeClass('active');
      $(this).addClass('active');
    }
  });

  $('.payment .sm .smenu li').on("click localclick", function (e) {
    if ($(this).index() === 0) {

      $('.pay-box .liveform, .pay-box .onlineform, .pay-box .hint2').fadeOut(300);
      setTimeout(function () {
        $('.pay-box .liveform-full, .pay-box .hint2').fadeIn();
      }, 600);

      var cId = $("#placeSelector").find("INPUT[name=place]:checked").val();
      //$formTypeField.val($formTypeField.data('formtypes')['liveform-full']);
      $formTypeField.val(cId);
      //$lessonDateField.val($lessonDateField.data('formtypes')['liveform-full']);

      $formPayment.find(".liveform-full INPUT[name=code]").trigger("localchange");

//				$('.pay-box .liveform-full, .pay-box .onlineform').addClass('hidden');
//				$('.pay-box .liveform').removeClass('hidden');
    }
    if ($(this).index() === 1) {

      $('.pay-box .liveform-full, .pay-box .liveform, .pay-box .hint2').fadeOut(300);
      setTimeout(function () {
        $('.pay-box .onlineform, .pay-box .hint2').fadeIn();
      }, 600);

      $formTypeField.val($formTypeField.data('formtypes')['onlineform']);
      //$lessonDateField.val($lessonDateField.data('formtypes')['onlineform']);

      $formPayment.find(".onlineform INPUT[name=code]").trigger("localchange");

//				$('.pay-box .liveform, .pay-box .liveform-full').addClass('hidden');
//				$('.pay-box .onlineform').removeClass('hidden');
    }
  });

/*  $('.live-btn').click(function (e) {

    $('.smenu li').removeClass('active');
    $('.smenu li:first-child').addClass('active');

    $('.pay-box .liveform, .pay-box .onlineform').fadeOut(0);
    $('.pay-box .liveform-full').fadeIn(0);

    $formTypeField.val($formTypeField.data('formtypes')['liveform']);
    $lessonDateField.val($lessonDateField.data('formtypes')['liveform']);

    $('body,html').animate({
      scrollTop: $('.payment .smenu').offset().top
    }, 800);

    return false;
  });*/

  $('.online-btn').click(function (e) {

    $('.smenu li').removeClass('active');
    $('.smenu li:last-child').addClass('active');

    $('.pay-box .liveform-full, .pay-box .liveform').fadeOut(0);
    $('.pay-box .onlineform').fadeIn(0);

    $formTypeField.val($formTypeField.data('formtypes')['onlineform']);
    $lessonDateField.val($lessonDateField.data('formtypes')['onlineform']);

    $('body,html').animate({
      scrollTop: $('.payment .smenu').offset().top
    }, 800);

    return false;
  });

  $('.m-button, .more-button.y-button.anime.anchor, .animated-scroll').click(function (e) {

    var link = $(this).attr('href');

    if (link.substr(0, 1) !== '#') {
      return true;
    }

    var self = this;
    if (link == '#form-trial') {
      $("#for-form-trial").trigger("localclick", [true]);
    }
    if (link == '#form-trial2') {
      $("#for-form-trial2").trigger("localclick", [true]);
    }
    setTimeout(function () {
      $('body,html').animate({
        scrollTop: $($(self).attr('href')).offset().top - 50
      }, 800);
    }, 10);

    return false;
  });


  $("INPUT[name=code]", $formPayment).on("change paste input keyup localchange", function () {
    var $this = $(this);
    if (promoTm) {
      clearTimeout(promoTm);
    }
    promoTm = setTimeout(function () {
      promoTm = null;
      var code = $.trim($this.val());
      //if (promoServed == code) {
      //  return true;
      //}
      var formId = $formTypeField.val();
      $this.siblings(".promo-message").remove();
      promoServed = code;
      if (code) {
        $.ajax('/assets/promo.php', {
          data: {'formid': formId, 'code': code},
          dataType: "json",
          success: function (data) {
            if (data.status == 'error') {
              $this.removeClass("vld").addClass("invalid");
              $this.after('<div class="promo-message">' + data.error + '</div>');
            } else {
              $this.removeClass("invalid").addClass("vld");
              $("INPUT[name=validPromo]", $formPayment).val(code);
              $this.after('<div class="promo-message">Промокод применен</div>');
            }
            $(".priceform" + formId, $formPayment).html(data.price);
          }
        });
      } else {
        $this.removeClass("invalid vld");
      }
    }, 400);
  });

  var dt = new Date();
  var timeZone = dt.getTimezoneOffset();
  timeZone = 0 - Math.round(timeZone / 60 * 10) / 10;
  $("FORM").find("INPUT[name=timezone]").val(timeZone > 0 ? 'UTC+' + timeZone : 'UTC' + timeZone);

  for (var i = 0; i < runAfter.length; i++) {
    runAfter[i].call(this);
  }
});

$(function () {

  $('.i-video .play').on('click', function (ev) {

    var yt = $(this).next('.yt');

    $(this).hide(0);
    $(this).next().next('.vd').remove();

    video = '<iframe src="' + yt.attr('data-video') + '" frameborder="0" allowfullscreen></iframe>';
    yt.html(video);
    yt.css('opacity', 1);
    ev.preventDefault();
  });

});


function processGeo(name) {
  var moscowCity = ['Зеленоград', 'Андреевка', 'Лобня', 'Долгопрудный', 'Химки', 'Мытищи', 'Пушкино', 'Ивантеевка', 'Королев',
    'Щелково', 'Фрязино', 'Лосино-Петровский', 'Балашиха', 'Старая Купавна', 'Реутов', 'Электроугли', 'Люберцы', 'Котельники',
    'Дзержинский', 'Жуковский', 'Раменское', 'Лыткарино', 'Бронницы', 'Видное', 'Домодедово', 'Подольск', 'Щербинка',
    'Апрелевка', 'Московский', 'Газопровод', 'Мосрентген', 'Троицк', 'Краснознаменск', 'Голицыно', 'Одинцово', 'Звенигород',
    'Красногорск', 'Дедовск', 'Нахабино', 'Электросталь', 'Ногинск'];

  var Msk = /Москва/.test(name);
  var Spb = /Петербург/.test(name);
  //var Spb = true; Msk = false;
  if (!Msk && !Spb && /Московская\s+обл/.test(name)) {
    moscowCityLen = moscowCity.length;
    for (var i = 0; i < moscowCityLen; i++) {
      var rg = new RegExp(moscowCity[i]);
      if (rg.test(name)) {
        Msk = true;
        break;
      }
    }
  }

  if (typeof(window.spbSupport) !== 'undefined' && window.spbSupport && Spb) {
    runAfter.push(function () {
      $("#for-form-trial3").trigger("localclick", [true]);
      $('.payment .sm .smenu li:eq(0)').trigger("localclick");
      $('#radio-2').attr('checked', 'checked').trigger('localclick');

      $(".geo-text").each(function () {
        var $this = $(this);
        var newtext = $this.data('geo-text-spb');
        $this.html(newtext);
      });
      $(".geo-href").each(function () {
        var $this = $(this);
        var newtext = $this.data('geo-href-spb');
        $this.attr("href", newtext);
      });
      $(".geo-block-spb-hide").hide();
    });

  } else if (!Msk) {
    runAfter.push(function () {
      $("#for-form-trial2").trigger("localclick", [true]);
      $('.payment .sm .smenu li:eq(1)').trigger("localclick");

      $(".geo-text").each(function () {
        var $this = $(this);
        var newtext = $this.data('geo-text');
        $this.html(newtext);
      });
      $(".geo-href").each(function () {
        var $this = $(this);
        var newtext = $this.data('geo-href');
        $this.attr("href", newtext);
      });
      $(".geo-block-hide").hide();

      $("#record-button-text").html("Получить урок бесплатно");
      $("#record-button-text").closest("A").attr("href", "#form-trial2");
    });
  }

  $("FORM").find("INPUT[name=city]").val(name);
  $("#city2").addClass("vld");
}


var matches = document.cookie.match(new RegExp("(?:^|; )geotext=([^;]*)"));
var geotext = matches ? decodeURIComponent(matches[1]) : undefined;

if (geotext) {
  processGeo(geotext);
}
if (ymaps && !geotext) {
  ymaps.ready(function init() {
    var geolocation = ymaps.geolocation;
    geolocation.get({
      provider: 'yandex',
      autoReverseGeocode: true,
      kind: 'locality'
    }).then(function (result) {
      if (result.geoObjects && result.geoObjects.get(0)) {
        var obj = result.geoObjects.get(0).properties.get('metaDataProperty');
        var name = obj.GeocoderMetaData.text;
        var d = new Date();
        d.setTime(d.getTime() + 2 * 3600 * 1000); // 2h
        document.cookie = 'geotext=' + encodeURIComponent(name) + '; expires=' + d.toUTCString();
        processGeo(name);
      }
    });
  });
}