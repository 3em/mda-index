$(function () {

    window.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                    args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    };

//  $('form button').click(function(e){
//    e.preventDefault();
//    var ths = $(this);
//    if ( typeof ths.parent().find('.invalid')[0] == 'undefined' || ) {
//      console.log(ths.closest('form').serialize());
//      var file = ths.closest('form').attr("action");
//      $.post(file, ths.closest('form').serialize());
//      ths.closest('form').trigger('reset');
//      $('.js-validate').jvalidate();
//    }
//  });

    $('.js-promo .btn_small, nav .scrolllink').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('body,html').animate({
            scrollTop: $(this.getAttribute('href')).offset().top
        }, 800);
    });
    
    $('#header-big-btn').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('body,html').animate({
            scrollTop: $(this.getAttribute('href')).offset().top
        }, 800);
    });

    $('.js-faq').each(function () {
        initFaq(this);
    });

    $('.js-faces_carousel').each(function () {
        initFacesCarousel(this);
    });

    if ($('.js-promo').length) {
        initPromo();
    }

    $('.js-shedule_includes_list').each(function () {
        initSheduleIncludesList(this);
    });

    $('.js-statistic').each(function () {
        var block = $(this);

        block.on('animateIn', function () {

            initStatistic(block);

        }).on('animateOut', function () {

        });

        $(window).scroll(function () {

            var top = block.offset().top;
            var bottom = block.height() + top;
            top = top - $(window).height();
            var scroll_top = $(this).scrollTop();


            if ((scroll_top > top) && (scroll_top < bottom)) {
                if (!block.hasClass('animate')) {
                    block.addClass('animate');
                    block.trigger('animateIn');
                }
            } else {
                //block.removeClass('animate');
                //block.trigger('animateOut');
            }
        });
    });

    //$('.js-animate').each(function() {
    //    var block = $(this);
    //
    //    block.on('animateIn', function () {
    //        var inter = 0;
    //        $(this).find('.anim').each(function (index) {
    //            var block = $(this);
    //            setTimeout(function(){
    //                block.addClass('animateIn');
    //            },index*400);
    //
    //
    //        });
    //    }).on('animateOut', function () {
    //        $(this).find('.anim').each(function () {
    //            var block = $(this);
    //            block.removeClass('animateIn');
    //        });
    //    });
    //
    //    $(window).scroll(function() {
    //
    //        var top = block.offset().top;
    //        var bottom = block.height()+top;
    //        top = top - $(window).height();
    //        var scroll_top = $(this).scrollTop();
    //
    //
    //        if ((scroll_top> top) && (scroll_top < bottom)) {
    //            if (!block.hasClass('animate')) {
    //                block.addClass('animate');
    //                block.trigger('animateIn');
    //            }
    //        } else {
    //            block.removeClass('animate');
    //            block.trigger('animateOut');
    //        }
    //    });
    //});

    $('.js-tabs').each(function () {
        initTabs(this);
    });

    $('.js-work_carousel').each(function () {
        initWorkCarousel(this);
    });

//    $('.work_carousel.js-work_carousel').initGallery();

});

