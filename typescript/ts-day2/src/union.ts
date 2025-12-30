let union: string | number;
union = "Hello type!";
union = 1213;
// union = false // 문자열과 순자형만 지정했기 때문에 논리형은 에러

// 배열에 문자열과 숫자만 허용을 할 수 있다
// 튜플보다 좀 더 유연하게 설정할 수 있다

let array: (string | number)[] = ["Apple", 1, 2, "Banana", 3, "Mango"];
let arr: Array<string | number> = ["Apple", 1, 2, "Banana", 3, "Mango"];

// 주의해야 할 점
type Person = {
  name: string;
  age: number;
};

type Developer = {
  name: string;
  skill: string;
};

function introduce(someone: Person | Developer) {
  someone.name; // 이건 가능
  //   someone.age; // Developer에는 age가 없기 때문에 타입에러
  //   someone.skill; // Person에는 age가 없기 때문에 타입에러
}

// 두 타입 별칭을 합쳐 하나의 { name: string, age: number, skill: number } 이라는 타입을 구성한다.
const neo: Person & Developer = {
  name: "Neo",
  age: 85,
  skill: "police",
};
