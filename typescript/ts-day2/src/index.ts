// 인터페이스

interface Human {
  // 객체를 생성할 떄 필요한 속성이나 메서드의 타입을 정의한다
  name: string;
  age: number;
  boo(): void; // boo함수는 반환타입이 void임
}

// 인터페이스 자체를 타입으로 줘서 객체 생성
const person: Human = {
  name: "홍길동",
  age: 5,
  boo: () => console.log("this is boo."),
};

//오류발생 'Human' 인터페이스에 정의되지 않은 'hobby' 속성을 추가할 수 없다.
/*
const person2: Human = {
  name: "홍길동",
  age: 30,
  boo: () => console.log("this is boo"),
  hobby: "게임하기",
};
*/
//오류발생 'Human' 인터페이스에 정의된 모든 속성을 추가해야한다
/*
const person3: Human = {
  name: "홍길동",
  age: 30,
};
*/

// 매개변수에서 인터페이스를 타입으로 받는다.
function booboo(a: Human): void {
  console.log(`${a.name} is ${a.age} years old`);
}

booboo(person); // 홍길동 is 5 years old
person.boo(); // this is boo.

// 선택적 속성(Optionoal Properties)
// 객체에  특정 속성이 있을 수도 있고 없을 수도 있을 때는 속성명 뒤에 ?를 붙여
// 선택적 속성으로 만들 수 있다

interface PersonWithJob {
  name: string;
  age: number;
  job?: string;
}

const worker1: PersonWithJob = {
  name: "태희",
  age: 20,
  job: "developer",
};

// job 속성이 없어도 유효함
const worker2: PersonWithJob = {
  name: "짱구",
  age: 5,
};

// 읽기 전용 속성(readonly Properties)
// 인터페이스로 객체를 처음 생성할 때만 값을 할당하고, 그 이후에는 변경할 수 없는 속성을 의미한다

interface Config {
  // API_KEY는 한 번 설정되면 변경할 수 없다
  readonly API_KEY: string;
  SERVER_URL: string;
}

const appConfig: Config = {
  API_KEY: "secret-key-123",
  SERVER_URL: "http://localhost:8080",
};

//프로퍼티에 접근해서 수정하려고 하면 오류가 나게 된다.
// appConfig.API_KEY = "new_key";

// Readonly 유틸리티(Utility) 활용
interface IUser {
  name: string;
  age: number;
}

let user: Readonly<IUser> = {
  // Array 처럼 따로 Readonly 라는 자료형이 있다고 생각하면 된다
  name: "Neo",
  age: 36,
};

// user.age = 85; // Error
// user.name = 'Evan'; // Error

// 타입스크립트는 함수명이 아닌 함수의 모양(인자, 리턴) 타입을 쓴다
interface MathOperation {
  // (매개변수 이름: 타입, 매개변수 이름: 타입): 반환타입
  (x: number, y: number): number;
}

// 매개 변수 이름이 인터페이스와 일치할 필요가 없다.
// 또한 타입 추론을 통해 선언할 함수에 타입을 굳이 쓸 필요가 없다.
const add: MathOperation = (a, b) => {
  return a + b;
};

// 규약을 따르지 않으면 오류 발생! (예: 문자열을 반환하려고 할 때)
/*
const multiply: MathOperation = (a, b) => {
    return `결과: ${a * b}`; // Error: Type 'string' is not assignable to type 'number'
};
*/

console.log(`덧셈 결과: ${add(5, 3)}`); // 8
