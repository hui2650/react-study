// 타입 별칭
// 사용자가 정의하는 타입변수
let Dom: {
  version: string;
  el: (selector: string) => void;
  css: (prop: string) => void;
};

// type 별칭으로 타입형태를 묶어둔 뒤 별칭을 타입명으로 선언해서 사용하는 방식
type Operation = {
  version: string;
  el: (selector: string) => void;
  css: (prop: string) => void;
};

let dom: Operation = {
  version: "0.0.1",
  el() {},
  css() {},
};

// 타입 별칭을 선언하는 방법은 변수와 비슷하다
type Name = string;
type Age = number;

let name: Name = "Tom"; // string 대신 Name
let age: Age = 20; // number 대신 Age
