var boxs = document.querySelectorAll('#wrap p');

for (var i = 0; i < boxs.length; i++) {
	boxs[i].onclick = function () {
		console.log(i);
	};
}

/*
실제로 코드는 아래와 같이 풀리는게 정상이지만 
var라는 변수를 쓰면 호이스팅이 발생
boxs[0].onclick = function(){console.log(i)}
boxs[1].onclick = function(){console.log(i)}
boxs[2].onclick = function(){console.log(i)}

hoisting : 코드블록안쪽에서 선언된 변수는 해당 코드블록 밖에서는 호출 불가
코드블록 안쪽의 변수값이 최상위 요소에서 읽히는 문제

실제 코드가 반복을 돌때마다 i값이 각각 0,1,2까지 반복을 돌고 값이 사라져야 되지만
var 로 변수를 선언했기 때문에 지역변수 i값이 전역화되서 반복이 끝나고 나서도 
전역에 var i = 3;값이 등록됨

해결방법은 지역변수로 유지되야 되는 i값의 hoisting을 막기 위해서 
이벤트 연결구문을 즉시실행함수로 감싸면 내부 i값이 전역으로 빠져나가는 걸 방지
*/

for (let i = 0; i < boxs.length; i++) {
	boxs[i].onclick = function () {
		console.log(i);
	};
}