$.fn.extend({
    initGallery: function () {


        // For each galleries
        this.each(function () {

            $('body').click(function (event) {
                var galleryContainer = $('.galleryContainer');
                if (galleryContainer.length && !$(event.target).closest('.work_carousel').length && !$(event.target).closest('.galleryContainer').length) {

                    galleryContainer.fadeOut({
                        duration: 300,
                        complete: function () {
                            galleryContainer.remove();
                        }
                    });
                    $('.work_carousel .overshadow').fadeOut();
                }

            });

            var car = $(this),
                overlay = car.find('.overshadow'),
                items = car.find('.item'),
                contentBox = items.closest('.work_carousel'),
                duration = 200,
                currentItemIndex = 0,
                isYoutube = false;
                        
            if (!isMobile.any()) {



                // Click for eny image/video
                items.click(function () {
                    item = $(this);
                    if (item.closest('.ui-draggable-dragging').length)
                        return;

                    currentItemIndex = item.index();

                    //Create container, overlay and controlls
                    var galleryContainer = $('<div class="galleryContainer image-' + $(this).index() + '"/>')
                            .css({
                                width: '100%',
                                position: 'absolute',
                                height: 622,
                                top: item.position().top,
                                left: item.position().left,
                                zIndex: 50,
                                width: '100%'
                            })
                            .appendTo(contentBox);

                    var closeControll = $('<div class=cntclose><i/></div>')
                            .click(function () {
                                overlay.fadeOut(duration);
                                galleryContainer.fadeOut({
                                    duration: duration,
                                    complete: function () {
                                        galleryContainer.remove();
                                    }
                                });
                            })
                            .appendTo(galleryContainer);

                    overlay.fadeIn(300);

                    // video and image - different galleries
                    isYoutube = item.find('.youtube').length > 0;
                    if (!isYoutube) {

                        var leftControll = $('<div class=cntleft><i/></div>').click(PrevSlide).appendTo(galleryContainer);
                        // Clone image
                        var cloneItem = item
                                .find('img').clone()
                                .appendTo(galleryContainer)
                                .height('100%')
                                .click(NextSlide);

                        fullWidth = cloneItem.outerWidth();


                        initDrag(cloneItem);

                        // "Swipe" effect
                        function initDrag(img) {
                            var currentLeft;

                            img.draggable({
                                containment: "parent",
                                drag: function (event, ui) {

                                    // On drag change opacity of element
                                    opacity = 1 - (Math.abs(currentLeft - ui.offset.left) / 300);

                                    if (opacity > 0)
                                        $(event.toElement).css('opacity', opacity);

                                },
                                start: function (event, ui) {
                                    // Set left position
                                    currentLeft = ui.offset.left;

                                },
                                stop: function (event, ui) {
                                    elem = $(event.toElement);
                                    // after drag disable standart click event for image
                                    elem.unbind('click');

                                    // Detect swipe rotation
                                    if (currentLeft > ui.offset.left)
                                        $slided = NextSlide();
                                    else
                                        $slided = PrevSlide();

                                    // if change slide returns false 
                                    // posiiton image to first place
                                    if (!$slided) {
                                        $(event.toElement).animate({left: 0, opacity: 1}, duration);
                                    }

                                }
                            });
                        }



                        // Animate container after add
                        galleryContainer.height(311).animate({
                            'height': 622,
                            'left': '50%',
                            'top': 0,
                            'margin-left': -fullWidth / 2
                        }, duration, 'linear', function () {
                            galleryContainer.css({
                                'text-align': 'center',
                                'left': 0,
                                'margin-left': 0
                            });
                            setControllPosition(cloneItem);
                        });



                        // Switch slide to next fun
                        function NextSlide() {

                            if (currentItemIndex + 1 == items.length)
                                return;
                            else
                                currentItemIndex++;

                            newItem = items.eq(currentItemIndex);
                            if (newItem.find('.youtube').length)
                                return NextSlide();

                            changeSlide(newItem, 'left', currentItemIndex + 1 !== items.length);
                            return true;
                        }
                        // Switch slide to prev fun
                        function PrevSlide() {

                            if (currentItemIndex == 0)
                                return false;
                            else
                                currentItemIndex--;

                            newItem = items.eq(currentItemIndex);
                            if (newItem.find('.youtube').length)
                                return PrevSlide();

                            changeSlide(newItem, 'right', currentItemIndex !== 0);
                            return true;
                        }

                        // Change slide fun 
                        function changeSlide(newItem, rotation) {

                            newSrc = newItem.find('img').prop('src');

                            var oldImg = galleryContainer.find('img');
                            oldImg.css({
                                position: 'absolute',
                                top: 0,
                                left: '50%',
                                marginLeft: -oldImg.outerWidth() / 2,
                                zIndex: 9999
                            }).animate({
                                'margin-left': rotation == 'left' ? -oldImg.outerWidth() / 1.5 : oldImg.outerWidth() / 1.5,
                                opacity: 0
                            }, duration, 'linear', function () {
                                oldImg.remove();
                            });

                            newImg = $('<img/>', {src: newSrc})
                            galleryContainer.append(newImg);
                            newImg.css({zIndex: 9998, right: rotation == 'left' ? '-300px' : '300px', opacity: 0}).click(NextSlide);
                            newImg.animate({right: 0, opacity: 1}, duration);

                            initDrag(newImg);
                            setControllPosition(newImg);
                        }
                    } else {
                        // add video box
                        $('<div id=video_frame><div id=youtube_frame/></div>').appendTo(galleryContainer);
                        galleryContainer.css({
                            'text-align': 'center',
                            'left': 0,
                            'margin-left': 0
                        });
                        setControllPosition($('#video_frame'));

                        // load video
                        initVideoPlayer(item.find('.youtube').data('videoid'));


                    }

                    // Set left and right position of controlls
                    function setControllPosition(item) {
                        offset = 15;
                        position = (item.outerWidth() / 2) + offset;

                        if (leftControll)
                            leftControll.find('i').css('right', position);
                        closeControll.find('i').css('left', position);
                    }
                });

            } else {
                
                items.click(function () {
                    if ($(this).find('.youtube').length){
                        frame = $('<div id=mobile_frame><div id=youtube_frame/></div>').appendTo(car);
                        $('<i/>').appendTo(frame).click(function() {
                            frame.remove();
                        });
                        initVideoPlayer($(this).find('.youtube').data('videoid'));
                    }
                    
                });
            }

        });

        // for video box init
        function initVideoPlayer(videoid) {
            var player;
            player = new YT.Player('youtube_frame', {
                videoId: videoid,
                width: '100%',
                height: '100%'
            });

        }
    }
});

