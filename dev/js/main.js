$(window).load(function() {
	$(".loader").fadeOut();
	$('.site-header').addClass('animated');
	// $('.section.home .hero-name__wrapper, .intro').addClass('fadeInLeft');
	// $('.section.home .page-title').addClass('slideInLeft');
	// $('.section.home .video-bg').addClass('slideInRight');
});

$(document).ready(function() {
	// $.scrollify({
	// 	section : ".section",
	// 	scrollbars: true,
	// 	scrollSpeed: 700,
	// 	easing: 'linear',
	// 	// standardScrollElements: ".section.credits",
	// 	before: function(index, sections) {
	// 		$('.main-menu li a').removeClass('active');
	// 		$('.main-menu li').eq(index).find('a').addClass('active');
	// 		var ref = sections[index].attr("data-section-name");
	// 		if(ref === "home") {
	// 			$('.section.home .hero-name__wrapper').addClass('fadeInLeft');
	// 			$('.section.home .page-title').addClass('slideInLeft');
	// 			$('.section.home .intro').addClass('fadeInLeft');
	// 			$('.section.home .video-bg').addClass('slideInRight');
	// 		}else {
	// 			$('.section.home .hero-name__wrapper').addClass('fadeOutRight');
	// 			$('.section.home .page-title').addClass('slideOutRight');
	// 			$('.section.home .intro').addClass('slideOutUp');
	// 			$('.section.home .video-bg').addClass('slideOutRight');
	// 			setTimeout(function() {
	// 				$('.section.home .hero-name__wrapper').removeClass('fadeOutRight fadeInLeft');
	// 				$('.section.home .page-title').removeClass('slideOutRight slideInLeft');
	// 				$('.section.home .intro').removeClass('slideOutUp fadeInLeft');
	// 				$('.section.home .video-bg').removeClass('slideOutRight slideInRight');
	// 			}, 700);
	// 		}

	// 		if(ref === "about") {
	// 			$('.section.about .hero-name__wrapper').addClass('fadeInLeft');
	// 			$('.section.about .page-title').addClass('slideInLeft');
	// 			$('.section.about .intro').addClass('fadeInLeft');
	// 			$('.section.about .about-bg').addClass('fadeInRight');
	// 		}else {
	// 			$('.section.about .hero-name__wrapper').addClass('fadeOutRight');
	// 			$('.section.about .page-title').addClass('slideOutRight');
	// 			$('.section.about .intro').addClass('slideOutUp');
	// 			$('.section.about .about-bg').addClass('fadeOutRight');
	// 			setTimeout(function() {
	// 				$('.section.about .hero-name__wrapper').removeClass('fadeOutRight fadeInLeft');
	// 				$('.section.about .page-title').removeClass('slideOutRight slideInLeft');
	// 				$('.section.about .intro').removeClass('slideOutUp fadeInLeft');
	// 				$('.section.about .about-bg').removeClass('fadeOutRight fadeInRight');
	// 			}, 700);
	// 		}



	// 		if(ref === "contacts") {
	// 			$('.section.contacts .contact-list__inner li').removeClass('hdn');
	// 			$('.section.contacts .contact-list__inner li').addClass('fadeInUp');

	// 		}else {
	// 			$('.section.contacts .contact-list__inner li').addClass('fadeOutUp');
	// 			$('.section.contacts .contact-list__inner li').addClass('hdn');

	// 			setTimeout(function() {
	// 				$('.section.contacts .contact-list__inner li').removeClass('fadeOutUp fadeInUp');

	// 			}, 700);
	// 		}


	// 		if(ref === "credits") {
	// 			$('.section.credits .credits__list li').addClass('fadeInUp');
	// 			$('.section.credits .hero-name__wrapper').addClass('fadeInLeft');
	// 			$('.section.credits .page-title').addClass('slideInLeft');

	// 		}else {
	// 			$('.section.credits .credits__list li').addClass('fadeOutUp');
	// 			$('.section.credits .hero-name__wrapper').addClass('fadeOutRight');
	// 			$('.section.credits .page-title').addClass('slideOutRight');

	// 			setTimeout(function() {
	// 				$('.section.credits .credits__list li').removeClass('fadeOutUp fadeInUp');
	// 				$('.section.credits .hero-name__wrapper').removeClass('fadeOutRight fadeInLeft');
	// 				$('.section.credits .page-title').removeClass('slideOutRight slideInLeft');

	// 			}, 700);
	// 		}
	// 	},
	// });


	

	if($(window).width() > 768) {
		$('.fullpage-helper').pagepiling({
			verticalCentered: false,
			anchors: ['home', 'about', 'locations', 'contacts', 'credits'],
			menu: '.main-menu',
			navigation: false,
		});
	}

	

	if($(window).width() < 1000 ) {
		$('#tags a').each(function() {
			var weight = $(this).data('weight');
			var smallWeight = weight/2;
			$(this).attr('data-weight', smallWeight);
		});
	}
	var browserHeight = $(window).height();
	var browserWidth = $(window).width();
	$('.tags-list__inner').append( "<canvas width='"+browserWidth+"' height='"+browserHeight+"' id='tags_canvas'></canvas>" );

	var depth;
	$(window).width() < 1000 ? depth = 0 : depth = 0.8;
		

	$('#tags_canvas').tagcanvas({
		depth: depth,
		wheelZoom: false,
		textColour: '#8c827d',
		shape: 'vcylinder',
		maxSpeed: 0.01,
		initial: [0.040, 0.090],
		outlineMethod: 'size',
		outlineIncrease: 20,
		outlineColour: '#a67a53',
		freezeActive: true,
		weight: true,
		weightMode: 'size',
		weightFrom: 'data-weight',
		reverse: true,
		// txtOpt: false,
		dragControl: true,

	},'tags');

	$('.toggle-mobile-nav').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.main-menu').toggleClass('active');
	});

	if($(window).width() <= 768) {
		$('#tags_canvas').tagcanvas("delete");
		$('#tags_canvas').remove();
	}

	$('.city:nth-child(4n+1)').addClass('city1')
	$('.city:nth-child(4n+2)').addClass('city2')
	$('.city:nth-child(4n+3)').addClass('city3')
	$('.city:nth-child(4n+4)').addClass('city4')

	setTimeout(function() {
		$('.city:nth-child(1)').find('.city-img').removeClass('slideInUp');
		$('.city:nth-child(1)').find('.link-to-city').removeClass('slideInDown')
	}, 2000);

	$('.order-btn').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

});


