(function ($) {
	'use strict';

	// mobile_menu
	var menu = $('ul#navigation');
	if (menu.length) {
		menu.slicknav({
			prependTo: '.mobile_menu',
			closedSymbol: '+',
			openedSymbol: '-',
		});
	}

	/* 4. Testimonial Active*/
	var testimonial = $('.h1-testimonial-active');
	if (testimonial.length) {
		testimonial.slick({
			dots: false,
			infinite: true,
			speed: 1000,
			autoplay: true,
			loop: true,
			arrows: false,
			prevArrow:
				'<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
			nextArrow:
				'<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false,
						arrow: false,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
					},
				},
			],
		});
	}

	/* 5. Gallery Active */
	var client_list = $('.gallery-active');
	if (client_list.length) {
		client_list.owlCarousel({
			slidesToShow: 8,
			slidesToScroll: 1,
			loop: true,
			autoplay: true,
			speed: 3000,
			smartSpeed: 2000,
			nav: false,
			dots: false,
			margin: 0,

			autoplayHoverPause: true,
			responsive: {
				0: {
					nav: false,
					items: 2,
				},
				768: {
					nav: false,
					items: 8,
				},
			},
		});
	}

	/* 6. Nice Selectorp  */
	var nice_Select = $('select');
	if (nice_Select.length) {
		nice_Select.niceSelect();
	}

	/* 7.  Custom Sticky Menu  */
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$('.header-sticky').removeClass('sticky-bar');
		} else {
			$('.header-sticky').addClass('sticky-bar');
		}
	});

	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$('.header-sticky').removeClass('sticky');
		} else {
			$('.header-sticky').addClass('sticky');
		}
	});

	/* 8. sildeBar scroll */
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<svg xmlns="http://www.w3.org/2000/svg" aria-label="Ir para navegação principal" height="1em" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	/* 10. WOW active */
	new WOW().init();

	// 12 Pop Up Img
	var popUp = $('.single_gallery_part, .img-pop-up');
	if (popUp.length) {
		popUp.magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		});
	}

	/* 14. counterUp*/
	$('.counter').counterUp({
		delay: 10,
		time: 3000,
	});

	//Another popUp
	var popUp = $('.menorie-icon');
	if (popUp.length) {
		popUp.magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		});
	}

	//Brand Active
	$('.brand-active').slick({
		dots: false,
		infinite: true,
		speed: 300,
		autoplay: true,
		speed: 1000,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
})(jQuery);
