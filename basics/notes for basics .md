# JavaScript Basics — Placement Prep Notes

Use this as a quick, interview‑focused refresher. Skim the bullets, run the tiny examples in the console, and solve the practice sets.

## Introduction

- JavaScript is a high‑level, dynamic, garbage‑collected language standardized as ECMAScript.
- Runs in browsers (JS engine like V8, SpiderMonkey) and on servers (Node.js), and inside many tools.
- Single‑threaded event loop with async I/O; primitives are passed by value, objects by reference.
- Add 'use strict' to enable stricter parsing and safer semantics.

## Using the Console

- `console.log`, `console.error`, `console.warn`, `console.info`, `console.table(objOrArray)`
- Timers and assertions:

```js
console.time('t');
console.assert(1 + 1 === 3, 'Math broke');
// Output (example): Assertion failed: Math broke
console.timeEnd('t');
// Output (example): t: ~X ms
```

## What is a Variable?

- Named reference to a value stored in memory. JS uses dynamic typing (type attached to value, not variable).
- Declaration vs initialization:

```js
let x;          // declared, undefined
x = 10;         // initialized/assigned
```

## Data Types in JS

- Primitives: string, number, boolean, null, undefined, bigint, symbol
- Non‑primitive: object (arrays, functions, dates, regex, etc.)
- `typeof` results:
	- `typeof 'a'` -> 'string'
	- `typeof 42` -> 'number'
	- `typeof true` -> 'boolean'
	- `typeof undefined` -> 'undefined'
	- `typeof null` -> 'object'  // historical quirk
	- `typeof 10n` -> 'bigint'
	- `typeof Symbol('id')` -> 'symbol'
	- `typeof {}` / `[]` / `function(){}` -> 'object' / 'object' / 'function'

## Numbers in JS

- Single number type: IEEE‑754 double precision (64‑bit). Watch for precision: `0.1 + 0.2 !== 0.3`.
- Safe integers range: ±(2^53 − 1). Use `Number.isSafeInteger`, `Number.MAX_SAFE_INTEGER`.
- Useful APIs:

```js
Number.isNaN(NaN);         // true (better than global isNaN)
Number.isFinite(123);      // true
parseInt('101', 2);        // 5
parseFloat('3.14');        // 3.14
(1.005).toFixed(2);        // '1.01' (rounding)
Math.round/ceil/floor/trunc/random/max/min/abs
```

## Operations in JS

- Arithmetic: `+ - * / % **`
- String concatenation: `"a" + 1` -> 'a1'; template literals preferred: `` `a${1}` ``
- Comparison: `===` strict (no coercion), `==` loose (coerces). Use `===` in interviews.
- Logical: `&&` AND, `||` OR, `!` NOT; short‑circuiting returns last evaluated operand (not coerced boolean).
- Nullish coalescing: `??` returns right operand only when left is `null` or `undefined` (not for 0, '' or false).
- Optional chaining: `obj?.prop?.()` to safely access.

## NaN in JS

- `NaN` means Not‑a‑Number; it is a number type but represents invalid numeric result.
- `NaN !== NaN`; use `Number.isNaN(x)` or `Object.is(x, NaN)` to check.

## Operator Precedence (high → low)

1. `()` parentheses, member access `.`, optional chaining `?.`
2. Unary: `!`, `+` (coerce), `-`, `typeof`, `void`, `delete`, prefix `++`/`--`
3. Exponentiation `**`
4. Multiply/Divide/Modulo `* / %`
5. Add/Subtract `+ -`
6. Relational `< <= > >= in instanceof`
7. Equality `=== !== == !=`
8. Logical AND `&&`
9. Logical OR `||` ; Nullish `??` (no mixing with `||`/`&&` without parentheses)
10. Ternary `?:`
11. Assignment `= += -= *= /= %= **= &&= ||= ??=`

Tip: When in doubt, add parentheses.

## let, const & var

- `let`: block‑scoped, can reassign, no redeclare in same scope, TDZ (temporal dead zone) before declaration.
- `const`: block‑scoped, must initialize, no reassignment (object properties can still change).
- `var`: function‑scoped, hoisted with initialization to `undefined`, allows redeclare → avoid in modern code.

```js
{
	console.log(a); // undefined (var hoisted)
	// console.log(b); // ReferenceError (TDZ)
	var a = 1;
	let b = 2; const c = 3;
}
```

## Keywords (Reserved words)

- Examples: `break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, let, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield` (+ future reserved).
- Do not use as identifiers.

## Assignment Operators

- Basic: `=, +=, -=, *=, /=, %=, **=`
- Logical assignments: `&&=, ||=, ??=`

```js
let a = 0;
a ||= 42;    // a becomes 42 (because 0 is falsy)
let b = 0;
b ??= 7;     // b becomes 0??7 → 0 is not null/undefined, stays 0
```

## Unary Operators

- `+x` numeric coercion, `-x` negate, `!x` boolean negate
- `++x`/`x++` and `--x`/`x--` (prefix returns updated value; postfix returns previous value)
- `typeof x`, `delete obj.prop`, `void expr` (returns `undefined`)

```js
let x = 5;
console.log(x++); // 5, x becomes 6
console.log(++x); // 7
// Output:
// 5
// 7
```

## Identifier Rules

- Start with letter, `_`, or `$`; subsequent chars can include digits. Case‑sensitive.
- Cannot start with a digit; cannot be a reserved keyword.
- Convention: `camelCase` for variables/functions, `PascalCase` for classes, `SCREAMING_SNAKE_CASE` for constants.

## Boolean in JS

- Booleans: `true` / `false`; coercion via `Boolean(x)` or `!!x`.
- Falsy values: `false, 0, -0, 0n, '', null, undefined, NaN` (everything else is truthy, including '0', [], {})
- Prefer `===` for comparisons; use `??` for defaulting when 0/''/false are valid.

## What is TypeScript?

- TypeScript (TS) is a statically typed superset of JavaScript that compiles to JS.
- Benefits: type safety, better tooling (intellisense, refactors), easier large‑codebase maintenance.
- You write `.ts` files with types; the TS compiler emits `.js` files.

```ts
// Example TS (conceptual)
function add(a: number, b: number): number { return a + b; }
```

## String in JS

- Strings are immutable sequences of UTF‑16 code units. Use single, double, or backticks for template literals.

```js
const s = 'Hello';
s.length;                  // 5
s[1];                      // 'e'
s.toUpperCase();           // 'HELLO'
'  hi  '.trim();           // 'hi'
"apples".includes('pp');  // true
'hello world'.slice(0, 5); // 'hello'
`Hi ${s}!`                 // template literal
```

- Common methods: `length, indexOf, includes, startsWith, endsWith, slice, substring, toUpperCase, toLowerCase, trim, trimStart, trimEnd, replace, replaceAll, split, padStart, padEnd`.
- Escape sequences: `\n` newline, `\t` tab, `\"` quote, `\\` backslash.

## String Indices

- Zero‑based indexing via bracket or `charAt(i)`; out‑of‑range → `undefined` or empty string for `charAt`.
- Beware of surrogate pairs (e.g., emojis) where `length` and indexing may not match perceived characters.

