/* eslint-disable no-constant-condition */
import "../styles/index.scss";
import { Javascript } from "../languages/javascripts";
import $, { data, event } from "jquery";

const carId = 100;
console.log("result: " + carId);

//

function dummy(...restParameter) {
  restParameter.forEach((parameter) => console.log(parameter));
}

dummy(1, 23, 4423);

//
let numberArray = [1, 3, 23];

let [a1, a2, a3] = numberArray;

console.log(a1, a2, a3);

//
function spread(b1, b2, b3) {
  console.log(b1, b2, b3);
}

let toPassToSpread = [1, 23, 3];

spread(...toPassToSpread);
let iterableString = "cyka";
spread(...iterableString);

//
let num = 15;
let text = num.toString();
console.log(typeof text);
console.log(typeof num);

//block scope
let message1 = "outside";
if (5 === 5) {
  let message1 = "equal";
  //   message1 = "equal";
  console.log(message1);
}

console.log(message1);

//iife
let app = (function () {
  let stupidNum = 69;
  return {};
})();
console.log(app);

//iife with a closure
let app1 = (function () {
  let studentId = 1;
  let getId = function () {
    return studentId;
  };
  return { getId: getId };
})();
console.log(app1.getId());

//objects call and apply
let o = {
  bookId: 21,
  getBookId: function () {
    return this.bookId;
  },
};

let newO = { bookId: 23 };
//better to use call without passing parameters
console.log(o.getBookId.apply(newO, ["ifusdg", "dfsjrfsd"]));

//binding (making a copy of a function)
let g = { bookId: 69 };
let newFn = o.getBookId.bind(g);
console.log(newFn());

//constructors
function Bike() {
  this.proptery1 = "im the property";
  this.avar = "from out of interpolation";
  this.method = function () {
    console.log(`logging: "${this.proptery1}"` + this.avar);
  };
}

let bike = new Bike();
bike.method();

//arrays
let newArrayOfObjects = [{ prop: 12 }, { prop: 21 }];

newArrayOfObjects.forEach((object) => console.log(object));
let resultOfFind = newArrayOfObjects.find((object) => object.prop === 12);
console.log("find method:");
console.log(resultOfFind);

//prototypes
String.prototype.usingPrototype = function () {
  return this.toString() + " from prototype";
};

console.log("hello world".usingPrototype());

//classes
class Animal {
  #animalGroup;
  someField;
  constructor() {
    this.#animalGroup = 1;
    this.someField = 23;
  }

  getGroup() {
    return this.#animalGroup;
  }
  getField() {
    return `${this.someField}`;
  }
}

let animal = new Animal();
console.log(animal.animalGroup);
console.log(animal.getGroup());
console.log(animal.getField());

//inheritance
class Cat extends Animal {}
let cat = new Cat();
console.log("from inheritance: " + cat.getGroup());

//modules
class Assembly extends Javascript {}

let as = new Assembly();
console.log(as.getName());

//window object
console.log(window.console);

//dom; changing the webpage font
let domResult = document.getElementById("targetme");
let domResult1 = document.getElementsByTagName("p");
console.log(domResult);
console.log(domResult1);
// for (let i = 0; i < domResult1.length; i++) {
//   domResult1[i].style.color = "red";
// }

const parent = domResult1;

Array.prototype.forEach.call(parent, (child) => {
  console.log(child);
  child.style.color = "red";
});

// promises
let promise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 10, "somevalue");
});

promise.then(
  (value) => console.log("fullfilled " + value),
  (error) => console.log("rejected " + error)
);

let p = new Promise((resolve, reject) => {
  let mathResult = 1 + 1;
  if (mathResult === 2) {
    resolve("success");
  } else reject("fail");
});

p.then((m) => {
  console.log("success with the message " + m);
}).catch((m) => {
  console.log("this is the error with the message " + m);
});

//jquery
const URL_MOCKAPI_IO = "http://636a7bfcc07d8f936d9f7509.mockapi.io//users";
let promiseJquery = $.get(URL_MOCKAPI_IO);

let objectJqueryGet = null;
promiseJquery.then(
  (data) => {
    objectJqueryGet = data;
    console.log("successful: " + data);
  },
  (fail) => {
    console.log("some fail: " + fail);
  }
);

// if (objectJqueryGet !== null) {
//   console.log("expanding the object get request" + objectJqueryGet.getName);
// }

//working with jquery post
let someDataForJqueryPost = {
  name: "Abraham Lincoln",
  avatar: "./src/images/webpack.png",
};

let promiseForPost = $.post(URL_MOCKAPI_IO, someDataForJqueryPost);

// promiseForPost.then( (success, fail) =>{

// }

// )

//testing two types of arrow functions
// let simpleArrowFunction = (x, y) => {
//   console.log("from a simple arrow function");
//   console.log(x);
//   console.log(y);
// };

// //arrow function that takes other arrow functions as parameters
// let notObvArrowFunction =
//   ((x) => {
//     console.log("from not simple arrow function");
//     console.log(x);
//   },
//   (y) => {
//     console.log(y);
//   });

//   console.log(simpleArrowFunction(1, 2));
//   console.log(notObvArrowFunction(1, 2));

//handling user data

let form = document.getElementById("my-form");

form.addEventListener("submit", (event) => {
  let name = form.elements["user-name"];
  let avatar = form.elements["avatar"];
  let error = document.getElementById("name-error"); //important not to mess this line

  if (name.value.length < 3) {
    error.textContent = "Invalid input";
    error.style.color = "green";
    error.style.borderColor = "red";
    name.focus;

    event.preventDefault();
  }
  console.log(name.value + " " + avatar.value);
});

//
const fruits = ["apple", "banana", "orange"];

console.log("test");
console.log(fruits.map((fruit) => fruit.length));

let testVar = (a, b) => a + b;
console.log(testVar(1, 2));

const obj = {
  num: 2,
};

// eslint-disable-next-line no-undef
globalThis.name = "new name";

let performConcat = (name) => name + " was catinating";
console.log(performConcat.call(obj, 23));

//post request

let postForm = document.getElementById("my-mockapi-form");
postForm.addEventListener("submit", (listener) => {
  let newName = postForm.elements["new-name"];
  let link = postForm.elements["new-avatar"];

  let postRequest = [
    {
      name: newName.value,
      avatar: link.value,
    },
  ];

  let postPromise = $.post(
    "http://636a7bfcc07d8f936d9f7509.mockapi.io/users",
    postRequest
  );

  // if (newName.value === "") {
  //   error.text = "can't be empty";
  //   error.style.color = "red";
  //   newName.focus;
  //   event.preventDefault();
  // }

  postPromise.then(
    (success) => console.log("post succeeded ", success),
    (fail) => console.log("post failed ", fail)
  );
  event.preventDefault();
});


// let form = document.getElementById("user-form");
// form.addEventListener("submit", (event) => {
//   let user = form.elements["user"];
//   let avatarFile = form.elements["avatar-file"];

//   let posting = {
//     user: user.value,
//     avatarFile: avatarFile.value,
//   };

//   let promise = $.post("link", posting);

//   promise.then(
//     (data) => console.log("success: ", data),
//     (error) => console.log("error: ", error)
//   );

//   event.preventDefault();
// });

//security
