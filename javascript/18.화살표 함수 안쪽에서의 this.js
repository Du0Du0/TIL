const list = document.querySelectorAll('li');

//자바스크립트에서 this는 최상위 객체인 window
console.log(this);

//일반 함수로 하면 this오류가 나옴 (this값이 무엇인지 파악하고, window로 따로 지정해줘야됨)
list.forEach(function (data, idx) {
	data.addEventListener(
		'click',
		function () {
			//이벤트에 바인딩되어 있는 function문 안쪽에는 this: 이벤트 발생대상으로 객체가 생성이 됨
			//function문이 어디에서 호출되느냐에 따라 this값이 window가 아닌 값으로 계속 변경됨
			console.log(this);
		}.bind(this)
		//function문에서는 이벤트 문안쪽의 this값을 고정하기 위해서 해당 함수 뒤에 bind()함수로 원하는 객체 값을 고정 가능
	);
});

list.forEach((data, idx) => {
	data.addEventListener('click', () => {
		//화살표함수 안쪽에서는 this객체가 생성되지 않음
		//this객체가 생성안되는데 this값을 호출하면 상위 스코프(코드블록)에서 해당 값을 참조
		console.log(this);
	});
});