## null & undefined in JS

- `undefined`: variable declared but not assigned; missing properties; default function params.
- `null`: intentional absence of value set by developer.
- Checks:

```js
value == null      // true for null or undefined (loose equality combo)
value === null     // only null
value === undefined
value ?? defaultV  // use default only if null/undefined (not for 0/''/false)
```

---

## Practice Qs — Set 1 (Basics & Types)

1) What will `typeof null` return and why is it a known quirk?
2) Declare a variable for age that can change; declare a constant for PI that cannot.
3) Convert the string `'42'` to a number in two different ways.
4) Given `let x;` what is its value? How is that different from `let x = null;`?
5) Use `console.table` to print an array of objects representing students `{ name, score }`.

## Practice Qs — Set 2 (Operators)

1) Predict outputs:
	 - `1 + '2'`
	 - `true + 1`
	 - `!""`
	 - `0 || 100`
	 - `0 ?? 100`
2) Why is `Number.isNaN('foo')` different from `isNaN('foo')`?
3) Write a safe defaulting expression where `count` may be `null/undefined`, default to 10, but keep 0.
4) Show prefix vs postfix difference using `i = 3` with `++i` and `i++` in `console.log`.
5) Place parentheses to make `2 + 3 * 4 ** 2` evaluate to 200.

## Practice Qs — Set 3 (Identifiers, Boolean, Keywords)

1) List all falsy values in JS and give a case where `||` is wrong but `??` is right.
2) Which of these are valid identifiers and why: `_value`, `$id`, `2name`, `for`, `camelCase`, `first-name`?
3) Write a one‑liner to coerce any value `x` to a strict boolean.
4) Explain hoisting differences between `var`, `let`, and `const` in one paragraph.
5) What does `delete obj.prop` return and when does it fail silently?

## Practice Qs — Set 4 (Strings, null/undefined)

1) Extract `'world'` from `'hello world'` using two different string methods.
2) Check if a string contains `'js'` ignoring case.
3) Trim whitespace from both ends and convert to lowercase in one expression.
4) Given `user = { profile: { name: 'Ada' } }`, safely read `user.profile.email` or default to `'N/A'`.
5) Write a function that returns the first non‑nullish value among its arguments.

---

## Quick Gotchas to Remember

- `typeof null === 'object'` (legacy bug); `Array.isArray([]) === true`.
- `NaN` is not equal to itself; use `Number.isNaN`.
- Avoid `==` unless you know the coercion table; prefer `===`.
- `for..in` iterates keys (including inherited); `for..of` iterates values (iterables).
- Objects/arrays are reference types: copying with `=` shares reference. Use spread or structured clone for copies.

## Micro‑Drills (Try in Console)

```js
// 1) Number precision
0.1 + 0.2 === 0.3;                // false
Number((0.1 + 0.2).toFixed(2)) === 0.3; // true

// 2) Logical assignment
let title = '';
title ||= 'Untitled';  // '' is falsy → sets
let qty = 0;
qty ??= 10;            // 0 is not nullish → keeps 0
// title => 'Untitled'
// qty => 0

// 3) Optional chaining + nullish
const user = {};
const email = user.profile?.email ?? 'N/A';
// email => 'N/A'

// 4) String methods
'  JS  '.trim().padStart(5, '*').toLowerCase();
// => '**js'

// 5) Unary coercion
+'5' === 5; // true
```
============================================================================================================꧁MR᭄Soumen༻============================================================================================================

---

## Logic and Conditionals (Focused Pack)

- Logic combines boolean expressions to control program flow. Key building blocks: `if / else if / else`, `switch`, logical operators `&& || !` and the nullish/defaulting pair `??`.
- Short‑circuiting: `A && B` only evaluates B if A is truthy; `A || B` only evaluates B if A is falsy. The operator returns the last evaluated operand (not coerced to boolean).
- De Morgan’s laws: `!(A && B) === (!A || !B)` and `!(A || B) === (!A && !B)`.

### console.log()

- Use `console.log(value)` for outputs; `console.warn`, `console.error` for levels, `console.table` for tabular data.
- Multiple args get space‑separated: `console.log('sum:', a + b)`.

### Linking JS File

```html
<!-- Recommended: load early but execute after parse -->
<head>
	<script src="app.js" defer></script>
</head>

<!-- Alternatively: at the end of body without defer -->
<body>
	<!-- page content -->
	<script src="app.js"></script>
</body>
```

- `defer` downloads in parallel and runs after HTML is parsed; safe to query DOM in script.
- Without `defer`, put the `<script>` just before `</body>` to ensure DOM is available.

### Template Literals

- Backticks for interpolation and multiline strings.

```js
const name = 'Ada', score = 97;
console.log(`Hello, ${name}!\nYour score is ${score}.`);
// Output:
// Hello, Ada!
// Your score is 97.
```

### Operators in JS (Quick Map)

- Arithmetic: `+ - * / % **`
- Assignment: `= += -= *= /= %= **= &&= ||= ??=`
- Comparison: `=== !== == != < <= > >=`
- Logical: `&& || !` (plus `??` nullish)
- Ternary: `cond ? a : b`
- Unary: `+ - ! typeof delete void ++ --`

### Comparison Operators

- Prefer strict equality: `===` / `!==` (no coercion). Avoid `==` unless you know the coercion rules.
- Relational operators: `< <= > >=` coerce to primitives, then compare.
- Objects compare by reference: `{ } === { }` is false; the same reference is true.
- `Object.is` handles `NaN` and `+0/-0` better than `===`.

```js
NaN === NaN;          // false
Object.is(NaN, NaN);  // true
Object.is(+0, -0);    // false, while (+0 === -0) is true
```

### Comparison for Non‑numbers

- Strings: lexicographic by UTF‑16 code units.

```js
'2' > '10';      // true ("2" vs "1" in first position)
'apple' < 'bat'; // true ("a" < "b")
```

- Booleans in relational contexts coerce to numbers: `true → 1`, `false → 0`.
	- Example: `true > false` → `1 > 0` → true.
- Loose equality pitfalls (avoid in prod):

```js
[] == 0;       // true (coercion)
['2'] == 2;    // true
null == undefined; // true
```

### Conditional Statements

```js
if (cond1) {
	// ...
} else if (cond2) {
	// ...
} else {
	// ...
}
```

### if Statement

```js
const age = 19;
if (age >= 18) {
	console.log('Eligible');
}
// Output: Eligible
```

### else if Statement

```js
const marks = 73;
if (marks >= 90) console.log('A');
else if (marks >= 75) console.log('B');
else if (marks >= 60) console.log('C');
else console.log('D');
// Output: C
```

### else Statement

```js
if (isMember) applyDiscount();
else chargeFullPrice();
```

### Nested if‑else

```js
if (role === 'admin') {
	if (active) console.log('Welcome admin');
	else console.log('Admin inactive');
} else if (role === 'user') {
	console.log(active ? 'Welcome user' : 'User inactive');
} else {
	console.log('Guest');
}
```

### Logical Operators

- `&&` returns first falsy or last truthy; `||` returns first truthy or last falsy; `!x` negates truthiness.
- `??` returns right side only when left is `null` or `undefined` (not for 0, '' or false).