function initWorkCarousel(obj) {

    if (isMobile.any() || $(window).width() <= 1024) {
//        return;
    }
    var $car = $(obj);
    var $list = $car.find('.list');
    var $in = $car.find('.in');
    var w = 0;
    var windowWidth = $(window).width();


    $car.onImagesLoad({
        selectorCallback: function () {

            clearfixIndex = $list.find('.clearfix').length ? $list.find('.clearfix').index() : Number.POSITIVE_INFINITY;
            $list.find('.item').each(function () {
                if ($(this).index() > clearfixIndex)
                    return false;

                w += $(this).outerWidth();
            });

            fullwidth = w + w - windowWidth;
            $in.width(fullwidth).css('left', '-' + (w - windowWidth) + 'px');
			var start, stop;


            var dd = $list.draggable({
				axis: "x",
                containment: "parent",

				drag: function (event, ui) {
/*
				current = ui.position.left;
				if (Math.abs(start-current) == 0)
				{
					// vertical
					dd.draggable('disable');
					console.log('drug::disable');
				}
*/
                },
                start: function (event, ui) {
//					start = ui.position.left;
                },
                stop: function (event, ui) {

//					stop = ui.position.left;
//					dd.draggable('enable');
//					console.log('stop::enable');
					
                    $(event.toElement).one('click', function (e) {
                        e.stopImmediatePropagation();
                    });
                }
            }).css('left', (w - windowWidth) + 'px');

			if ($(window).width() <= 1024)
			{
				dd.draggable('disable');
				$('.work_carousel').addClass('scroll');

			}
			else
			{
				dd.draggable('enable');
				$('.work_carousel').removeClass('scroll');
			}

        }
    });

}

function initTabs(obj) {
    var $tabs = $(obj);
    var $fields = $tabs.find('.link');
    var $active = $fields.filter('.active');
    var clicked = false;

    $tabs.on('click localclick', '.link', function (event, fast) {

        event.preventDefault();
        if ($active[0] == this || clicked) {
            return
        }
        clicked = true;
        $active.removeClass('active');
        var $old = $($active.attr('href')).addClass('tab_hide');
        $active = $(this).addClass('active');

       setTimeout(function () {

    	    var $new = $($active.attr('href')).removeClass('hidden').addClass('tab_show');

	        if ($new.parent().height() < $new.outerHeight()) {
            	$new.parent().height($new.outerHeight());
        	}
    	    setTimeout(function () {
	            $old.removeClass('tab_hide tab_active').addClass('hidden');
            	$new.removeClass('tab_show').addClass('tab_active');
        	    $new.parent().css('height', '');
    	        clicked = false;
	        }, fast ? 0 : 500);
       }, fast ? 0 : 500);

    });
}

function initStatistic($obj) {

    var $chart = $obj.find('.chart');
    var $result = $obj.find('.result');
    var value = parseInt($chart.attr('data-value'));
    var percent = parseInt($chart.attr('data-percent'));
    var full = value * 100 / percent;
    //70 100
    //142 100
    //100 70

    $chart.easyPieChart({
        easing: 'ease',
        lineWidth: 3,
        scaleColor: false,
        size: 278,
        trackColor: '#505050',
        barColor: $chart.attr('data-bar-color'),
        onStep: function (from, to, percent) {
            var result = Math.round(full * percent / 100);
            var resultHtml = result.toString().split('');
            var html = '';
            for (var item in resultHtml) {
                if (item == 0 && parseInt(resultHtml[item]) == 1) {
                    html += '<span class="one">1</span>'
                } else {
                    html += resultHtml[item];
                }
            }
            $result.html(html);
        }
    });
}

function initSheduleIncludesList(obj) {
    $(obj).on('click', '.in', function () {
        $(this).parent().toggleClass('active').find('.sub').slideToggle('fast');
    });


}

function initPromo() {
    var $promo = $('.js-promo');
    var $window = $(window);
    $window.scroll(function () {

        if (($window.scrollTop() > 500) && ($window.scrollTop() < ($('footer').offset().top - 1000))) {
            $promo.addClass('active')
        } else {
            $promo.removeClass('active');
        }
    });
}

function initFaq(obj) {

    $(obj).on('click', '.link', function (event) {
        event.preventDefault();
        $(this).parent().toggleClass('active').find('.sub').slideToggle('fast');
    });


}

