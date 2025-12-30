interface Student {
  name: string;
  age: number;
  introduce(): void;
}

const taehui: Student = {
  name: "태희",
  age: 23,
  introduce: () => console.log("나는 태희"),
};
