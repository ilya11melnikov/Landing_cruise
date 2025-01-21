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

const swiperOne = new Swiper('.swiperClass', {
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
	keyboard: true,
});

const swiperTwo = new Swiper('.swiperClass_2', {
	loop: true,
	slidesPerView: 4,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	spaceBetween: 30,
	loopFillGroupWithBlank: true,
	slidesPerGroup: 1,
	speed: 1000,

	navigation: {
		nextEl: '.btn_next_gallery',
		prevEl: '.btn_prev_gallery',
	},
	keyboard: true,
});

const swiperThree = new Swiper('.swiperClass_3', {
	loop: true,
	slidesPerView: 4,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	spaceBetween: 30,
	loopFillGroupWithBlank: true,
	slidesPerGroup: 1,
	speed: 1000,

	navigation: {
		nextEl: '.btn_next_gallery',
		prevEl: '.btn_prev_gallery',
	},
	keyboard: true,
});


// Получаем элемент прогресс-бара
const progressBar = document.querySelector('.slider-progress-bar');

// Функция обновления прогресс-бара
function updateProgressBar(swiperInstance) {
	const totalSlides = swiperInstance.slides.length - swiperInstance.loopedSlides * 2; // Без дублированных слайдов
	const currentIndex = swiperInstance.realIndex; // Индекс текущего слайда
	const step = 405 / (totalSlides - 1); // Шаг перемещения в %

	// Перемещение прогресс-бара
	progressBar.style.transform = `translateX(${currentIndex * step}%)`;
}

// Подключаем прогресс-бар к первому слайдеру
swiperTwo.on('slideChange', () => updateProgressBar(swiperTwo));
swiperTwo.on('init', () => updateProgressBar(swiperTwo));

// Подключаем прогресс-бар ко второму слайдеру
swiperThree.on('slideChange', () => updateProgressBar(swiperThree));
swiperThree.on('init', () => updateProgressBar(swiperThree));

// Инициализируем слайдеры
swiperTwo.init();
swiperThree.init();



const counters = [
	{ value: 1, display: document.getElementById('counter-value') },
	{ value: 1, display: document.getElementById('counter-value_2') }
  ];
  
  const buttons = [
	{ decrement: document.querySelectorAll('.counter-btn')[0], increment: document.querySelectorAll('.counter-btn')[1] },
	{ decrement: document.querySelectorAll('.counter-btn_2')[0], increment: document.querySelectorAll('.counter-btn_2')[1] }
  ];
  
  // Функция для обновления счетчика
  function updateCounter(counter, change) {
	counter.value = Math.max(0, Math.min(9, counter.value + change)); // Ограничение от 0 до 9
	counter.display.textContent = counter.value;
  }
  
  // Привязываем события к кнопкам
  buttons.forEach((btn, index) => {
	btn.decrement.addEventListener('click', event => {
	  event.preventDefault();
	  updateCounter(counters[index], -1);
	});
  
	btn.increment.addEventListener('click', event => {
	  event.preventDefault();
	  updateCounter(counters[index], 1);
	});
  });
  
  

const dateInput = document.querySelector('.form__date_input');

// Получаем текущую дату
const today = new Date();
const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
dateInput.value = formattedDate;

dateInput.addEventListener('input', function (e) {
	// Получаем текущее значение и позицию курсора
	let value = e.target.value;
	let cursorPosition = e.target.selectionStart;

	// Удаляем все, кроме цифр
	value = value.replace(/[^\d]/g, '');

	// Если длина больше 8, обрезаем
	if (value.length > 8) {
		value = value.slice(0, 8);
	}

	// Форматируем дату, вставляя дефисы
	let formattedValue = '';
	for (let i = 0; i < value.length; i++) {
		if (i === 4 || i === 6) {
			formattedValue += '-';
		}
		formattedValue += value[i];
	}

	// Устанавливаем отформатированное значение
	e.target.value = formattedValue;

	// Корректируем позицию курсора
	let newCursorPosition = cursorPosition;
	if (cursorPosition === 4 || cursorPosition === 7) {
		newCursorPosition++;
	}
	e.target.setSelectionRange(newCursorPosition, newCursorPosition);
});

// Валидация даты при потере фокуса
dateInput.addEventListener('blur', function (e) {
	const datePattern = /^\d{4}-\d{2}-\d{2}$/;
	if (!datePattern.test(e.target.value)) {
		e.target.value = formattedDate;
	}
});



const selectWrapper = document.querySelector('.form__select_w');
const select = document.querySelector('.form__select');

selectWrapper.addEventListener('click', () => {
	selectWrapper.classList.toggle('open');
});


function accordion(accordionBlockSelector) {
	const accordionTitleAll = document.querySelectorAll(accordionBlockSelector + ' [data-accordion-title]');
	console.log(accordionTitleAll);
	accordionTitleAll.forEach(function (item) {
		item.addEventListener('click', function () {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
				return;
			} else {
				accordionTitleAll.forEach(function (i) {
					i.classList.remove('active');
				});
				item.classList.add('active');
			}
		});
	});
}

accordion('.accordionTest');



document.addEventListener('DOMContentLoaded', function () {
	Fancybox.bind('[data-fancybox="gallery"]', {
		infinite: true,
		keyboard: {
			Escape: 'close',
			Delete: 'close',
		},
		Thumbs: {
			autoStart: true,
		},
		Toolbar: {
			display: ['zoom', 'slideShow', 'fullscreen', 'download', 'thumbs', 'close'],
		},
		animationEffect: 'zoom',
		captions: function (fancybox, carousel, slide) {
			return slide.$trigger.dataset.caption || '';
		},
	});
});
