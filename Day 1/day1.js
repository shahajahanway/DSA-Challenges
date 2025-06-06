// Day 1 – Section 1: JavaScript Basics – Variables, Type Coercion, User Input


// 🔹 Q1. Sum of Two Integers

```js
let a = 10;
let b = 20;
console.log(a + b); // 30
```

// 💡 **Analogy:** Imagine tumhare paas ₹10 hain aur dost ke paas ₹20 — milke ₹30 ho gaya.
// 🧠 **Memory Trick:** Addition = "Collecting things together" like candies or cash.


// 🔹 Q2. Relation Between Integer and String

```js
let a = 10;
let b = "20";
console.log(a + b); // "1020"
```

// 💡 **Type Coercion:** JS automatically changes number to string because string is powerful.
// 🧠 **Analogy:** String ke room mein agar koi number ghus gaya — toh wo bhi string ban jaata hai 😅
// 🧠 **Trick:** “String is the boss” — number gets converted to string in `"number" + number`


// 🔹 Q3. Sum and Message + Greet the User (Type Coercion + Concatenation)

```js
let name = "Shahajahan";
let age = 21;
console.log("Hi " + name + ", you are " + age + " years old.");
```

// 💡 **Concept:** `+` with string = message banana
// 🧠 **Memory Trick:** `+` with strings acts like glue 🧴


//  🔹 Q4. Accept and Print the Answer (In Browser)

```js
let name = prompt("What's your name?");
console.log("Hello " + name);
```

// 🧠 Analogy: `prompt()` = Asking user → like chatting on WhatsApp 💬
// 🧠 Trick: Always string input, even if number typed

// > 👉 In Node.js, use `readline` for inputs (in browser, `prompt()` is fine)


// 🔹 Q5. Swap Two Variables (3 Ways)

//  🔁 1. Using a Temp Variable

```js
let a = 5, b = 10;
let temp = a;
a = b;
b = temp;
```

// 🧠 Analogy:** Tum dono apna lunch box swap kar rahe ho with help of third empty tiffin 🍱


//  🔁 2. Using Arithmetic

```js
let a = 5, b = 10;
a = a + b;
b = a - b;
a = a - b;
```

// 🧠 Trick:** You’re hiding and finding each other's value using math 🧮

//  🔁 3. Using Destructuring (ES6+)

```js
let a = 5, b = 10;
[a, b] = [b, a];
```

// 💡 **Magic Swap!** No temp, no math.
// 🧠 **Analogy:** JS magician swaps values in one line 🎩✨

