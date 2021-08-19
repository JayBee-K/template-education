const addCart = function () {
	$(document).on('click', '[data-theme-action=addCart]', function (e) {
		e.stopPropagation();
		let getQuantityCart = parseInt($('.quantityCart').text());
		$('.quantityCart').text(getQuantityCart += 1);
		Swal.fire({
			title: 'Thêm giỏ hàng thành công!',
			text: 'Thêm khoá học vào giỏ hàng thành công.',
			icon: 'success',
			showCancelButton: true,
			cancelButtonColor: '#6e7d88',
			cancelButtonText: 'Đóng popup',
			confirmButtonColor: rootColor,
			confirmButtonText: 'Kiểm tra giỏ hàng'
		}).then((result) => {
			if (result.isConfirmed) {
				location.href = 'index.html';
			}
		});
	});
}

const removeClass = function () {
	$(document).on('click', '[data-theme-action=removeCart]', function (e) {
		e.stopPropagation();
		let elm = $(this).parents('.favourite-item');
		elm.fadeOut(300, function () {
			elm.remove();
		});
		
		Swal.fire({
			title: 'Xoá khoá học thành công!',
			icon: 'success',
			showConfirmButton: false,
			showCancelButton: true,
			cancelButtonColor: '#6e7d88',
			cancelButtonText: 'Đóng popup',
		});
	});
}

function handleTouchMoveFavourite(ev) {
	if (!$(ev.target).closest('#floatingCart').length) {
		ev.preventDefault();
	}
}

const callCart = function () {
	
	if ($('#floatingCart').hasClass('show')) {
		document.removeEventListener('touchmove', handleTouchMoveFavourite);
		setTimeout(() => $('body').css('overflow', ''), 100);
		$('#floatingCart').removeClass('show');
	} else {
		setTimeout(() => $('body').css('overflow', 'hidden'), 100);
		document.addEventListener('touchmove', handleTouchMoveFavourite, {passive: false});
		$('#floatingCart').addClass('show');
	}
}

const callMenuMobile = function () {
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$("#header .header-bottom .header-bottom_inner .header-bottom_main .header-bottom_navigation > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#navigation"
			});
		})
	}
}

function handleTouchMove(ev) {
	if (!$(ev.target).closest('#header').length) {
		ev.preventDefault();
	}
}

const callMenu = function () {
	
	if ($('#header').hasClass('toggle-navigation')) {
		document.removeEventListener('touchmove', handleTouchMove);
		$('body').css('overflow', '');
		$('#header').removeClass('toggle-navigation');
	} else {
		document.addEventListener('touchmove', handleTouchMove, {passive: false});
		$('body').css('overflow', 'hidden');
		$('#header').addClass('toggle-navigation');
	}
}

$(function () {
	callMenuMobile();
	$(document).on("click", "#hamburger, #close-navigation, .header-overlay", function () {
		callMenu();
	});
	
	addCart();
	removeClass();
	
	$(document).on('click', '[data-theme-action=callCart], [data-theme-action=closeCart]', function (e) {
		e.stopPropagation();
		callCart();
	});
	
	if ($('.counter-value').length) {
		$('.counter-value').counterUp({
			delay: 10,
			time: 1000
		});
	}
	
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
	
	const newspaperSlide = new Swiper('#newspaper-slide', {
		loop: true,
		speed: 1000,
		direction: "vertical",
		slidesPerView: 5,
		slidesPerGroup: 1,
		breakpoints: {
			320: {
				autoHeight: false,
			},
			600: {},
			1024: {
				autoHeight: true,
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
	
	$('#manage-user').on('show.bs.dropdown', function () {
		$(this).closest('.header-top').css('z-index', 5);
	}).on('hide.bs.dropdown', function () {
		$(this).closest('.header-top').css('z-index', 1);
	})
});