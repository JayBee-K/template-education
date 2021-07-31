$(function () {
	if ($('.counter-value').length) {
		$('.counter-value').counterUp({
			delay: 10,
			time: 1000
		});
	}
	const newspaperSlide = new Swiper('#newspaper-slide', {
		loop: true,
		speed: 500,
		cssMode: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		direction: "vertical",
	});
	
	const bannerSlide = new Swiper('#banner-slide', {
		loop: true,
		speed: 1000,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		mousewheelControl: true,
		keyboardControl: true,
		slidesPerView: 1,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}">${(index + 1) < 10 ? '0' + (index + 1) : (index + 1)}</span>`;
			},
		},
		autoplay: {
			delay: 100000,
			disableOnInteraction: false,
		},
		on: {
			progress() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * 0.5;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".banner-item").style.transform =
						"translate3d(" + innerTranslate + "px, 0, 0)";
				}
			},
			
			touchStart() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition(templateBanner, speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".banner-item").style.transition =
						speed + "ms";
				}
			}
		}
	});
	
	const teacherSlide = new Swiper('#slide-teacher', {
		loop: false,
		speed: 2000,
		spaceBetween: 30,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerGroup: 1,
			},
			600: {
				slidesPerView: 4,
				slidesPerGroup: 2,
			},
			1024: {
				slidesPerView: 6,
				slidesPerGroup: 3,
			}
		}
	});
	const reviewSlide = new Swiper('#slide-review', {
		loop: false,
		speed: 2000,
		spaceBetween: 30,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			600: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			1024: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			}
		}
	});
})