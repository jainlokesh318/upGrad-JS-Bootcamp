//1. let, const and var
// var z = 4;
// console.log(z);
// var z = 12;
// console.log(z);

// let y = 5;
// console.log(y);
// //let y = 12;
// y = 13;
// console.log(y);

// let/const is block scoped
// var is function scoped

// if (true) {
//   let z = 10;
//   console.log("Inside If",z);
// }

// if (true) {
//   const z = 10;
//   //let z = 14
//   console.log("Inside If const",z);
// }
// // console.log("Outside If", z)

// if (true) {
//   var y = 10;
//   console.log("Inside If y",y);
// }
// console.log("Outside If y", y)

//Exercise 1
// let a = 10
// {
//   let a = 4;
// }
// console.log(a)

//Exercise 2
// let b = 10;
// {
//   b = 12;
// }
// console.log(b);

// function test(a, b) {
//   console.log(a, b);

//   return 123
// }

// test("abcd", "xyz");

//Exercise 3

// function test() {
//   var a = 12
// }
// console.log(a)

// {
//   let b = 10
//   // const b = 10
// }
// console.log(b)

// function test() {
//   let a = 12
// }
// console.log(a)

// let a = 10

// function test(){
//   let a = 50;
//   console.log("1", a)
//   {
//     let a = 60
//   }
//   console.log("2", a)
// }
// test()
// console.log("3", a)
//Answer
//1 -> 50
//2 -> 50
//3 -> 10


// let a = 10

// function test(){
  
//   let a = 50;
//   console.log("1", a)
//   {
//     let a = 60
//     console.log("2", a)
//   }
//   console.log("3", a)
// }
// test()
// console.log("4", a)

// console.log(a)
// let a = 10
// console.log(a)


let a = 10
function test(){
  console.log("1", a)
  let a = 50;
  console.log("2", a)
  {
    let a = 60
    console.log("3", a)
  }
  console.log("4", a)
}
test()
console.log("5", a)

// let s = "ergerg";
// console.log(s);