```js
const username = input || 'Anonymous'; // 0/'' become fallback
const count = input ?? 0;              // 0 preserved; null/undefined → 0
```

### truthy & falsy

- Falsy: `false, 0, -0, 0n, '', null, undefined, NaN`; everything else is truthy.
- Use `Boolean(x)` or `!!x` to coerce.

### Switch Statement

```js
const day = 3;
switch (day) {
	case 1: console.log('Mon'); break;
	case 2: console.log('Tue'); break;
	case 3: console.log('Wed'); break;
	default: console.log('Unknown');
}
// Output: Wed
```

- Uses strict comparison (like `===`) with the switch expression.
- Remember `break` to avoid fall‑through (unless you want it intentionally).
- Pattern: `switch(true)` to branch on range conditions.

### Alerts & Prompts (Browser only)

```js
alert('Hi');                         // info box
const name = prompt('Your name?');   // returns string or null
const ok = confirm('Proceed?');      // returns true/false
```

- Parsing: `const n = Number(prompt('Enter number:'))` (handle NaN).
- These block the UI; not available in Node.js.

---

## Practice Qs — Conditionals & Logic

1) Write an expression that returns the longer of two strings `a` and `b` without using `if` (hint: ternary).
2) Given `let x = 0;` set `x` to 100 only if it is nullish, but keep 0 as a valid value.
3) Predict: `('2' > 1) && (2 == '2') && (2 === '2')`.
4) Convert: If `score >= 90 → 'A'`, `>= 80 → 'B'`, `>= 70 → 'C'`, else `'D'` using `if/else if` and also as `switch(true)`.
5) What prints and why: `console.log(false || 'hello' && 0 || 42)`?

## Practice Qs — Switch & Comparisons

1) Use `switch` to implement a simple calculator for `op` in `'+', '-', '*', '/'` for `a` and `b`.
2) Use `switch(true)` to categorize age: `<13 Child`, `<20 Teen`, `<60 Adult`, else `Senior`.
3) Compare `'10' < '2'` and `10 < 2`; explain the difference in results.
4) Show three different ways to default `title` to `'Untitled'` and explain which preserves empty string.
5) Why can `[] == ![]` be true? Explain the steps of coercion.

## Practice Qs — Alerts & Prompts

1) Ask the user for two numbers using `prompt`, add them, and `alert` the sum (handle cancel/NaN).
2) Ask for a password; if empty string show `"Empty"`, if `null` show `"Cancelled"`, if `'admin'` show `"Welcome"`, else `"Denied"`.
3) Use `confirm` to conditionally proceed; log `"Continuing"` or `"Aborted"`.

---

## Assignment Questions

1) Grade Calculator
	 - Input: `marks` (0–100). Output: `A (90+)`, `B (80–89)`, `C (70–79)`, `D (60–69)`, `F (<60)` with validation for out‑of‑range.
	 - Implement using both `if/else if` and `switch(true)`.

2) Sign‑in Flow
	 - Prompt for username and password. If either is `null`, show `Cancelled`.
	 - If username is `'admin'` and password `'secret'`, show `Welcome admin`; else `Invalid credentials`.

3) Number Classifier
	 - Read a number N. Print: `Positive/Negative/Zero` and `Even/Odd`. For non‑integers, print `Not an integer`.

4) Mini Calculator (Switch)
	 - Inputs: `a`, `op`, `b`. Compute result with `+ - * / % **` (guard divide by zero). Handle invalid `op`.

5) FizzBuzz Variant
	 - For `n = 1..100`: Print `Fizz` for multiples of 3, `Buzz` for 5, `FizzBuzz` for both, else the number. Do not use nested `if`.

6) Triangle Type
	 - Inputs: three sides `a, b, c`. Validate triangle inequality. Output: `Equilateral/Isosceles/Scalene`.

7) Score to Message (Ternary Chain)
	 - Using nested ternaries, map score to messages: `>=90 'Excellent'`, `>=75 'Good'`, `>=60 'Average'`, else `'Improve'`. Then rewrite with `if/else`.

=============================================================================================================꧁MR᭄Soumen༻===========================================================================================================


---

## Advanced Arrays and ES6 Features — Interview Pack

### Array Methods (quick guide)

- Iteration: `forEach` (side effects, returns undefined)
- Transformation: `map` (same length array), `flatMap` (map + flatten one level)
- Selection: `filter` (subset), `find` (first value), `findIndex`
- Testing: `some` (any), `every` (all)
- Reduction: `reduce`, `reduceRight`
- Searching: `indexOf`, `lastIndexOf`, `includes`
- Utilities: `sort`, `reverse`, `slice`, `splice`, `concat`, `flat`, `fill`, `copyWithin`

### Map & Filter

```js
const nums = [1, 2, 3, 4, 5];
const squares = nums.map(n => n*n);             // [1,4,9,16,25]
const evens = nums.filter(n => n % 2 === 0);    // [2,4]

// flatMap example: split words into chars and flatten one level
['ab', 'cd'].flatMap(w => w.split('')); // ['a','b','c','d']
```

Pitfall: `forEach` ignores `return`; use `map` for transforms.

### Every & Some (and Sum)

```js
const arr = [2, 4, 6];
arr.every(n => n % 2 === 0); // true (all even)
arr.some(n => n > 5);        // true (at least one > 5)

// Sum with reduce
const sum = arr.reduce((acc, x) => acc + x, 0); // 12
```

### Reduce Method

```js
// frequency map
const s = 'bananas';
const freq = [...s].reduce((m, ch) => (m[ch] = (m[ch]||0)+1, m), {});
// freq => { b: 1, a: 3, n: 2, s: 1 }

// group by length
const words = ['hi','sun','to','cat'];
const groups = words.reduce((g,w)=>{ (g[w.length] ||= []).push(w); return g; }, {});
// groups => { '2': ['hi','to'], '3': ['sun','cat'] }

// unique (order-preserving)
const unique = [1,2,2,3].reduce((a,x)=> a.includes(x)?a:(a.push(x),a), []);
// unique => [1, 2, 3]
```

Gotchas:
- Always provide an initial value when reducing potentially empty arrays.
- `reduce` can emulate many ops but prefer clearer methods when possible.

### Maximum in Array

```js
Math.max(2, 9, 4);                   // 9
Math.max(...[2, 9, 4]);              // 9 (spread)

// With reduce (handles empty via -Infinity)
const max = [2, 9, 4].reduce((m,x)=> x>m?x:m, -Infinity);
// max => 9
```

---

## Practice Qs — Advanced Arrays

1) Double numbers > 5 and keep only odd results from `[1..10]`.
2) From `['Ada','Alan','Grace']` get lengths and the longest name.
3) Implement `compact(arr)` that removes all falsy values.
4) Count vowels in a string using array methods only.
5) From `[1,2,3,4,5]` compute prefix sums `[1,3,6,10,15]`.
6) Write `intersection(a,b)` and `difference(a,b)` for arrays of numbers.
7) Stable sort students by `score desc`, then `name asc`.
8) From `[{id, tags:[...]}, ...]` build a unique sorted list of all tags.
9) Write `zip([1,2],["a","b"])` → `[[1,'a'],[2,'b']]`.
10) Partition array into `[pass, fail]` by predicate.

