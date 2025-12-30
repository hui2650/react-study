// function add(x: string | number,  y: string | number): string | number{
//     return x + y;
// }
// 의도한대로 값을 넣어서 실행이 잘 되면 좋지만, x와 y에 다른 타입을 넣게되면 의도하지 않는대로 실행되서 컴파일러가 에러를 일으킨다

// 해결법 1. 오버로딩을 한다

// 1. js에는 오버로딩이라는 개념이 없다
// 2. ts에서는 외부에 공개할 설명서
// 실행코드가 아니라 '이 함수는 이렇게 써라' 라는 규칙에 대한 선언

function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any) {
  return x + y;
}

// interface Add {
//   (x: string, y: string): string;
//   (x: number, y: number): number;
// }

// const add: Add = (x: any, y: any) => x + y;

add(1, 2); // 3
add("hello", "world"); // 'helloworld'

// 제네릭의 사용
// 꺽쇠 괄호와 대문자 T 변수로 지정함으로서, 제네릭을 통해 코드에 선언한
// 타입을 변수화 하고, 나중에 타입을 정하는 식으로 유연하게 사용이 가능하다

// 인수들을 받아서 배열로 만들어주는 메소드
function toArray<T>(x: T, y: T): T[] {
  return [x, y];
}

console.log(toArray<number>(1, 2));

// 화살표 함수로 제네릭을 표현
const toArray2 = <T>(a: T, b: T): T[] => {
  return [a, b];
};

console.log(toArray2<string>("hello", "world"));

const result: number[] = toArray(4, 5);

toArray<string | number>(630, "태희");

console.log(result);

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

loggingIdentity([1, 2, 3]);
loggingIdentity2([1, 2, 3]);

// 제네릭은 인터페이스와 정말 많이 쓰인다

interface Mobile<T> {
  name: string;
  price: number;
  option: T; // 제네릭 타입 - option 속성에는 다양한 데이터 자료가 들어온다고 가정
}

// 제네릭 자체에 리터럴 객체 타입도 할당 할 수 있다.
const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s25",
  price: 100000,
  option: { color: "black", coupon: false }, // 제네릭 타입에 의해서 option 속성에 유연하게 타입이 할당됨
};

const m2: Mobile<string> = {
  name: "s20",
  price: 90000,
  option: "smart", // 제네릭 타입에 의해서 option 속성에 유연하게 타입이 할당됨
};

// 제네릭 함수 타입
// 타입스크립트 함수 자체도 하나의 타입으로 지정할 수 있다

// 인터페이스로 함수를 지정
interface Add {
  (x: number, y: number): number;
}

let myFunc: Add = (x, y) => x + y;

// 1. 제네릭 함수 타입 구조를 정의하는 인터페이스
interface GenericIdentityFn {
  //어떤 타입을 받든, 그 타입을 그대로 반환하는 함수
  <T>(arg: T): T;
}

// 2. GenericIdentityFn 인터페이스의 규격을 만족하는 실제 제네릭 함수 구현
function identity<T>(arg: T): T {
  return arg;
}

// 변수 myIdentity에 타입과 값 할당
// 타입을 인터페이스로 설정하게 되면
// myIdentity는 '어떤 타입을 받아 그대로 반환하는 제네릭 함수
let myIdentity: GenericIdentityFn = identity;

// 함수 호출 (명시적 타입 인자 전달)
myIdentity<number>(100);

//함수 호출 (다른 타입 인자 전달)
myIdentity<string>("100");

// 다른 타입을 제네릭에 전달
console.log(myIdentity<string>("홍길동"));