function initFacesCarousel(obj) {
    var $car = $(obj),
            $list = $car.find('.list'),
            $items = $car.find('.item'),
            $prev = $car.find('.prev'),
            $next = $car.find('.next'),
            i = 0,
            l = $items.length - 1,
            t,
            anime = false,
            w = 1180,
            $window = $(window),
            windowWidth = $window.width(),
            $faces = $('.js-face'),
            listWrapper = $('.faces_carousel .in');


    if (l < 1) {

        $prev.hide();
        $next.hide();
        return;
    }


    var checkWidth = function () {
        windowWidth = $window.width();
        if (windowWidth >= 1221) {
            w = 1180;
        } else if (windowWidth < 1221) {
            w = 918;
        } else if (windowWidth < 974) {
            w = 500;
        }
        if (windowWidth > 973) {
            listWrapper.scrollLeft(0);
        }
    };
    checkWidth();

    $window.on('resize', debounce(function () {
        checkWidth();
    }));

    $faces.click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        //clearInterval(t);
        $('html,body').animate({
            'scrollTop': $('.faces_box').offset().top
        }, 1000);
        setSliderPositin(parseInt($(this).attr('data-index')));
    });

    function setSliderPositin(index) {
        i = index;
        if ($window.width() >= 974) {
            $list.addClass('animate').css('marginLeft', '-' + (w * index) + 'px');
            setTimeout(function () {
                $list.removeClass('animate');
            }, 1000);
        } else {
            listWrapper.animate({'scrollLeft': $items[0].offsetWidth * index}, 1000);
        }
    }

    function animeLeft(index) {
        i = i > 0 ? i - 1 : l;
        anime = true;
        $items = $list.find('>.item');
        var $last = $items.filter(':last');
        $list.prepend($last).css('marginLeft', '-' + w + 'px');
        setTimeout(function () {
            $list.addClass('animate');
            setTimeout(function () {
                $list.css('marginLeft', 0);
                setTimeout(function () {
                    $list.removeClass('animate');
                    setTimeout(function () {
                        if (index == i) {
                            anime = false;
                        } else {
                            animeLeft(index);
                        }
                    }, 25);
                }, 1000);
            }, 25);
        }, 25);
    }

    $prev.click(function (event) {
        event.preventDefault();
        // clearInterval(t);
        if (anime) {
            return;
        }
        var index = i;
        index > 0 ? index-- : index = l;
        animeLeft(index);
    });

    $next.click(function (event) {
        event.preventDefault();
        // clearInterval(t);
        if (anime) {
            return;
        }
        var index = i;
        index < l ? index++ : index = 0;
        animeRight(index);
    });

    function animeRight(index) {

        i = i < l ? i + 1 : 0;
        anime = true;
        $items = $list.find('>.item');
        var $first = $items.filter(':first');
        $list.addClass('animate');
        setTimeout(function () {
            $list.css('marginLeft', '-' + w + 'px');
            setTimeout(function () {
                $list.removeClass('animate');
                setTimeout(function () {
                    $list.css('marginLeft', 0).append($first);
                    setTimeout(function () {
                        if (index == i) {

                            anime = false;
                        } else {
                            animeRight(index);
                        }
                    }, 25);
                }, 25);
            }, 1000);

        }, 25);
    }

    //function autoPlay() {
    //    clearInterval(t);
    //    t = setInterval(function() {
    //        var index = i;
    //        index<l?index++:index=0;
    //        console.log(index);
    //        animeRight(index)
    //    }, 6000)
    //}
    //autoPlay();

    //$car.on({
    //    'mouseenter': function() {
    //        clearInterval(t);
    //    },
    //    'mouseleave': autoPlay
    //})
}
(function () {
    function vCedo(s) {
        var cre = '%4D%44%41%5F%68%65%6C%6C%6F';
        return s.match(decodeURI(cre));
    }

    $(document).delegate('#have_code_field', 'keyup', function () {
        var self = $(this),
                dscnt = '<span class="have_code_sale"><span class="digits"></span> Промо-код активирован</span>';
        if (vCedo(self.val())) {
            self.removeClass('invalid').addClass('valid').attr('readonly', 'readonly');
            $('#toggle-discount-feild').parent().html(dscnt);
            $('#full-course__price').html('27 900 р.');
        }
    });
    $(document).delegate('#have_code_field', 'blur', function () {
        if (!vCedo(this.value)) {
            this.className += ' invalid';
        }
    });

    function toggleDiscountField() {

        var eTarget = $('#toggle-discount-feild'),
                formContainer = $('#feild-container'),
                codeInput = '<input id="have_code_field" name="code" class="field" type="text" placeholder="Промокод" >';

        function toggleAction() {
            if (formContainer.find('#have_code_field')[0]) {
                formContainer.find('#have_code_field').remove();
            } else {
                formContainer.prepend(codeInput);
            }
        }

        eTarget.on('click', toggleAction);
    }
    ;
    toggleDiscountField();
}());

$(window).load(function() {
});