---

## Default Parameters

```js
function greet(name = 'Guest') { return `Hi, ${name}!`; }
greet();            // 'Hi, Guest!'
greet(undefined);   // uses default
greet(null);        // 'Hi, null!' (default NOT used)

// Default depending on previous arg
function power(x, e = 2) { return x ** e; }

// Lazy default (computed per call)
function id(v = crypto?.randomUUID?.() || Date.now().toString(36)) { return v; }
```

Rules:
- Default triggers only when the argument is `undefined`.
- Parameter defaults are evaluated at call time.

## Spread

- “Spread” expands iterables/objects.
- Arrays: clone/merge; Objects: shallow copy/merge.

### Spread (Array Literals)

```js
const a = [1,2], b = [3,4];
const merged = [...a, 0, ...b];     // [1,2,0,3,4]
const copy = [...a];                 // shallow clone

// String to array of chars
const chars = [...'hello'];          // ['h','e','l','l','o']
```

### Spread (Object Literals)

```js
const base = { name: 'Ada', skills: ['js'] };
const extra = { active: true };
const user = { ...base, ...extra, name: 'Grace' }; // later properties overwrite earlier

// Shallow! nested arrays/objects are shared
const clone = { ...base }; clone.skills.push('ts');
// base.skills now also includes 'ts'
```

## Rest

- “Rest” gathers remaining items.

```js
function sumAll(...nums) { return nums.reduce((s,x)=>s+x,0); }
const [head, ...tail] = [10,20,30]; // head=10, tail=[20,30]

function logKV(obj, ...keys) { console.log(keys.map(k=>[k,obj[k]])); }
```

## Destructuring (Arrays)

```js
const arr2 = [10, 20, 30, 40];
const [first, second, , fourth] = arr2;  // skip with comma
const [a1, a2 = 0] = [5];                // default for missing
const [x, ...rest] = arr2;               // rest collects remaining

// Swap
let m = 1, n = 2; [m, n] = [n, m];
```

## Destructuring (Objects)

```js
const person = { name: 'Ada', city: 'London', age: 36 };
const { name, age } = person;              // direct
const { city: location = 'N/A' } = person; // rename with default

// Nested
const user2 = { profile: { email: 'a@b.com' } };
const { profile: { email } = {} } = user2; // safe default {}

// With function params
function connect({ host = 'localhost', port = 5432 } = {}) {
	return `${host}:${port}`;
}
```

Tips:
- Missing nested objects must be defaulted: `{ a: { b } = {} }`.
- Destructuring is pattern matching; extra properties are ignored.

---

## Assignment Qs — Advanced Arrays & ES6

1) Re‑implement `map(arr, fn)` using `reduce`.
2) Re‑implement `filter(arr, fn)` using `reduce`.
3) `flatten1(arr)` to flatten one level of nesting using `reduce` and `concat`.
4) `unique(arr)` preserving order, without `Set` in first solution.
5) `topKFrequent(nums, k)` return elements sorted by frequency desc, then value asc.
6) `partition(arr, pred)` → `[pass, fail]` using a single `reduce`.
7) `compose(...fns)` return a function that composes right‑to‑left.
8) `deepMerge(a, b)` shallowly merges and recursively merges plain objects.
9) `zip(a, b)` and `unzip(pairs)` utilities.
10) `pluck(arr, key)` extract `key` values; `indexBy(arr, key)` build object keyed by `key`.

---

## Assignment Solutions — Advanced Arrays & ES6

```js
// 1) map via reduce
function mapR(arr, fn) {
	return arr.reduce((out, x, i) => (out.push(fn(x, i, arr)), out), []);
}

// 2) filter via reduce
function filterR(arr, fn) {
	return arr.reduce((out, x, i) => (fn(x, i, arr) ? out.push(x) : 0, out), []);
}

// 3) flatten one level
function flatten1(arr) {
	return arr.reduce((out, x) => out.concat(x), []);
}

// 4) unique (no Set)
function unique(arr) {
	return arr.reduce((out, x) => (out.includes(x) ? out : (out.push(x), out)), []);
}
// Alternative with Set (fast)
const uniqueSet = arr => [...new Set(arr)];

// 5) top K frequent
function topKFrequent(nums, k) {
	const freq = nums.reduce((m,x)=> (m[x]=(m[x]||0)+1, m), {});
	return Object.entries(freq)
		.sort((a,b)=> b[1]-a[1] || (+a[0])-(+b[0]))
		.slice(0,k)
		.map(([v])=> Number(v));
}

// 6) partition via reduce
function partition(arr, pred) {
	return arr.reduce((acc, x) => (pred(x) ? acc[0].push(x) : acc[1].push(x), acc), [[], []]);
}

// 7) compose
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// 8) deepMerge for plain objects
function isPlain(o){ return o && typeof o==='object' && Object.getPrototypeOf(o)===Object.prototype; }
function deepMerge(a, b) {
	const out = { ...a };
	for (const [k, v] of Object.entries(b)) {
		if (isPlain(v) && isPlain(out[k])) out[k] = deepMerge(out[k], v);
		else out[k] = Array.isArray(v) ? v.slice() : v;
	}
	return out;
}

// 9) zip / unzip
const zip = (a, b) => a.map((x,i)=> [x, b[i]]);
const unzip = pairs => pairs.reduce((acc,[x,y])=> (acc[0].push(x), acc[1].push(y), acc), [[],[]]);

// 10) pluck / indexBy
const pluck = (arr, key) => arr.map(o => o[key]);
const indexBy = (arr, key) => arr.reduce((m,o)=> (m[o[key]] = o, m), {});
```

=============================================================================================================꧁MR᭄Soumen༻===========================================================================================================

---

## JavaScript (Part 5): Objects — Interview Pack

### Object Literals

- Objects store key–value pairs. Keys are strings or symbols; values can be any type.
- Literal syntax:

```js
const user = {
	name: 'Ada',
	age: 30,
	isAdmin: true,
	'fav color': 'blue',           // spaces require quotes
	greet() { return `Hi, ${this.name}`; }, // method shorthand
};
```

- Shorthand and computed properties:

```js
const name = 'Bob', score = 97, field = 'level';
const player = { name, score, [field]: 'pro' }; // { name:'Bob', score:97, level:'pro' }
```

Note: Avoid arrow functions for methods that use `this`.

### Creating Object Literals

```js
const empty = {}; // empty object
const point = { x: 10, y: 20 };
const settings = Object.create(null); // no prototype
```

### Creating a Post

```js
function createPost({ title, body, author }) {
	return {
		id: crypto?.randomUUID?.() || Math.random().toString(36).slice(2),
		title,
		body,
		author,
		likes: 0,
		tags: [],
		comments: [],
		like() { this.likes++; },
		addTag(t) { if (t && !this.tags.includes(t)) this.tags.push(t); },
		addComment(user, text) { this.comments.push({ user, text, at: new Date().toISOString() }); },
	};
}
const post = createPost({ title: 'JS Tips', body: 'Use ===', author: 'Soumen' });
post.like(); post.addTag('js');
```

