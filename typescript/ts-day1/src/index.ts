// 1. Boolean
// 논리적인 참/거짓을 나타낸다

let isStudent: boolean = true;
let hasLicense: boolean = false;

// isStudent = "yes"; 문자열을 boolean 타입 변수에 할당할 수 없다

console.log(`학생 여부: ${isStudent}`);

// 2. Number(숫자)
// 정수: 소수점이 없는 숫자
// 실수: 소수점이 있는 숫자
// Infinity: 무한대
// NaN(Not a Number)

let age: number = 28;
let salary: number = 55000.5;
let positiveInfinity: number = Infinity;
let negativeInfinity: number = -Infinity;
let notANumber: number = NaN;

console.log(`나이: ${age}, 연봉: ${salary}`);

// 3. string(문자열)
// 텍스트 데이터를 나타낸다
// 템플릿 리터럴도 사용 가능하다

let userName: string = "김철수";
let greeting: string = `안녕하세요, 저는 ${userName}입니다.`;

console.log(greeting);

// 4. Array(배열)
// 타입 뒤에 []을 붙이거나, Array<Type>형식으로 선언한다.

let scroes: number[] = [90, 85, 95, 100];
//scores.push("하이")
scroes.forEach((x) => console.log(x));

let names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(names);

// 5. Tuple(튜플)
// 데이터의 순서와 의미를 타입 시스템으로 인코딩하는 방식

// type
// ts에서 기존 타입을 위한 새로운 이름을 정의할 때 사용
type userProfile = [number, string, boolean];

// 요소의 개수, 타입을 정확히 써야한다
let person: userProfile = [35, "태희", true];

console.log(typeof person);
console.log(person);
console.log(`이름: ${person[1]}, 나이: ${person[0]}`);

// 6. Any(모든타입)
// 타입 검사를 일시적으로 우회한다

let randomValue: any = 50;
randomValue = "자유로운 타입";
randomValue = [1, 2, 3]; // 오류없이 재할당이 가능하다
console.log(`Any 값: ${randomValue}`);

// Any의 목적

// 1. JavaScript 프로젝트를 TypeScript로 전환할 떄
// 모든 파일의 타입을 즉시 정의하기 어려울 때 임시로 사용

// 2. 타입 정의 파일(d.ts)이 제공되지 않는 서드파티 라이브러리에서
// 가져온 데이터를 처리할 때 사용된다

// 3. 외부 API나 사용자 입력 등 런타임에 타입이 동적으로 변하거나
// 예측하기 힘든 데이터를 처리할 때

// 존재하지 않는 속성에 접근해서 undifined오류가 발생할 가능성이 높아진다
// 해당 타입에 없는 메서드를 호출해도 에러가 나지 않기 때문에 런타임 시
// '함수가 아닙니다' 오류가 발생할 가능성이 크다

// 7. Null & Undefined
// 오직 해당 타입의 값만 가질 수 있습니다.
let u: undefined = undefined;
let n: null = null;

// 함수의 매개변수와 반환값에 타입을 정한다
function calculator(num1: number, num2: number): number {
  return num1 + num2;
}

let result: number = calculator(10, 20);

console.log(`합계: ${result}`);
console.log(calculator(50, 30));

// 반환타입이 없는 함수 (void)
// void 타입으로 지정된 함수는 값을 반환할 수 없다
function logMessage(message: string): void {
  console.log(`[메세지]: ${message}`);
}

logMessage("함수 실행 완료");
