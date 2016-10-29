var header = document.getElementsByClassName('header'),
	rand = 0;

function randomNum() {
	rand = Math.floor((Math.random() * 10) + 1);
	return this;
}

if (header.length > 0) {
	randomNum();

	window.addEventListener('scroll', function() {
		if (rand < 3) {
			if (window_width > 960) {
				header[0].querySelector('.header__title').style.transform = 'translateX(' + (window.pageYOffset / 5) + 'px)';
			} else {
				header[0].querySelector('.header__title').style.transform = 'translateX(' + (window.pageYOffset / 1.5) + 'px)';
			}
		} else if (rand < 6) {
			if (window_width > 960) {
				header[0].querySelector('.header__title').style.transform = 'translateY(' + (window.pageYOffset / 5) + 'px)';
			} else {
				header[0].querySelector('.header__title').style.transform = 'translateY(' + (window.pageYOffset) + 'px)';
			}
		} else {
			if (window_width > 960) {
				header[0].querySelector('.header__title').style.transform = 'translateX(-' + (window.pageYOffset / 5) + 'px)';
			} else {
				header[0].querySelector('.header__title').style.transform = 'translateX(-' + (window.pageYOffset / 1.5) + 'px)';
			}
		}
	});
}