### Get Values

- Dot vs bracket:

```js
user.name;            // dot (static, identifier-safe)
user['fav color'];    // bracket (dynamic or special chars)
const key = 'age';
user[key];            // dynamic access
```

- Property existence:

```js
'age' in user;                 // checks own + prototype
Object.hasOwn(user, 'age');    // own only (ES2022)
user.hasOwnProperty('age');    // legacy own check
```

### Conversion in Get Values

- Property names are strings (or symbols). In bracket access, the key expression is coerced to string.

```js
const obj = { '1': 'one', 1: 'uno' }; // both define the same key '1'
obj[1];        // 'uno' (1 → '1')
obj['1'];      // 'uno'
```

- Accessing a missing key returns `undefined`; combine with defaulting:

```js
const qty = Number(user.qty ?? 0);        // convert to number with a nullish default
```

### Add / Update Values

```js
const car = { make: 'Tata' };
car.model = 'Nexon';               // add
car['year'] = 2024;                // add via bracket
car.make = 'Tata Motors';          // update
delete car.year;                   // delete
```

- Immutable update (shallow):

```js
const updated = { ...car, model: 'Curvv' };
```

### Nested Objects

```js
const user2 = { profile: { name: 'Ada', addr: { city: 'Kolkata', pin: '700001' } } };
const city = user2.profile?.addr?.city ?? 'N/A';
```

### Array of Objects

```js
const products = [
	{ id: 1, name: 'Pen', price: 10 },
	{ id: 2, name: 'Book', price: 120 },
	{ id: 3, name: 'Bag', price: 900 },
];
const costly = products.filter(p => p.price > 100);
const byId = new Map(products.map(p => [p.id, p]));
```

### Math Object

- Common: `Math.round, ceil, floor, trunc, abs, min, max, pow, sqrt, random, sign`

```js
Math.max(3, 10, 7);          // 10
Math.round(1.5);             // 2
Math.trunc(-3.9);            // -3
```

### Random Integers

```js
function randInt(min, max) { // inclusive
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
randInt(1, 6); // dice

function choice(arr) { return arr[randInt(0, arr.length - 1)]; }
```

---

## Practice Qs — Objects

1) Make an object `student` with keys: name, branch, year, and a method `intro()` returning a string.
2) Given `const key = 'device-type'`, add it with value `'mobile'` to an object using bracket notation.
3) From `{ price: '199', qty: '2' }` compute numeric `total` safely.
4) Access `user.contacts.primary.email` safely with a default `'N/A'`.
5) Sort an array of products by price ascending, then by name ascending.
6) Count occurrences of letters in `'banana'` into an object.
7) Turn `[{id:1,v:'a'},{id:2,v:'b'}]` into `{1:'a',2:'b'}`.
8) Deep merge defaults `{theme:'light', notify:true}` with overrides (object) without losing missing keys.
9) Filter posts that contain a given tag from an array of post objects.
10) What does `'toString' in obj` check vs `Object.hasOwn`?

---

## Guessing Game (Browser)

Goal: Guess a number between 1 and 100. Hints: `Higher/Lower`. Tracks attempts.

```js
(function guessingGame() {
	const secret = Math.floor(Math.random() * 100) + 1;
	let tries = 0;
	while (true) {
		const input = prompt('Guess (1-100). Cancel to quit:');
		if (input === null) { alert('Game cancelled'); break; }
		const n = Number(input);
		if (!Number.isInteger(n) || n < 1 || n > 100) { alert('Enter an integer 1-100'); continue; }
		tries++;
		if (n === secret) { alert(`Correct! ${n} in ${tries} tries.`); break; }
		alert(n < secret ? 'Higher' : 'Lower');
	}
})();
```

---

## Assignment Questions — Objects

1) Post Factory
	 - Write `createPost(data)` that returns a post with methods `like`, `addTag`, `addComment` as above.

2) Deep Get/Set
	 - Implement `deepGet(obj, path)` and `deepSet(obj, path, value)` where `path` is like `'a.b[0].c'`.

3) Group By
	 - Implement `groupBy(arr, key)` that groups array of objects by a property name or callback.

4) Inventory Totals
	 - Given items `{ name, price, qty }`, compute total qty and total value. Output `{ totalQty, totalValue }`.

5) Merge Defaults
	 - `mergeDefaults(user, defaults)` returns a new object where missing keys from user are filled from defaults (shallow).

6) Frequency Map
	 - Given an array of strings, return an object mapping string → count.

7) Pluck and Omit
	 - Implement `pick(obj, keys[])` and `omit(obj, keys[])`.

8) Sort Stable
	 - Sort array of users by `age asc` then `name asc` stably.

9) Random Password
	 - Generate a random password length `n` using chars `[A-Za-z0-9]` with at least one uppercase, one lowercase, one digit.

10) Unique by Key
		- From an array of objects with `id`, remove duplicates keeping first occurrence.

---

## Assignment Solutions — Objects

```js
// 2) Deep Get/Set
function toPath(p) {
	if (Array.isArray(p)) return p;
	const parts = []; let buf = '';
	for (let i = 0; i < p.length; i++) {
		const ch = p[i];
		if (ch === '.' ) { if (buf) { parts.push(buf); buf=''; } }
		else if (ch === '[') { if (buf) { parts.push(buf); buf=''; } let j = p.indexOf(']', i); parts.push(p.slice(i+1, j)); i = j; }
		else buf += ch;
	}
	if (buf) parts.push(buf);
	return parts.filter(s => s.length);
}

function deepGet(obj, path) {
	const parts = toPath(path);
	let cur = obj;
	for (const key of parts) {
		if (cur == null) return undefined;
		cur = cur[key];
	}
	return cur;
}

function deepSet(obj, path, value) {
	const parts = toPath(path);
	let cur = obj;
	for (let i = 0; i < parts.length - 1; i++) {
		const k = parts[i];
		if (cur[k] == null || (typeof cur[k] !== 'object')) {
			// create array if next is numeric, else object
			const next = parts[i+1];
			cur[k] = String(+next) === next ? [] : {};
		}
		cur = cur[k];
	}
	cur[parts.at(-1)] = value;
	return obj;
}

// 3) Group By (key string or iteratee function)
function groupBy(arr, key) {
	const fn = typeof key === 'function' ? key : (x) => x[key];
	const map = Object.create(null);
	for (const item of arr) {
		const k = fn(item);
		(map[k] ||= []).push(item);
	}
	return map;
}

// 4) Inventory Totals
function inventoryTotals(items) {
	return items.reduce((acc, it) => {
		const price = Number(it.price) || 0;
		const qty = Number(it.qty) || 0;
		acc.totalQty += qty;
		acc.totalValue += price * qty;
		return acc;
	}, { totalQty: 0, totalValue: 0 });
}

// 5) Merge Defaults (shallow)
function mergeDefaults(user, defaults) {
	return { ...defaults, ...user };
}

// 6) Frequency Map
function freqMap(arr) {
	const out = Object.create(null);
	for (const s of arr) out[s] = (out[s] || 0) + 1;
	return out;
}

// 7) pick / omit
function pick(obj, keys) { const o = {}; for (const k of keys) if (k in obj) o[k] = obj[k]; return o; }
function omit(obj, keys) { const o = {}; const set = new Set(keys); for (const k in obj) if (!set.has(k)) o[k] = obj[k]; return o; }

// 8) Stable sort by age, then name
function sortUsers(users) {
	return users.slice().sort((a,b)=> a.age-b.age || a.name.localeCompare(b.name));
}

// 9) Random Password (A-Za-z0-9)
function randomPassword(n) {
	const U = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', L = U.toLowerCase(), D = '0123456789';
	function r(s){ return s[Math.floor(Math.random()*s.length)]; }
	const all = U + L + D;
	let out = r(U) + r(L) + r(D);
	for (let i = 3; i < n; i++) out += r(all);
	return out.split('').sort(()=>Math.random()-0.5).join('');
}

// 10) Unique by key 'id'
function uniqueById(arr) {
	const seen = new Set();
	const res = [];
	for (const x of arr) { if (!seen.has(x.id)) { seen.add(x.id); res.push(x); } }
	return res;
}
```

