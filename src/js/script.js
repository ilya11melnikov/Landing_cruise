const menuButton = document.querySelector('.menu_button');
const menuCloseButton = document.querySelector('.nav_close');
const menu = document.querySelector('.nav');
const body = document.querySelector('.body');
const cards = document.querySelector('.about__cards');

menuButton.addEventListener('click', function () {
	menu.classList.add('active');
	body.classList.add('body--overflow_hidden');
	cards.classList.add('about__cards--display_none');
});

menuCloseButton.addEventListener('click', function () {
	menu.classList.remove('active');
	body.classList.remove('body--overflow_hidden');
	cards.classList.remove('about__cards--display_none');
});

const swiperThree = new Swiper('.swiperClass', {
	loop: true,
	slidesPerView: 4,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	loopFillGroupWithBlank: true,
	slidesPerGroup: 1,
	speed: 1000,

	navigation: {
		nextEl: '.btn_next',
		prevEl: '.btn_prev',
	},
	mousewheel: true,
	keyboard: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		480: {
			slidesPerView: 2,
		},

		780: {
			slidesPerView: 3,
		},

		1024: {
			slidesPerView: 4,
		},
	},
});
