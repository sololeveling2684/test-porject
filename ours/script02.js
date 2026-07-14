// let student = {
//     name: "Lucky",
//     age: 20,
//     address: "Sindhuli"
// }
// for (let key in student) {
//     console.log(key);
// }

// let student = {
//     name: "Lucky",
//     age: 20,
//     address: "Sindhuli"
// }
// for (let key in student) {
//     console.log(key + ": " + student[key]);
// }

// let student = {
//     name: "Lucky",
//     age: 20,
//     address: "Sindhuli"
// }
// for (let key of student) {
//     console.log(key + ": " + student[key]);
// }

// let students = ["D","E","E","P","A"];
// for (let student of students) {
//     console.log(student);
// }

// function function1() {
// let a = 5;
// let b = 10;
// let c = a + b;
//     console.log(c);
// }
// function1();

// function add(a, b) {
//     console.log(a + b);
// }
// add(5, 6);

// function intro(name) {
//     console.log("hello " + name);
// }
// intro("Deepa");
// intro("Dev");
// intro("Lucky");

// function intro(name, age) {
//     console.log("hello " + name + " your age is " + age);
// }
// intro("Deepa", 20);
// intro("Dev", 21);
// intro("Lucky", 22);

// function intro(name, surname) {
//     console.log("hello " + name + " " + surname);
// }
// intro("Deepa", "Roy");
// intro("Dev", "Shrestha");
// intro("Lucky", "Lama");

// function add(a, b) {
//     return a + b;
// }
// let c = add(5, 6);
// console.log(c);

// let result = confirm("Are you sure you want to delete this file?");
// console.log(result);

// function add(a, b) {
//     return a + b;
// }
// let c = add(5, 6);
// console.log(c);0

// function sub(){
//     let a = 10;
//     let b = 5;
//     console.log(a - b);
// }
// sub();

// function sub(a, b) {
//     console.log(a - b);
// }
// sub(10, 5);

// function sub() {

//     return a - b;
// }
//     let a = 10;
//     let b = 5;
// console.log(sub());

// function sub(a, b) {
//     return a - b;
// }
// let c = sub(10, 5);
// console.log(c);

// function voting(age) {
//     if (age >= 18) {
//         console.log("You are eligible to vote.");
//     } else {
//         console.log("You are not eligible to vote.");
//     }
// }
// console.log(voting(20));
// console.log(voting(15));

// function username(name, password) {
//     if (name === "lucky") {
//         console.log("Hello Lucky");
//         if (password === "1234") {
//             console.log("You are logged in");
//         } else {
//             console.log("Incorrect password");
//         }
//     } else {
//         console.log("Incorrect username");
//     }
// }

// // Example calls
// username("lucky", "1234");
// username("lucky", "0000");
// username("someone", "1234");

// function username(name, password) {
//     if (name === "lucky") {
//         console.log("Hello Lucky");
//         if (password === "1234") {
//             console.log("You are logged in");
//         } else {
//             console.log("Incorrect password");
//         }
//     } else {
//         console.log("Incorrect username");
//     }
// }

// console.log(username("lucky", "1234"));

// function username(name) {
//     if (name === "lucky") {
//         console.log("Hello Lucky");
//     }else {
//             console.log("Incorrect username");
//         }
//     }
//     console.log(username("lucky"));

// function result(pass, fail) {
//     if (pass >= 40) {
//         console.log("You have passed the exam.");
//     }else {
//         console.log("You have failed the exam.");
//     }
// }
// console.log(result(25, 75));

// function username(name, password) {
//     if (name === "lucky") {
//         console.log("Hello Lucky");
//         if (password === "1234") {
//             console.log("You are logged in");
//         } else {
//             console.log("Incorrect password");
//         }
//     } else {
//         console.log("Incorrect username");
//     }
// }
// console.log(username("lucky", "1234"));
// console.log(username("lucky", "0000"));
// console.log(username("someone", "1234"));

// function result(name, marks) {

//     if (marks >= 40) {
//         return name + " has passed.";
//     } else {
//         return name + " has failed.";
//     }

// }

// let student1 = result("Alex", 75);
// let student2 = result("John", 25);

// console.log(student1);
// console.log(student2);


// function withdraw(balance, amount) {
//     if (amount <= balance) {
//         return balance - amount;
//     } else {
//         return "Insufficient balance";
//     }
// }

// let newBalance = withdraw(1000, 500);
// console.log(newBalance); // Output: 500

// const ordercheck = function(status) {
//     if (status === "pending") {
//         return "Your order is pending.";
//     }else if (status === "processing") {
//             return "Your order is being processed.";
//     }else if (status === "on the way") {
//         return "Your order is on the way.";
//     }else {
//         return "Your order has been delivered.";
//     }
// }
// console.log(ordercheck("pending"));

// const car = {
//     color: "red",
//     model: "Toyota",
//     year: 2020,
// }

// console.log(car.color); // Output: red
// car.color = "blue";
// console.log(car.color); // Output: blue
// delete car.model;
// console.log(car.model); // Output: undefined
// car.make = "Honda";
// console.log(car.make); // Output: Honda

// console.log(car.color); // Output: red
// car.color = "blue";
// console.log(car.color); // Output: blue
// delete car.model;
// console.log(car.model); // Output: undefined
// car.make = "Honda";
// console.log(car.make); // Output: Honda