=============================================================================================================꧁MR᭄Soumen༻===========================================================================================================

---

## Strings and Arrays — Interview Pack

### Strings Overview

- Strings are immutable sequences of UTF‑16 code units. Any "change" returns a new string.
- Indexing is zero‑based: `s[i]`, read‑only.

#### String Methods (most used)

- Inspection: `length`, `indexOf(substr)`, `lastIndexOf`, `includes(substr)`, `startsWith`, `endsWith`
- Extract: `slice(start, end?)`, `substring(start, end?)`, `substr(start, len?)` (legacy)
- Case/whitespace: `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`
- Replace/split/join: `replace(find, repl)`, `replaceAll(find, repl)`, `split(sep)`, array `join(sep)`
- Padding/repeat: `padStart(len, fill)`, `padEnd(len, fill)`, `repeat(n)`

```js
const s = '  JavaScript  ';
s.trim().toLowerCase();               // 'javascript'
'hello world'.includes('world');      // true
'hello'.padStart(7, '*');             // '**hello'
'abab'.replace('a', 'X');             // 'Xbab' (first only)
'abab'.replaceAll('a', 'X');          // 'XbXb'
```

#### Trim Method

- Removes leading/trailing whitespace only; inner spaces remain. `trimStart` and `trimEnd` are side‑specific.

#### Strings are Immutable in JS

- `s[0] = 'H'` does nothing; methods return new strings. Reassign if you need the result: `s = s.toUpperCase()`.

#### ToUpperCase and ToLowerCase

```js
const city = 'KoLKaTa';
city.toLowerCase(); // 'kolkata'
city.toUpperCase(); // 'KOLKATA'
```

#### Methods with Arguments — indexOf

```js
const t = 'bananas';
t.indexOf('na');       // 2 (first occurrence)
t.indexOf('na', 3);    // 4 (start search at 3)
t.lastIndexOf('na');   // 4
t.includes('ba');      // true
```

#### Method Chaining

```js
const cleaned = '  JS Basics  '.trim().toUpperCase().replaceAll(' ', '_');
// 'JS_BASICS'
```

#### Slice Method (Strings)

- `slice(start, end?)` supports negatives (from end). `substring` swaps args and treats negatives as 0.

```js
const s2 = 'hello world';
s2.slice(0, 5);   // 'hello'
s2.slice(-5);     // 'world'
```

#### Replace & Repeat Method

```js
'foo bar foo'.replace('foo', 'baz');     // 'baz bar foo'
'foo foo'.replaceAll('foo', 'bar');      // 'bar bar'
'ha'.repeat(3);                          // 'hahaha'
```

#### Practice Qs — Strings

1) Normalize: Turn `'  HeLLo JS  '` into `'hello js'`.
2) Count occurrences of `'na'` in `'bananana'` without regex.
3) Extract domain from email `'user@example.com'` → `'example.com'`.
4) Mask all but last 4 digits of `'1234567890'` → `'******7890'`.
5) Title‑case `'welcome to javascript'` → `'Welcome To Javascript'`.

---

### Arrays Overview

- Ordered lists; indexed from 0; can hold mixed types. Arrays are objects and mutable.

#### Visualizing Arrays

Index: 0  1  2  3
Value: 3, 5, 8, 13

#### Creating Arrays

```js
const a = [1, 2, 3];
const b = new Array(3);      // length 3 with empty slots (sparse)
const c = Array.of(3);       // [3]
const d = Array.from('abc'); // ['a','b','c']
```

#### Arrays are Mutable

```js
const arr = [1, 2];
arr[0] = 9;      // [9, 2]
arr.push(3);     // [9, 2, 3]
```

#### Array Methods (Core)

- Add/remove ends: `push`, `pop`, `shift`, `unshift`
- Iterate/transform: `forEach`, `map`, `filter`, `reduce`, `reduceRight`
- Search: `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `some`, `every`
- Copy/flatten: `slice`, `concat`, `flat`, `flatMap`
- Mutate in place: `splice`, `sort`, `reverse`, `fill`, `copyWithin`

```js
[1,2,3].map(x => x*2);                 // [2,4,6]
[1,2,3,4].filter(x => x%2===0);        // [2,4]
[1,2,3].reduce((s,x)=>s+x,0);          // 6
[{id:1},{id:2}].find(o=>o.id===2);     // {id:2}
```

#### Practice Qs — Arrays (Basics)

1) Add `0` at start and `4` at end of `[1,2,3]`.
2) From `['a','b','c','d']`, remove `'b'` using an index method.
3) Double only even numbers in `[1,2,3,4,5]`.
4) Sum the array `[5,5,10]` with `reduce`.
5) Get the first element greater than 7 from `[3,8,2,9]`.

#### indexOf & includes Method

```js
const xs = [10, 20, 30, 20];
xs.indexOf(20);        // 1
xs.lastIndexOf(20);    // 3
xs.includes(15);       // false
```

#### Concatenation & Reverse

```js
const a1 = [1,2], a2 = [3,4];
const merged = a1.concat(a2); // [1,2,3,4]
const merged2 = [...a1, ...a2];
merged2.reverse();            // mutates merged2
// merged2 => [4,3,2,1]
```

#### Slice in Arrays (Non‑mutating)

```js
const ar = [0,1,2,3,4];
ar.slice(1,4);   // [1,2,3]; ar unchanged
ar.slice(-2);    // [3,4]
```

#### Splice in Arrays (Mutating)

```js
const ar2 = [1,2,3,4];
ar2.splice(1, 2, 'a', 'b'); // remove 2 items at index 1, insert 'a','b' → [1,'a','b',4]
```

#### Sort in Arrays

- Default is lexicographic string comparison; for numbers provide a comparator.

```js
[10, 2, 5].sort();             // [10,2,5] (as strings!)
[10, 2, 5].sort((a,b)=>a-b);   // [2,5,10]

