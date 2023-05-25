const box = document.querySelector('article');
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const btnToggle = document.querySelector('.toggle');

btnStart.addEventListener('click', (e) => {
	e.preventDefault();
	//DOM요소에 class명 추가
	box.classList.add('on');
});

btnReset.addEventListener('click', (e) => {
	e.preventDefault();
	//DOM요소에 class명 제거
	box.classList.remove('on');
});

btnToggle.addEventListener('click', (e) => {
	e.preventDefault();
	//DOM요소에 class명 토글처리
	box.classList.toggle('on');

	const isOn = btnToggle.classList.contains('on');
	console.log(isOn);

	if (isOn) {
		btnToggle.classList.remove('on');
		box.classList.remove('on');
	} else (!isOn) {
    btnToggle.classList.add('on');
	box.classList.add('on');
  }
});
