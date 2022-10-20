// ---------------  For installation ------------ 
// npm i -g typescript
// tsc -v

// ------------- Creating tsc config file ------------ 

// tsc --init

// ------------ Creating package file ------------------

// npm init

// ============== Key Point For setup ================ 

// from tsconfig file when can target es5 and es6
// outDir "./dist" -----------> Js file will be there
// rootDir: "./src" -----------> TS file will be there
// tsc compile the program

// tsc --watch index




// -------------- Basic Type ------------------

// let id: number = 12;
// let student: string = "danish";
// let isClass: boolean = true;
// let age = 27;
// console.log(typeof id, id)
// console.log(typeof student, student)
// console.log(typeof isClass, isClass )
// console.log(typeof age, age)

// ============= Key Point =============

// if there is no type specify it will consider as any

// ------------------ Array -----------------

// let roll_number: number[] = [49,63,12];
// console.log(roll_number)
// roll_number.push(80);
// console.log(roll_number)
// roll_number.push("Danish");
// i want to push string but it defined as number so it will give error
// let arr: any[] = [1, true, 'Hello']
// console.log(arr);
// there we can give any type of data type
// let arr2 = [1, true, 'Hello'];
// console.log("without any type specified",arr2)

// ------------------- tuple -------------

// let person:[string,number,boolean] = ["Danish",24,true];
// console.log(person)
// console.log(typeof person);
//type of person is object

// ------------------- tuple Array -------------

// let students : [number,string];
// students = [24 , "Danish"];
// console.log(students)
// console.log(typeof students);

// why it give object type ??

// ------------- union ----------------

// let age : string | number = 24
// let age1 : string | number = "twenty Four";
// let age2 : string | number;
// age2 = 24;
// console.log(age,age1,age2);

// ------------------- Enum ------------

// enum direction1 {
//     up,
//     down,
//     left,
//     right,
// }
// console.log(direction1)

// we can also give it like up = 4

// enum direction2 {
//     Up = 'Up',
//     Down = 'Down',
//     Left = 'Left',
//     Right = 'Right',
//   }

//   console.log(direction2)

// ------------------- Objects -------------

// let user: {
//   name: string;
//   age: number;
// } = {
//   name: "Danish",
//   age: 24,
// };
// console.log(user);

// ------------- isolate object type define ------------

// type students = {
//   roll: number;
//   name: string;
// };
// const student: students = {
//   roll: 1,
//   name: "danish",
// };
// console.log(student.name);

// ----------------  Type Assertion -------------------

// let age : any = 24;
// let age2 = <number>age;
// or
// let age2 = age as number
// console.log("--> age",typeof age , age);
// console.log("--> age2",typeof age2 , age2)

// ------------------ Function -------------

// const add = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(add(1, 4));
// console.log(typeof add(1, 4));

// OR

// const intro = (name: string): string => {
//   return name;
// };
// console.log(intro("Danish"));


// if we will pass not specified type it will give error
// there return type will be number


// ------------------ Function Type Void -------------

// const msg = (value : string | number) : void =>{
// console.log(value)
// }
// msg("Danish");
// msg(24);
