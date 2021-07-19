(function($) {
    "use strict";
    // Preloader
    jQuery(window).on('load', function() {
        //jQuery(".preloader").fadeOut(1000);
        $(".preloader").delay(1600).fadeOut("slow");
    });

    // sticky navabr js
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".main-navbar").addClass("sticky");
        } else {
            $(".main-navbar").removeClass("sticky");
        }
    });



    $(document).ready(function() {

        // mobile menu
        $('.hamburger').click(function(event) {
            $(this).toggleClass('h-active');
            $('.main-nav').toggleClass('slidenav');
        });

        $('.header-home .main-nav ul li  a').click(function(event) {
            $('.hamburger').removeClass('h-active');
            $('.main-nav').removeClass('slidenav');
        });

        $(".main-nav .fl").on('click', function(event) {
            var $fl = $(this);
            $(this).parent().siblings().find('.sub-menu').slideUp();
            $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
            if ($fl.hasClass('flaticon-plus')) {
                $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
            } else {
                $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
            }
            $fl.next(".sub-menu").slideToggle();
        });

    });


    /*========= Search ==========*/
    var submitIcon = $('.search-btn i');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function() {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            submitIcon.attr('class', 'bx bx-x');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            submitIcon.attr('class', 'bx bx-search');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function() {
        return false;
    });
    searchBox.mouseup(function() {
        return false;
    });
    $(document).mouseup(function() {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });

    /*====== POPULAR PRODUCT SLIDER ========*/
    $('.pr-feature-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: false,
        lazyload: true,
        autoplayTimeout: 4000,
        responsiveClass: true,
        slideSpeed: 5000,
        pagination: true,
        paginationSpeed: 3000,
        singleItem: true,
        autoplaySpeed: 2000,
        // navText: [
        // 		'<i class="flaticon-previous"></i>',
        // 		'<i class="flaticon-next"></i>',
        // 	],
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false
            },
            576: {
                items: 2,
                dots: false,
                nav: false
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
                dots: true,
            },
            1024: {
                items: 2,
                dots: true,
            },
            1200: {
                items: 3,
                dots: true,
            }
        }
    });

    /*====== BEST PRODUCT SLIDER ========*/
    $('.best-product').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: false,
        lazyload: true,
        autoplayTimeout: 4000,
        responsiveClass: true,
        slideSpeed: 5000,
        pagination: true,
        paginationSpeed: 3000,
        singleItem: true,
        autoplaySpeed: 2000,
        // navText: [
        // 		'<i class="flaticon-previous"></i>',
        // 		'<i class="flaticon-next"></i>',
        // 	],
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false
            },
            576: {
                items: 1,
                dots: false,
                nav: false
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
                dots: true,
            },
            1024: {
                items: 2,
                dots: true,
            },
            1200: {
                items: 3,
                dots: true,
            }
        }
    });

    /*====== TESTIMONIAL SLIDER ========*/
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: false,
        lazyload: true,
        autoplayTimeout: 4000,
        responsiveClass: true,
        slideSpeed: 5000,
        pagination: true,
        paginationSpeed: 3000,
        singleItem: true,
        autoplaySpeed: 2000,
        // navText: [
        // 		'<i class="flaticon-previous"></i>',
        // 		'<i class="flaticon-next"></i>',
        // 	],
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false
            },
            576: {
                items: 1,
                dots: false,
                nav: false
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
                dots: true,
            },
            1024: {
                items: 1,
                dots: true,
            },
            1200: {
                items: 1,
                dots: true,
            }
        }
    });



}(jQuery));