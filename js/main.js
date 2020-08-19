/*
 Template Name: 
 Template URI: 
 Description: 
 Author: 
 Author 
 Version: 
*/

/*================================================
 [  Table of contents  ]
 ================================================
 :: Responsive Manu
 :: Search Box Expand
 :: Slick Slider
 ======================================
 [ End table content ]
 ======================================*/

jQuery(document).ready(function () {
	"use strict";

	/* Responsive Manu */

	$('.responsive-icon').on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.mobile-manu').animate({
				left: '0',
			}, 300);
        } else {
            $(this).removeClass('active');
            $('.mobile-manu').animate({
				left: '-350px',
			}, 300);
        }
        return false;
	});
	
	/* search box expand */

	$('.fa-search').on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.search-input').animate({
				width: '160px',
				opacity: '1',
			}, 300);
        } else {
            $(this).removeClass('active');
            $('.search-input').animate({
				width: '0',
				opacity: '0'
			}, 300);
        }
        return false;
	});
	
	/* Slick Slider Active */

	$(".home-slider").slick({
        dots: false,
        vertical: false,
        centerMode: false,
        slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 2000,
	});

});