// Sort objects by field
users.sort((a,b)=>a.age-b.age);
```

#### Practice Qs — Arrays (Intermediate)

1) Remove duplicates from `[1,2,2,3,1,4]` (at least two different ways).
2) Return the top‑3 largest numbers from an array (handle length < 3).
3) Group words by length: `['hi','to','sun','cat']` → `{2:['hi','to'],3:['sun','cat']}`.
4) Flatten `[1,[2,[3]]]` into `[1,2,3]` (one method without recursion).
5) Reverse an array without using `reverse()` (do it in‑place).

#### Arrays References

- Assignment copies references, not elements. Shallow copy with `slice()`, spread `[...]`, or `Array.from(arr)`.
- Deep copy nested structures with `structuredClone(obj)` (browser/Node 17+), or JSON methods when safe.

```js
const a = [1, {x:1}];
const b = a;           // same reference
const c = a.slice();   // shallow copy
c[1].x = 42;           // changes a[1].x too
```

#### Constant Arrays

- `const arr = []` prevents reassigning the binding, but you can mutate elements: `arr.push(1)` is allowed.

#### Nested Arrays

```js
const matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
matrix[1][2];  // 6
```

#### Practice Qs — Arrays (Advanced)

1) Transpose a matrix (rows ↔ columns).
2) Chunk an array into subarrays of size k.
3) Compute frequency map of elements in an array.
4) Intersection and difference of two arrays.
5) Stable sort objects by `score desc`, then `name asc`.

---

## Assignment Questions (Strings & Arrays)

1) Palindrome Check (String)
	 - Input: string s. Ignore case and non‑alphanumerics. Return true if palindrome.

2) Anagram Groups (Strings)
	 - Input: array of words. Group anagrams together.

3) Most Frequent Char (String)
	 - Input: s. Output the character with the highest frequency (ties: any one).

4) Unique Sorted Numbers (Arrays)
	 - Input: array of numbers. Return unique numbers sorted ascending (no library sets in first solution).

5) K Largest Elements (Arrays)
	 - Input: array nums, integer k. Return k largest numbers in descending order.

6) Spiral Order (Nested Arrays)
	 - Input: 2D matrix. Return elements in spiral order (clockwise).

7) Two Sum (Arrays)
	 - Input: nums, target. Return indices of two numbers that sum to target, or `[-1,-1]` if none.

8) Remove In‑Place (Arrays)
	 - Remove all occurrences of value `val` from array in‑place and return new length.

---

## Assignment Solutions

```js
// 1) Palindrome Check
function isPalindrome(s) {
	const t = (s.match(/[a-z0-9]/gi) || []).join('').toLowerCase();
	let i = 0, j = t.length - 1;
	while (i < j) {
		if (t[i++] !== t[j--]) return false;
	}
	return true;
}

// 2) Anagram Groups
function groupAnagrams(words) {
	const map = new Map();
	for (const w of words) {
		const key = w.toLowerCase().split('').sort().join('');
		(map.get(key) || map.set(key, []).get(key)).push(w);
	}
	return Array.from(map.values());
}

// 3) Most Frequent Char
function mostFrequentChar(s) {
	const freq = {};
	let bestC = '', best = 0;
	for (const ch of s) {
		freq[ch] = (freq[ch] || 0) + 1;
		if (freq[ch] > best) { best = freq[ch]; bestC = ch; }
	}
	return bestC;
}

// 4) Unique Sorted Numbers
function uniqSorted(nums) {
	const seen = Object.create(null);
	const out = [];
	for (const n of nums) if (!seen[n]) { seen[n] = true; out.push(n); }
	return out.sort((a,b)=>a-b);
}

// 5) K Largest Elements
function kLargest(nums, k) {
	return nums.slice().sort((a,b)=>b-a).slice(0, k);
}

// 6) Spiral Order
function spiralOrder(mat) {
	const res = [];
	if (!mat.length) return res;
	let top = 0, bottom = mat.length - 1, left = 0, right = mat[0].length - 1;
	while (top <= bottom && left <= right) {
		for (let c = left; c <= right; c++) res.push(mat[top][c]);
		top++;
		for (let r = top; r <= bottom; r++) res.push(mat[r][right]);
		right--;
		if (top <= bottom) { for (let c = right; c >= left; c--) res.push(mat[bottom][c]); bottom--; }
		if (left <= right) { for (let r = bottom; r >= top; r--) res.push(mat[r][left]); left++; }
	}
	return res;
}

// 7) Two Sum
function twoSum(nums, target) {
	const idx = new Map();
	for (let i = 0; i < nums.length; i++) {
		const need = target - nums[i];
		if (idx.has(need)) return [idx.get(need), i];
		idx.set(nums[i], i);
	}
	return [-1, -1];
}

// 8) Remove In‑Place
function removeInPlace(arr, val) {
	let w = 0;
	for (let r = 0; r < arr.length; r++) {
		if (arr[r] !== val) arr[w++] = arr[r];
	}
	// arr now has valid items in [0, w). Optionally truncate:
	arr.length = w;
	return w;
}
```

=============================================================================================================꧁MR᭄Soumen༻==============================================================================================================================================================================================



---

## JavaScript (Part 4): Loops — Interview Pack

### for Loops

```js
for (let i = 0; i < 5; i++) {
	console.log('i =', i);
}
// Output:
// i = 0
// i = 1
// i = 2
// i = 3
// i = 4
```

- Order: initialize → check condition → body → increment → repeat. Stops when condition is false.

### Dry Run

Trace variables step by step:

```js
let sum = 0;
for (let i = 1; i <= 3; i++) {
	sum += i; // i=1→sum=1; i=2→sum=3; i=3→sum=6
}
// sum = 6
```

### Print Odd Numbers

```js
for (let n = 1; n <= 20; n += 2) console.log(n);
// or
for (let n = 1; n <= 20; n++) if (n % 2 === 1) console.log(n);
```

### Print Even Numbers

```js
for (let n = 0; n <= 20; n += 2) console.log(n);
```

### Infinite Loops

- Avoid `for(;;)` or `while(true)` without a clear `break` condition.
- Use `break` safely and ensure variables change so the loop can terminate.

```js
let attempts = 0;
for (;;) {
	if (++attempts === 3) { console.log('stop'); break; }
}
// Output:
// stop
```

### Print Multiplication Table

```js
const num = 7;
for (let i = 1; i <= 10; i++) {
	console.log(`${num} x ${i} = ${num * i}`);
}
// Output:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
```

### Nested for Loop

```js
for (let i = 1; i <= 3; i++) {
	let row = '';
	for (let j = 1; j <= 3; j++) row += `${i*j}\t`;
	console.log(row);
}
// Output:
// 1	2	3	
// 2	4	6	
// 3	6	9	
```

### while Loops

```js
let i = 0;
while (i < 5) {
	console.log(i);
	i++;
}
// Output:
// 0
// 1
// 2
// 3
// 4
```

### Favorite Movie

Prompt until a non‑empty answer (browser only). Guard cancel.

```js
let movie;
while (movie == null || movie.trim() === '') {
	movie = prompt('Your favorite movie?');
	if (movie === null) { alert('Cancelled'); break; }
}
if (movie && movie.trim()) alert(`Nice choice: ${movie.trim()}`);
```

### break Keyword (and continue)

```js
for (let i = 1; i <= 10; i++) {
	if (i === 7) break;      // stop entirely
	if (i % 2 === 0) continue; // skip evens
	console.log(i);
}
// Output:
// 1
// 3
// 5
```

### Loops with Arrays

```js
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) console.log(i, arr[i]);

