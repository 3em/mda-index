(function () {
    var i, mobileCheck, videos, view;

    mobileCheck = $('.mobile-check');

    view = $('#view');

    view.removeClass('hide');

    if (mobileCheck.css('z-index') * 1 > 0) {
        view.removeClass('anime-open');
        view.removeClass('hide');
    }

    window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    $(document).ready(function () {
        $('video').each(function () {
            if ($(this).data('dynamicsrc') && !isMobile)
                this.src = $(this).data('dynamicsrc');
        });
        var addVideo, animeOpen, animePlay, animePlayBlock, animePopup, animeTime, arrowBlock, bgHide, bgVideo, blockButtons, blockGallery, blockPopup, block_mobileMenu, closeGallery, closeGalleryButton, closePopups, closes, darkness, dateSoon, desktopSmallLine, enableSlider, enableSliderAnime, feedEmail, feedName, feedPhone, feedValidate, gallery, galleryBG, hand, handAnimate, hideMainVideo, leftSlide, matrix, matrixInit, matrixLines, matrixWidth, mobileSmallLine, mobile_close, mobile_logo, mobile_nav, mobile_openButton, mouseX, mouseY, oneA, openPopup, openSite, originMatrix, playAnimeBegin, popups, removeVideo, rightSlide, showSlide, show_hide_mobileNav, slideBlock, slides, slidesLength, smallLine, smallLineWidth, specialistBlock, stepSlide, tipBlock, tipDesktop, twoA, yButtons, you_button;
        view = $('#view');
        bgVideo = $('.bg-video');
        bgHide = bgVideo.find('.hide-video');
        specialistBlock = $('.specialist');
        darkness = $('#darkness');
        popups = $('#popups');
        closes = $('.close');
        yButtons = $('.y-button');
        dateSoon = $('.date-soon');
        mobile_openButton = $('.mobile-block');
        mobile_nav = $('#mobile-nav');
        mobile_close = mobile_nav.find('.close-mobile');
        mobile_logo = mobile_nav.find('.logo');
        mobileCheck = $('.mobile-check');
        block_mobileMenu = false;
        feedName = popups.find('.feed-name');
        feedPhone = popups.find('.feed-phone');
        feedEmail = popups.find('.feed-email');
        tipBlock = $('.drag-and-drop');
        hand = tipBlock.find('.desktop.hand img');
        tipDesktop = $('.drag-and-drop.desktop');
        arrowBlock = $('.main-play');
        oneA = arrowBlock.find('.one');
        twoA = arrowBlock.find('.two');
        animeTime = 500;
        animeOpen = 1000;
        animePopup = 1000;
        animePlay = 800;
        animePlayBlock = false;
        blockPopup = false;
        originMatrix = $('.matrix');
        matrix = $('.drag');
        matrixWidth = matrix.width();
        matrixLines = matrix.find('.line');
        smallLine = null;
        smallLineWidth = 1000000;
        mobile_nav.find('.has-childs').click(function (e) {
            if (!$(event.target).closest('li:not(.has-childs)').length) {
                return $(event.target).closest('.has-childs').toggleClass('opened').find('ul').first().slideToggle();
            }
        });
        mouseX = 0;
        mouseY = 0;
        gallery = $('.gallery');
        you_button = gallery.find('.you-button');
        blockGallery = false;
        closeGalleryButton = gallery.find('.close-gallery');
        galleryBG = $('.gallery-bg');
        slides = gallery.find('.slides');
        rightSlide = gallery.find('.right');
        leftSlide = gallery.find('.left');
        stepSlide = 0;
        slidesLength = slides.children().length;
        slideBlock = false;
        blockButtons = false;
        addVideo = function (elem) {
            var link, parent;
            link = elem.attr('data-src');
            parent = elem.parent();
            return parent.append("<iframe width='1000' height='622' src='" + link + "?autoplay=1' frameborder='0' enablejsapi class='you-video'></iframe>");
        };
        removeVideo = function (elem) {
            return isMobile ? false : elem.find('.you-video').remove();
        };
        closeGallery = function () {
            if ($('.you-video')[0]) {
                $('.you-video').remove();
            }
            blockGallery = true;
            gallery.css({
                opacity: 0
            });
            galleryBG.css({
                opacity: 0
            });
            return setTimeout(function () {
                gallery.addClass('none');
                galleryBG.addClass('none');
                return blockGallery = false;
            }, 600);
        };
        enableSliderAnime = function (elem) {
            var currLine, elemId, elemSrc, itemsWidth, preview, previewID, topPreview;
            if (blockGallery) {
                return false;
            }
            elemSrc = elem.find('img').attr('src');
            elemId = parseInt(elem.attr('data-id'));
            galleryBG.css({
                opacity: 0
            });
            galleryBG.removeClass('none');
            setTimeout(function () {
                return galleryBG.css({
                    opacity: 1
                });
            }, 30);
            preview = $("<img class='preview anime none' src='" + elemSrc + "' data-id='" + elemId + "'>");
            originMatrix.append(preview);
            itemsWidth = 0;
            previewID = preview.attr('data-id');
            if (elem.parent().hasClass('one-line')) {
                currLine = matrix.find('.one-line');
            }
            if (elem.parent().hasClass('two-line')) {
                currLine = matrix.find('.two-line');
            }
            itemsWidth = elem.offset().left;
            if (elem.parent().hasClass('one-line')) {
                topPreview = '0';
            }
            if (elem.parent().hasClass('two-line')) {
                topPreview = '50%';
            }
            preview.css({
                left: itemsWidth + "px",
                top: topPreview
            });
            preview.removeClass('none');
            return setTimeout(function () {
                preview.css({
                    left: "50%",
                    top: 0,
                    height: '100%',
                    marginLeft: "-" + (preview.width()) + "px"
                });
                return setTimeout(function () {
                    enableSlider(elemId - 1, 'left', true);
                    return setTimeout(function () {
                        return preview.addClass('none');
                    }, 600);
                }, 600);
            }, 30);
        };
        matrix.find('.item').on('touchstart', function (e) {
        //    return e.preventDefault();
        });
        enableSlider = function (num) {
            blockButtons = true;
            gallery.css({
                opacity: 0
            });
            gallery.removeClass('none');
            setTimeout(function () {
                return gallery.css({
                    opacity: 1
                });
            }, 30);
            setTimeout(function () {
                return blockButtons = false;
            }, 600);
            return showSlide(num, 'left', true);
        };
        matrix.mousedown(function (e) {
            if (mobileCheck.css('z-index') * 1 > 0) {
                return false;
            }
            if (e.button !== 0) {
                return true;
            }
            mouseX = e.pageX;
            return mouseY = e.pageY;
        });
        matrix.mouseup(function (e) {
            var target;
            if (mouseX !== e.pageX || mouseY !== e.pageY) {
                return true;
            }
            if (e.button !== 0) {
                return true;
            }
            target = $(e.target);
            if (target.hasClass('link')) {
                return true;
            }
            return enableSliderAnime(target);
        });
        showSlide = function (num, direct, force) {
            var currSlide, nextSlide;
            currSlide = slides.find('.slide[data-current]');
            nextSlide = $(slides.children()[num]);
            setTimeout(function () {
                return slideBlock = false;
            }, 300);
            if (force) {
                if (currSlide[0]) {
                    currSlide.removeAttr('data-current');
                    currSlide.addClass('none');
                    removeVideo(currSlide);
                }
                nextSlide.css({
                    left: "" + 0.,
                    opacity: 1
                });
                nextSlide.removeClass('none');
                nextSlide.attr('data-current', '');
                stepSlide = num;
                return true;
            }
            if (currSlide[0]) {
                currSlide.removeAttr('data-current');
                removeVideo(currSlide);
                if (direct === 'right') {
                    currSlide.css({
                        left: (-100) + "%",
                        opacity: 0
                    });
                }
                if (direct === 'left') {
                    currSlide.css({
                        left: 100. + "%",
                        opacity: 0
                    });
                }
                setTimeout(function () {
                    return currSlide.addClass('none');
                }, 600);
            }
            if (direct === 'right') {
                nextSlide.css({
                    left: 100. + "%",
                    opacity: 0
                });
            }
            if (direct === 'left') {
                nextSlide.css({
                    left: (-100) + "%",
                    opacity: 0
                });
            }
            nextSlide.attr('data-current', '');
            nextSlide.removeClass('none');
            return setTimeout(function () {
                return nextSlide.css({
                    left: "" + 0.,
                    opacity: 1
                });
            }, 100);
        };
        $(window).keydown(function (e) {
            if (gallery.hasClass('none')) {
                return true;
            }
            if (slideBlock) {
                return true;
            }
            if (blockButtons) {
                return true;
            }
            if (e.keyCode === 39) {
                slideBlock = true;
                if (stepSlide + 2 > slidesLength) {
                    stepSlide = -1;
                }
                showSlide(++stepSlide, 'right');
            }
            if (e.keyCode === 37) {
                slideBlock = true;
                if (stepSlide - 1 < 0) {
                    stepSlide = slidesLength;
                }
                return showSlide(--stepSlide, 'left');
            }
        });
        leftSlide.click(function () {
            if (slideBlock) {
                return false;
            }
            if (blockButtons) {
                return false;
            }
            slideBlock = true;
            if (stepSlide - 1 < 0) {
                stepSlide = slidesLength;
            }
            return showSlide(--stepSlide, 'left');
        });
        rightSlide.click(function () {
            if (slideBlock) {
                return false;
            }
            if (blockButtons) {
                return false;
            }
            slideBlock = true;
            if (stepSlide + 2 > slidesLength) {
                stepSlide = -1;
            }
            return showSlide(++stepSlide, 'right');
        });
        handAnimate = function () {
            hand.css({
                right: 64. + "px",
                opacity: 0
            });
            setTimeout(function () {
                return hand.addClass('none');
            }, 1000);
            return setTimeout(function () {
                hand.removeAttr('style');
                hand.css({
                    opacity: 0
                });
                hand.removeClass('none');
                setTimeout(function () {
                    return hand.css({
                        opacity: 1
                    });
                }, 30);
                return setTimeout(function () {
                    return handAnimate();
                }, 1000);
            }, 1200);
        };
        handAnimate();
        mobileSmallLine = function () {
            var items, itemsWidth;
            items = matrixLines.find('.item');
            itemsWidth = 0;
            items.each(function () {
                return itemsWidth += $(this).width();
            });
            return smallLineWidth = itemsWidth;
        };
        desktopSmallLine = function () {
            return matrixLines.each(function () {
                var line, lineItems, lineWidth;
                line = $(this);
                lineWidth = 0;
                lineItems = line.find('.item');
                lineItems.each(function () {
                    return lineWidth += $(this).width();
                });
                if (lineWidth < smallLineWidth) {
                    smallLineWidth = lineWidth;
                    return smallLine = line;
                }
	            return smallLineWidth = lineWidth;
            });
        };
        matrixInit = function () {
            if (mobileCheck.css('z-index') * 1 < 2) {
        	    setTimeout(function () {
    	            desktopSmallLine();
	            }, 1600);
            } else {
        	    setTimeout(function () {
	                mobileSmallLine();
	            }, 1600);
            }

//            return matrix.draggable({
            var mt = matrix.draggable({
                axis: 'x',
                cursor: 'move',
                drag: function (event, ui) {
                    var left, right;

                    left = ui.position.left;
                    right = -left + $(window).width();

		            if (mobileCheck.css('z-index') * 1 < 2) 
					{
		        	    setTimeout(function () {
		    	            desktopSmallLine();
		            	}, 500);
		            }
					else
					{
		        	    setTimeout(function () {
	        		        mobileSmallLine();
		            	}, 500);
       			    }

                    if (right >= smallLineWidth) {
                        return false;
                    }
                    if (left >= 0) {
                        return false;
                    }
                }
            });


			if ($(window).width() <= 1024)
			{
console.log('-----------------------------');
				mt.draggable('disable');
				originMatrix.addClass('scroll');

			}
			else
			{
				mt.draggable('enable');
				originMatrix.removeClass('scroll');
			}
//			mt.draggable('disable');
            



        };
        $('#youtube-video-box .play-btn').on('click', function () {
            return addVideo($(this));
        });
        matrixInit();
        playAnimeBegin = function () {
            var step;
            if (animePlayBlock) {
                return false;
            }
            animePlayBlock = true;
            step = 70;
            oneA.css({
                left: (parseInt(oneA.css('left')) + step) + "px"
            });
            twoA.css({
                left: (parseInt(twoA.css('left')) + step) + "px"
            });
            return setTimeout(function () {
                var bufer;
                bufer = oneA.clone();
                oneA.remove();
                twoA.removeAttr('style');
                twoA.removeClass('two');
                twoA.addClass('one');
                bufer.removeAttr('style');
                bufer.removeClass('one');
                bufer.addClass('two');
                arrowBlock.prepend(bufer);
                oneA = arrowBlock.find('.one');
                twoA = arrowBlock.find('.two');
                return animePlayBlock = false;
            }, 800);
        };
        show_hide_mobileNav = function () {
            if (block_mobileMenu) {
                return false;
            }
            block_mobileMenu = true;
            if (mobile_nav.hasClass('none')) {
                mobile_nav.removeClass('none');
                setTimeout(function () {
                    return mobile_nav.css('margin-top', 0);
                }, 10);
            } else {
                mobile_nav.css('margin-top', (-mobile_nav.height()) + "px");
                setTimeout(function () {
                    return mobile_nav.addClass('none');
                }, 600);
            }
            return setTimeout(function () {
                return block_mobileMenu = false;
            }, 700);
        };
        feedValidate = function () {
            return feedPhone.mask("+7 (999) 999-99-99");
        };
        //feedValidate();
        closePopups = function () {
            var openedPopup;
            if (blockPopup) {
                return false;
            }
            blockPopup = true;
            openedPopup = popups.find('.popup[data-open="true"]');
            darkness.css({
                opacity: 0
            });
            openedPopup.css({
                opacity: 0
            });
            return setTimeout(function () {
                darkness.addClass('hide none');
                openedPopup.addClass('hide none');
                darkness.removeAttr('style');
                openedPopup.removeAttr('style');
                return blockPopup = false;
            }, animePopup);
        };
        openPopup = function (name) {
            var currPopup;
            if (blockPopup) {
                return false;
            }
            blockPopup = true;
            currPopup = $(".popup[data-name=" + name + "]");
            currPopup.attr('data-open', true);
            darkness.removeClass('none');
            currPopup.removeClass('none');
            setTimeout(function () {
                darkness.css({
                    opacity: 1
                });
                return currPopup.css({
                    opacity: 1
                }, 10);
            });
            return setTimeout(function () {
                darkness.removeClass('hide');
                currPopup.removeClass('hide');
                darkness.removeAttr('style');
                currPopup.removeAttr('style');
                return blockPopup = false;
            }, animePopup);
        };
        openSite = function () {
            var mob;
            mob = mobileCheck.css('z-index');
            if (mob <= 0) {
                view.css({
                    opacity: 1
                });
                return isMobile ? setTimeout(function () {
                    return view.removeClass('hide');
                }, animeOpen) : view.removeClass('hide');
            }
        };
        openSite();
        $('.slick.slider-changeBg').on('beforeChange init', function (s, a, c, nextSlideIndex) {
            var avatarSrc, bgImgs;
            avatarSrc = $(this).find('.avatar img')[nextSlideIndex || 0].src;
            bgImgs = $('.slide-4 .bg-img');
            bgImgs.fadeOut({
                onComplete: function () {
                    return bgImgs.remove();
                }
            });
            return $('<div class="bg-img"/>').hide().css('background-image', 'url(' + avatarSrc + ')').appendTo('.slide-4').fadeIn();
        });
        if ($.slick)
            $('.slick').slick({
                swipeToSlide: true,
                touch: true
            });
        hideMainVideo = function (top) {
            if (top < 100) {
                bgHide.css({
                    opacity: 1
                });
                return true;
            }
            if (top > 700) {
                bgHide.css({
                    opacity: 0
                });
                return true;
            }
            if (top > 600) {
                bgHide.css({
                    opacity: 0.2
                });
                return true;
            }
            if (top > 500) {
                bgHide.css({
                    opacity: 0.3
                });
                return true;
            }
            if (top > 400) {
                bgHide.css({
                    opacity: 0.4
                });
                return true;
            }
            if (top > 300) {
                bgHide.css({
                    opacity: 0.5
                });
                return true;
            }
            if (top > 200) {
                bgHide.css({
                    opacity: 0.6
                });
                return true;
            }
        };
        if (specialistBlock.length) {
            hideMainVideo(specialistBlock[0].getBoundingClientRect().top);
        }
        you_button.click(function (e) {
            return addVideo($(this));
        });
        closeGalleryButton.click(function () {
            return closeGallery();
        });
        // matrix.parent().mouseenter(function () {
        //     return tipDesktop.css({
        //         opacity: 1
        //     });
        // });
        // matrix.parent().mouseleave(function () {
        //     return tipDesktop.css({
        //         opacity: 0
        //     });
        // });
        arrowBlock.mouseenter(function () {
            return playAnimeBegin();
        });
        arrowBlock.mouseleave(function () {
            var self;
            self = $(this);
            return self.removeClass('transform-scale');
        });
        arrowBlock.mousedown(function () {
            var self;
            self = $(this);
            return self.addClass('transform-scale');
        });
        arrowBlock.mouseup(function () {
            var self;
            self = $(this);
            return self.removeClass('transform-scale');
        });
        mobile_close.click(function () {
            return show_hide_mobileNav();
        });
        mobile_close.on('touchstart', function () {
            return show_hide_mobileNav();
        });
        mobile_openButton.click(function () {
            return show_hide_mobileNav();
        });
        mobile_openButton.on('touchstart', function () {
            return show_hide_mobileNav();
        });
        darkness.click(function () {
            return closePopups();
        });
        closes.click(function () {
            return closePopups();
        });
        dateSoon.click(function () {
            return openPopup($(this).data('popupname'));
        });
        $(window).scroll(function () {
            if (specialistBlock.length) {
                return hideMainVideo(specialistBlock[0].getBoundingClientRect().top);
            }
        });
        $(window).resize(function () {
            matrix.css({
                left: 0
            });
            if (mobileCheck.css('z-index') * 1 > 0) {
                if ($('.you-video')[0]) {
                    removeVideo($(document));
                }
            }
            if (mobileCheck.css('z-index') * 1 < 2) {
                return desktopSmallLine();
            } else {
                return mobileSmallLine();
            }
        });
        if (($('#ymap').length)) {
            return ymaps.ready(function () {
                var myMap, myPlacemark;
                myMap = new ymaps.Map('ymap', {
                    center: [55.779627, 37.689686],
                    zoom: 16,
                    controls: []
                });
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'MDA',
                    balloonContent: 'Московская Digital Академия'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '/static/imgs/mapmark.png',
                    iconImageSize: [30, 42],
                    iconImageOffset: [-15, -42]
                });
                return myMap.geoObjects.add(myPlacemark);
            });
        }
        $('.anchor').click(function (e) {
            var ancorID = $(this).data('anchorid');
            if ($('#' + ancorID).length) {
                e.preventDefault();
                $('html,body').animate({scrollTop: $('#' + ancorID).offset().top + 'px'});
            }
        })
    });

}).call(this);
