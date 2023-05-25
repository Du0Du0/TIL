const section = document.querySelector('section');
console.log(section);

const articles = section.querySelectorAll('article');
console.log(articles);

const btn = document.querySelector('.btn');
console.log(btn);

//특정 부모요소를 기점으로 직계자식요소를 모두 배열로 반환
//자식요소가 하나밖에 없더라도 배열로 묶어서 반환
const childEl = section.children;
console.log(childEl);

//특정 자식요소를 기점으로 직계부모를 반환
//부모요소는 무조건 단일 요소로 반환됨
const parentEl = btn.parentElement;
console.log(parentEl);

//이전 형제요소 반환
const preEl = btn.previousElementSibling;
console.log(preEl);

//다음 형제요소 반환
const nextEl = btn.nextElementSibling;
console.log(nextEl);

//조상 요소 반환
//const grandParentEl = btn.parentElement.parentElement;
const grandParentEl = btn.closest('main');
console.log(grandParentEl);

//다른 요소의 부모
const otherParentEl = btn.closest('ul').previousElementSibling;
console.log(otherParentEl);

//미션 .btn요소를 기점으로 div요소를 탐색구문으로 반환
const findEl = btn.closest('main').querySelector('div');
console.log(findEl);