// Output:
// 0 10
// 1 20
// 2 30

// Preferred: for..of for values
for (const val of arr) console.log(val);

// Output:
// 10
// 20
// 30

// for..in yields indices (as strings); avoid for arrays unless you need keys
for (const k in arr) console.log(k, arr[k]);

// Output:
// 0 10
// 1 20
// 2 30
```

### Loops with Nested Arrays (2D)

```js
const grid = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
for (let r = 0; r < grid.length; r++) {
	for (let c = 0; c < grid[r].length; c++) {
		console.log(`grid[${r}][${c}] =`, grid[r][c]);
	}
}
// Output:
// grid[0][0] = 1
// grid[0][1] = 2
// grid[0][2] = 3
// grid[1][0] = 4
// grid[1][1] = 5
// grid[1][2] = 6
// grid[2][0] = 7
// grid[2][1] = 8
// grid[2][2] = 9
```

### for‑of Loops

```js
for (const ch of 'JS') console.log(ch); // J, S
for (const n of [2,4,6]) console.log(n*n);
// Output:
// J
// S
// 4
// 16
// 36
```

### Nested for‑of Loop

```js
for (const row of grid) {
	let line = '';
	for (const val of row) line += val + ' ';
	console.log(line.trim());
}
// Output (for grid defined above):
// 1 2 3
// 4 5 6
// 7 8 9
```

### Todo App (only JS)

- Simple prompt‑driven loop (browser). Type `add`, `list`, `del`, or `quit`.

```js
const todos = [];
for (;;) {
	const cmd = prompt('Command (add/list/del/quit)?');
	if (cmd === null) break;
	const c = cmd.trim().toLowerCase();
	if (c === 'add') {
		const item = prompt('New todo:');
		if (item && item.trim()) { todos.push(item.trim()); alert('Added'); }
	} else if (c === 'list') {
		alert(todos.length ? todos.map((t,i)=>`${i}: ${t}`).join('\n') : 'No todos');
	} else if (c === 'del') {
		const idx = Number(prompt('Index to delete:'));
		if (Number.isInteger(idx) && idx >= 0 && idx < todos.length) { todos.splice(idx,1); alert('Deleted'); }
	} else if (c === 'quit') {
		alert('Bye!');
		break;
	}
}
```

---

## Practice Qs — Loops

1) Print numbers from 100 down to 1 using a loop.
2) Sum of first N natural numbers using `for` and using `while`.
3) Print all multiples of 5 between 1 and 100 (inclusive) without using `%` on every number.
4) Count vowels in a string using a loop.
5) Given `[2,7,3,9,4]`, find the max using a loop (no `Math.max`).
6) Print the 10×10 multiplication grid.
7) From a 2D matrix, print the main diagonal and the anti‑diagonal.
8) Use `continue` to print only odd numbers from 1..50.
9) Reverse a string using a loop.
10) Determine if a number is prime using a loop (early break).

---

## Assignment Questions — Loops

1) Factorial
	 - Input: `n >= 0`. Output `n!` using an iterative loop.

2) Power (Fast Exponentiation)
	 - Compute `a^b` using iterative exponentiation by squaring.

3) Fibonacci Series
	 - Print first `n` Fibonacci numbers using a loop.

4) Array Deduplicate (No Extras)
	 - Remove duplicates from an array in place using nested loops only.

5) Matrix Row/Col Sums
	 - For a 2D matrix, print sum of each row and each column.

6) Pattern Printing
	 - For `n`, print a right triangle of `*` and a square border pattern.

7) Count Words
	 - Given a sentence, count words without `split` (iterate and detect transitions).

8) Min and Second Min
	 - Find smallest and second smallest number in a single pass (with loop).

9) GCD (Euclidean)
	 - Compute GCD of `a` and `b` using a loop.

10) Collatz Steps
		- For `n`, repeatedly apply `n = n%2? 3n+1 : n/2` until 1; return steps.

---

## Assignment Solutions — Loops

```js
// 1) Factorial
function factorial(n) {
	if (n < 0) return NaN;
	let res = 1;
	for (let i = 2; i <= n; i++) res *= i;
	return res;
}

// 2) Power (Iterative fast pow)
function powFast(a, b) {
	if (b < 0) return 1 / powFast(a, -b);
	let base = a, exp = b, res = 1;
	while (exp > 0) {
		if (exp & 1) res *= base;
		base *= base;
		exp >>= 1;
	}
	return res;
}

// 3) Fibonacci Series (first n numbers)
function fibSeries(n) {
	const out = [];
	let a = 0, b = 1;
	for (let i = 0; i < n; i++) {
		out.push(a);
		[a, b] = [b, a + b];
	}
	return out;
}

// 4) Array Deduplicate in place (O(n^2))
function dedupInPlace(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				// remove arr[j]
				for (let k = j + 1; k < arr.length; k++) arr[k - 1] = arr[k];
				arr.length--;
				j--;
			}
		}
	}
	return arr;
}

// 5) Matrix Row/Col Sums
function rowColSums(mat) {
	const rows = mat.length, cols = rows ? mat[0].length : 0;
	const rowS = Array(rows).fill(0), colS = Array(cols).fill(0);
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			rowS[r] += mat[r][c];
			colS[c] += mat[r][c];
		}
	}
	return { rowS, colS };
}

// 6) Patterns
function rightTriangle(n) {
	let lines = [];
	for (let i = 1; i <= n; i++) lines.push('*'.repeat(i));
	return lines.join('\n');
}
function squareBorder(n) {
	let out = [];
	for (let r = 0; r < n; r++) {
		let line = '';
		for (let c = 0; c < n; c++) line += (r===0 || r===n-1 || c===0 || c===n-1) ? '*' : ' ';
		out.push(line);
	}
	return out.join('\n');
}

// 7) Count Words (no split)
function countWords(s) {
	let inWord = false, count = 0;
	for (let i = 0; i < s.length; i++) {
		const ch = s[i];
		if (ch !== ' ' && ch !== '\t' && ch !== '\n') {
			if (!inWord) { count++; inWord = true; }
		} else inWord = false;
	}
	return count;
}

// 8) Min and Second Min (one pass)
function minSecondMin(arr) {
	let min1 = Infinity, min2 = Infinity;
	for (const x of arr) {
		if (x < min1) { min2 = min1; min1 = x; }
		else if (x < min2 && x !== min1) { min2 = x; }
	}
	return [min1, min2];
}

// 9) GCD (Euclid)
function gcd(a, b) {
	a = Math.abs(a); b = Math.abs(b);
	while (b !== 0) { const t = b; b = a % b; a = t; }
	return a;
}

// 10) Collatz Steps
function collatzSteps(n) {
	let steps = 0;
	while (n > 1) {
		n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
		steps++;
	}
	return steps;
}
```

=============================================================================================================꧁MR᭄Soumen༻===========================================================================================================



