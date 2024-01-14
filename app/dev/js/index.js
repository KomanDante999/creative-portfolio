document.querySelectorAll('.slider').forEach((n, i) => {

	window[`slider${i + 1}`] = new Swiper(n, {
		loop: true,   // зацикливание
		slidesPerView: 1.75,
		slidesOffsetBefore: -125,
		freeMode: true,
		mousewheel: true,
		direction: 'vertical',
		// speed: 500,
		// centeredSlides: true,
	})
})

bindSwipers(slider1, slider2, slider3, slider4)