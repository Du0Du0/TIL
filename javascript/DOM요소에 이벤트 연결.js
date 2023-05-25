//예제1

window.onload = () => {
	console.log('test');
};

/*
  //이런식으로 할 경우, 다른 개발자가 덮어쓰기 가능(오류발생 가능성 업)
	const frame = document.querySelector('#wrap');
	console.dir(frame);

	//보통 e 또는 evt 입력
	frame.onclick = (e) => {
		console.log('cliked');
		console.log('e.lientX');
	};
};
*/

const frame = document.querySelector('#wrap');
const btn = document.querySelector('button');

//추가하는 식이라 덮어쓰기 불가능 동시에 같이 실행이 됨
//함수에 인수값을 전달해야 되는 이벤트 형태로 이벤트 연결 시
//여러개의 기능을 쓸때는 비효율적인 방법
frame.addEventListener('click', () => {
	console.log('엄청 중요한 코드');
});

//01. 함수에 인수값을 전달해야하는 형태로 이벤트 연결시
frame.addEventListener('click', handler);

//02. 선언적 함수로 미리 핸들러함수 정의
//함수형태로 하면 여러 기능을 같이 쓸 수있음
function handler(text) {
	console.log('text');
}

//03. 이벤트 함수 제거 기능
btn.addEventListener('click', () => {
	//선택자에 이벤트 연결되어 있는 함수 제거가능
	//이벤트 제거를 위해서는 선택자에 익명함수가 아닌 선언적 함수가 등록되어 있어야 함
	frame.removeEventListener('click', handler);
});

//바닐라 자바스크립트: 서브페이지 렌더링 , 리액트: 단일페이지 렌더링
//어떨때 이벤트 함수를 제거할까?
//보통 윈도우 객체에 따라 여러 이벤트 핸들러 함수를 등록하게 됨
//특정 페이지에서만 동작해야하 되는 핸들러 함수를 다른 페이지에서는 동작 금지 해야함
//선택자에 등록되어 있는 이벤트 핸들러 함수를 지울 필요가 있음

//---------------------------------------------------------------------------

//예제2

const btns = document.querySelector('ul li');

//a태그 연결할 때는 1. 괄호안에 e를 넣고 e.preventDefault를 써준다.
btns[0].addEventListener('click', (e) => {
	e.preventDefault();
	console.log(0);
});

//만약에 반복 이벤트 연결시 순서값이 필요하다면 forEach
//여러개의 버튼이 있으니 배열 순회를 하는 forEach문을 써서 코드 줄이기
//순서를 활용할 때
btns.forEach((el, idx) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(idx);
	});
});

//만약에 반복 이벤트 연결시 순서값이 필요없다면 for of
//for of문 사용
//순서가 필요없을 때
for (const el of btns) {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(e.currentTarget);
	});
}
