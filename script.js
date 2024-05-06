const previous = document.querySelectorAll('.previous-btn');
const next = document.querySelectorAll('.next-btn');
const storiesSlider = document.querySelector('.stories');
const friendsSlider = document.querySelector('.suggestion-list');

function scrollItem(item, scrollValue, btn) {
	console.log(item);
	if (scrollValue)
	btn.classList.add('show-btn');
	scrollValue += item.firstElementChild.offsetWidth + 10;
	item.scroll({
		left: scrollValue,
		behavior: 'smooth'
	});
}
function slider() {
	for (let i = 0; i < next.length; i++) {
		next[i].addEventListener('click', () => {
			if (i === 0)
				storiesSlider.scrollLeft += storiesSlider.firstElementChild.offsetWidth + 10;
			else if (i === 1)
				friendsSlider.scrollLeft += friendsSlider.firstElementChild.offsetWidth + 10;
		});
	}
	for (let i = 0; i < previous.length; i++) {
		previous[i].addEventListener('click', () => {
			if (i === 0)
				storiesSlider.scrollLeft -= storiesSlider.firstElementChild.offsetWidth + 10;
			else if (i === 1)
				friendsSlider.scrollLeft -= friendsSlider.firstElementChild.offsetWidth + 10;
		});
	}
	storiesSlider.addEventListener('scroll', () => {
		storiesSlider.scrollLeft <= 20
			? previous[0].classList.remove('show-btn')
			: previous[0].classList.add('show-btn');
		let maxScroll = storiesSlider.scrollWidth - storiesSlider.clientWidth - 20;
		storiesSlider.scrollLeft >= maxScroll
			? next[0].classList.add('hide-btn')
			: next[0].classList.remove('hide-btn');
		});
	friendsSlider.addEventListener('scroll', () => {
		friendsSlider.scrollLeft <= 20
			? previous[1].classList.remove('show-btn')
			: previous[1].classList.add('show-btn');
		let maxScroll = friendsSlider.scrollWidth - friendsSlider.clientWidth - 21;
		friendsSlider.scrollLeft >= maxScroll
			? next[1].classList.add('hide-btn')
			: next[1].classList.remove('hide-btn');
	});
}
slider();