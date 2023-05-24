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

//추가하는 식이라 덮어쓰기 불가능 동시에 같이 실행이 됨
//함수에 인수값을 전달해야 되는 이벤트 형태로 이벤트 연결 시
frame.addEventListener('click', () => {
	console.log('엄청 중요한 코드');
});

frame.addEventListener('click', () => handler('test'));

//선언적 함수로 미리 핸들러함수 정의
function handler(text) {
	console.log('text');
}
