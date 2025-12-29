let mathScore: number = 85;
let englishScore: number = 92;
let sclienceScore: number = 78;

let totalScore: number = mathScore + englishScore + sclienceScore;
let averageScore: number = totalScore / 3;

console.log(`totalScore: ${totalScore}`);
console.log(`averageScore: ${averageScore}`);

let userName: string = "태희";
let userAge: number = 20;
let isAdult: boolean = userAge >= 20;

let welcomeMessage: string = `환영합니다. ${userName}님! 당신은 올해 ${userAge}살입니다.`;
console.log(welcomeMessage);
console.log(isAdult);

function calculaterArea(width: number, height: number): string {
  return `면적은 ${width * height}입니다.`;
}

console.log(calculaterArea(15, 4));

let projectNames: string[] = ["A프로젝트", "B프로젝트", "C프로젝트"];
let userRecord: [number, string, boolean] = [2650, "태희", true];
let secondProject: string = projectNames[1] ?? "B프로젝트";
let recordName: string = userRecord[1];

console.log(`두번째 프로젝트: ${secondProject}`);
console.log(`기록된 사용자 이름: ${recordName}`);
