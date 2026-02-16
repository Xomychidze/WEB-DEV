console.log("===== TRUTHY / FALSY =====");

const values = [
  false,
  true,
  0,
  -0,
  1,
  NaN,
  "",
  " ",
  "0",
  "false",
  null,
  undefined,
  [],
  {},
  [0],
  { a: 0 },
  function(){},
];

values.forEach(v => {
  console.log(v, "=>", Boolean(v));
});


console.log("\n===== IF CHECK =====");

values.forEach(v => {
  if (v) {
    console.log(v, "-> IF: true");
  } else {
    console.log(v, "-> IF: false");
  }
});


console.log("\n===== == vs === =====");

console.log("0 == false:", 0 == false);
console.log("0 === false:", 0 === false);

console.log('"" == 0:', "" == 0);
console.log('"" === 0:', "" === 0);

console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);

console.log('"5" == 5:', "5" == 5);
console.log('"5" === 5:', "5" === 5);


console.log("\n===== OBJECT COMPARISON =====");

console.log("{} === {}:", {} === {});
console.log("[] === []:", [] === []);

const obj1 = {};
const obj2 = obj1;
console.log("obj1 === obj2:", obj1 === obj2);


console.log("\n===== ARRAY CHECKS =====");

const arr = [];
console.log("Boolean([]):", Boolean(arr));
console.log("arr.length === 0:", arr.length === 0);


console.log("\n===== STRING CHECKS =====");

const str = "";
console.log("Boolean(''):", Boolean(str));
console.log("str.length === 0:", str.length === 0);


console.log("\n===== OBJECT EMPTY CHECK =====");

const emptyObj = {};
console.log("Boolean({}):", Boolean(emptyObj));
console.log("Object.keys(obj).length === 0:",
  Object.keys(emptyObj).length === 0
);


console.log("\n===== || (OR) BEHAVIOR =====");

console.log("0 || 5:", 0 || 5);
console.log('"" || "default":', "" || "default");
console.log("null || 10:", null || 10);
console.log("undefined || 20:", undefined || 20);


console.log("\n===== ?? (NULLISH) =====");

console.log("0 ?? 5:", 0 ?? 5);
console.log('"" ?? "default":', "" ?? "default");
console.log("null ?? 10:", null ?? 10);
console.log("undefined ?? 20:", undefined ?? 20);


console.log("\n===== && (AND) =====");

console.log("true && 'hello':", true && "hello");
console.log("false && 'hello':", false && "hello");
console.log("0 && 5:", 0 && 5);
console.log("1 && 5:", 1 && 5);


console.log("\n===== OPTIONAL CHAINING =====");

const user = {
  name: "Alex",
  address: {
    city: "Paris"
  }
};

console.log(user?.name);
console.log(user?.address?.city);
console.log(user?.contact?.phone); // undefined, без ошибки


console.log("\n===== TYPE COERCION =====");

console.log('"5" + 2:', "5" + 2); // строка
console.log('"5" - 2:', "5" - 2); // число
console.log('true + 1:', true + 1);
console.log('false + 1:', false + 1);
console.log('null + 1:', null + 1);
console.log('undefined + 1:', undefined + 1);


console.log("\n===== FLOATING POINT =====");

console.log("0.1 + 0.2:", 0.1 + 0.2);
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);


console.log("\n===== VAR vs LET in LOOP =====");

console.log("var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i =", i), 0);
}

console.log("let:");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j =", j), 0);
}


console.log("\n===== SWITCH FALLTHROUGH =====");

const x = 2;

switch (x) {
  case 1:
    console.log("one");
  case 2:
    console.log("two");
  case 3:
    console.log("three");
    break;
}


console.log("\n===== FOR...IN vs FOR...OF =====");

const arr2 = [10, 20, 30];

for (const index in arr2) {
  console.log("for...in:", index);
}

for (const value of arr2) {
  console.log("for...of:", value);
}


console.log("\n===== MUTATION IN LOOP =====");

let arr3 = [1,2,3,4];

for (let i = 0; i < arr3.length; i++) {
  arr3.pop();
  console.log(arr3);
}
