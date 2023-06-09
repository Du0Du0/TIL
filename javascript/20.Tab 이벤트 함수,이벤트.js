//미션1
//각 버튼을 클릭떄마다 클릭한 순번의 버튼과 박스만 활성화

//미션2
//이벤트문과 기능 함수를 분리 호출

//미션3
//이미 활성화된 버튼 클릭시 불필요하게 함수호출 방지
//활성화 버튼 재이벤트 방지 기능 구현

//변수부분
const frame = document.querySelector('section');
const btns = frame.querySelectorAll('li');
const boxs = frame.querySelectorAll('article');
const ul = document.querySelector('ul');

const childEl = ul.children;
console.log(childEl);
ul.append(document.createElement('p'));
console.log(nodeListEl);

/*
HTMLCollectio
-document.getElementById('아이디선택자')
-document.getElementByClassName('클래스 선택자');
-부모 요소.children
-forEach로 반복불가 -> 순수 배열로 변환해야지 forEach활용가능
-Live DOM (동적인 돔) 

NodeList :
-document.queryselector('선택자')
-document.queryselectorAll('선택자')
-forEach 반복 가능
-Static DOM (정적인 돔)

유사배열을 순수배열로 변환
Array.from(유사배열)
*/

//이벤트 바인딩
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		//버튼 활성화: 순간적으로 모든 버튼을 비활성화 했다가 idx순번의 요소만 활성화
		for (const el of btns) el.classList.remove('on');
		btns[idx].classList.add('on');

		//박스 활성화
		for (const el of boxs) el.classList.remove('on');
		boxs[idx].classList.add('on');
	});
});

//예제02
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(boxs, idx);
		activation(btns, idx);
	});
});

//예제02 - 더 여러개일 경우, 반복문으로 묶자
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});

////예제03 - 이미 활성화된 버튼 클릭시 불필요하게 함수호출 방지
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		if (e.currentTarget.classList.contains('on')) return;
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});

//함수정의
function activation(arrEl, idx) {
	for (const el of arrEl) el.classList.remove('on');
	arrEl[idx].classList.add('on');
}
