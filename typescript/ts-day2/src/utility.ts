// 유틸리티 타입
// 타입스크립트에서 타입 변경을 쉽고 용이하게 하기 위한 헬퍼 함수처럼 유틸리티 타입을 제공한다

// js 배열을 하면서 for,  while로도 해결이 가능하지만
// forEach, filter, map을 통해 간편하게 해결하는 것처럼

// 유틸리티 타입을 몰라도 인터페이스, 제네릭을 활용해서 타입을 바꿀 수 있지만
// 유틸리티 타입을 사용하면 훨씬 더 간결한 문법으로 타입을 정의할 수 있다

interface User {
  name: string;
  age: number;
  phone: number;
}

// Readonly<T>
// 타입의 모든 속성을 읽기 전용으로 변경한 새로운 타입을 반환
type readonly_user = Readonly<User>;

// Uppercase<String Type>
// 문자열의 각 문자를 대문자로 변환하고 리터럴 타입으로 만든다.

// 리터럴 타입
// 값 자체를 타입으로 만드는 것
// 특정 하나의 값으로 범위를 엄격하게 제한한다
type LowerGreeting = "Hello, world!";
type UpperGreeting = Uppercase<LowerGreeting>;

const greeting: UpperGreeting = "HELLO, WORLD!";
