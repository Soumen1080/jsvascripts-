# JavaScript (Part 8) — Advanced Arrays & ES6 Interview Notes

Use this as a concise, interview‑focused guide. Each topic includes quick bullets, a minimal example, and inline outputs as comments.

---

## Array Methods (overview)

- Iterate: `forEach` (side effects, returns undefined)
- Transform: `map` (same length), `flatMap` (map + flatten one level)
- Select/Search: `filter`, `find`, `findIndex`, `indexOf`, `includes`
- Test: `some` (any), `every` (all)
- Reduce/Aggregate: `reduce`, `reduceRight`
- Copy/Combine: `slice`, `concat`, `flat`, `join`
- Mutate in place: `splice`, `sort`, `reverse`, `fill`, `copyWithin`

```js


const a = [1, 2, 3, 4];
a.forEach(x => {/* side effect */});
const doubled = a.map(x => x * 2);      // [2,4,6,8]
const evens = a.filter(x => x % 2 === 0); // [2,4]
const has3 = a.includes(3);             // true
const sum = a.reduce((s, x) => s + x, 0); // 10
// doubled => [2,4,6,8]
// evens => [2,4]
// has3 => true
// sum => 10
```

---

## Map & Filter

- `map` transforms each element, length unchanged.
- `filter` keeps elements where predicate is true.
- Prefer them over `forEach` when producing new arrays.

```js
const nums = [1, 2, 3, 4, 5];
const squares = nums.map(n => n * n);         // [1,4,9,16,25]
const odds = nums.filter(n => n % 2 === 1);   // [1,3,5]
// squares => [1,4,9,16,25]
// odds => [1,3,5]
```

---

## Every & Sum (Some)

- `every` checks if all satisfy predicate.
- `some` checks if any satisfy predicate.

```js
const arr = [2, 4, 6];
const allEven = arr.every(n => n % 2 === 0); // true
const anyGt5 = arr.some(n => n > 5);         // true
// allEven => true
// anyGt5 => true
```

---

## Reduce Method

- Fold array into a single value (number, object, array, Map, ...).
- Always pass an initial value when the array may be empty.

```js
// Sum
const total = [1,2,3].reduce((acc, x) => acc + x, 0); // 6

// Frequency map
const s = 'bananas';
const freq = [...s].reduce((m, ch) => (m[ch] = (m[ch]||0) + 1, m), {});
// freq => { b:1, a:3, n:2, s:1 }

// Group by length
const words = ['hi','sun','to','cat'];
const groups = words.reduce((g,w)=>{ (g[w.length] ||= []).push(w); return g; }, {});
// groups => { '2': ['hi','to'], '3': ['sun','cat'] }

// Unique (order-preserving)
const unique = [1,2,2,3].reduce((a,x)=> a.includes(x)?a:(a.push(x),a), []);
// unique => [1,2,3]
```

---

## Maximum in Array

```js
Math.max(2, 9, 4);              // 9
Math.max(...[2, 9, 4]);         // 9 (spread)

const max = [2, 9, 4].reduce((m,x)=> x > m ? x : m, -Infinity);
// max => 9
```

---

## Practice Qs (Quick)

1) Double numbers > 5 and keep only odd results from `[1..10]`.
2) `compact(arr)` — remove all falsy values.
3) Count vowels in a string using array methods.
4) Prefix sums of `[1,2,3,4,5]` → `[1,3,6,10,15]`.
5) `intersection(a,b)` and `difference(a,b)` for numbers.

Minimal solutions:

```js
// 1) Double >5 then keep odd
const res1 = Array.from({length:10}, (_,i)=>i+1)
	.map(n => n>5 ? n*2 : n)
	.filter(n => n % 2 === 1);
// res1 => [1,3,5,7,9]

// 2) compact
const compact = a => a.filter(Boolean);
// compact([0,1,false,2,'',3]) => [1,2,3]

// 3) count vowels
const countVowels = s => [...s.toLowerCase()] 
	.filter(c => 'aeiou'.includes(c)).length;
// countVowels('Hello JS') => 3

// 4) prefix sums
const prefix = [1,2,3,4,5].reduce((acc,x)=> (acc.push((acc.at(-1)||0)+x), acc), []);
// prefix => [1,3,6,10,15]

// 5) set ops
const intersection = (a,b) => { const S = new Set(b); return a.filter(x=>S.has(x)); };
const difference = (a,b) => { const S = new Set(b); return a.filter(x=>!S.has(x)); };
// intersection([1,2,3],[2,3,4]) => [2,3]
// difference([1,2,3],[2,3,4]) => [1]
```

---

## Default Parameters

- Defaults apply only when the argument is `undefined`.
- Defaults are evaluated at call time.

```js
function greet(name = 'Guest') { return `Hi, ${name}!`; }
greet();            // 'Hi, Guest!'
greet(undefined);   // 'Hi, Guest!'
greet(null);        // 'Hi, null!'
// Outputs:
// 'Hi, Guest!'
// 'Hi, Guest!'
// 'Hi, null!'

function power(x, e = 2) { return x ** e; }
// power(3) => 9
// power(3, 3) => 27
```

---

## Spread

- Spread expands iterables/objects.
- Arrays: clone/merge; Objects: shallow copy/merge.

### Spread (Array Literals)

```js
const a1 = [1,2], a2 = [3,4];
const merged = [...a1, 0, ...a2];  // [1,2,0,3,4]
const copy = [...a1];              // [1,2]
const chars = [...'hi'];           // ['h','i']
// merged => [1,2,0,3,4]
// copy => [1,2]
// chars => ['h','i']
```

### Spread (Object Literals)

```js
const base = { name: 'Ada', skills: ['js'] };
const extra = { active: true };
const user = { ...base, ...extra, name: 'Grace' };
// user => { name:'Grace', skills:['js'], active:true }

// Shallow copy pitfall
const clone = { ...base }; clone.skills.push('ts');
// base.skills now: ['js','ts'] (shared reference)
```

---

## Rest

- Rest gathers remaining items into an array (or object rest props).

```js
function sumAll(...nums) { return nums.reduce((s,x)=>s+x,0); }
sumAll(1,2,3); // 6
// => 6

const [head, ...tail] = [10,20,30];
// head => 10, tail => [20,30]

function pick(obj, ...keys) { return keys.reduce((o,k)=>(o[k]=obj[k],o),{}); }
// pick({a:1,b:2,c:3}, 'a','c') => {a:1,c:3}
```

---

## Destructuring (Arrays)

- Extract values by pattern. Support defaults, skipping, and swapping.

```js
const arr2 = [10, 20, 30, 40];
const [first, second, , fourth] = arr2;  // 10,20,40
const [a = 1, b = 2] = [5];              // a=5, b=2
let x = 1, y = 2; [x, y] = [y, x];       // swap → x=2, y=1
// first => 10, second => 20, fourth => 40
// a => 5, b => 2
// x => 2, y => 1
```

---

## Destructuring (Objects)

- Extract by key; rename; defaults; nested safe patterns.

```js
const person = { name: 'Ada', city: 'London', age: 36 };
const { name, age } = person;                      // 'Ada', 36
const { city: location = 'N/A' } = person;         // 'London'

const user2 = { profile: { email: 'a@b.com' } };
const { profile: { email } = {} } = user2;         // 'a@b.com'

function connect({ host = 'localhost', port = 5432 } = {}) {
	return `${host}:${port}`;
}
// name => 'Ada', age => 36
// location => 'London'
// email => 'a@b.com'
// connect() => 'localhost:5432'
// connect({host:'db',port:3306}) => 'db:3306'
```

---

## Assignment Qs

1) Re‑implement `map(arr, fn)` using `reduce`.
2) Re‑implement `filter(arr, fn)` using `reduce`.
3) `flatten1(arr)` to flatten one level of nesting.
4) `unique(arr)` preserving order (without Set first).
5) `topKFrequent(nums, k)` — elements by frequency desc, then value asc.
6) `partition(arr, pred)` → `[pass, fail]` with single `reduce`.
7) `compose(...fns)` — right‑to‑left composition.
8) `deepMerge(a, b)` — recursive merge of plain objects.
9) `zip(a, b)` and `unzip(pairs)` utilities.
10) `pluck(arr, key)` and `indexBy(arr, key)`.

### Assignment Solutions (with example outputs)

```js
// 1) map via reduce
function mapR(arr, fn) {
	return arr.reduce((out, x, i) => (out.push(fn(x, i, arr)), out), []);
}
// mapR([1,2,3], x=>x*2) => [2,4,6]

// 2) filter via reduce
function filterR(arr, fn) {
	return arr.reduce((out, x, i) => (fn(x, i, arr) ? out.push(x) : 0, out), []);
}
// filterR([1,2,3,4], x=>x%2===0) => [2,4]

// 3) flatten one level
function flatten1(arr) { return arr.reduce((out, x) => out.concat(x), []); }
// flatten1([1,[2,3],[4]]) => [1,2,3,4]

// 4) unique (no Set)
function unique(arr) { return arr.reduce((out, x) => (out.includes(x) ? out : (out.push(x), out)), []); }
// unique([1,2,2,3,1]) => [1,2,3]

// 5) top K frequent
function topKFrequent(nums, k) {
	const freq = nums.reduce((m,x)=> (m[x]=(m[x]||0)+1, m), {});
	return Object.entries(freq)
		.sort((a,b)=> b[1]-a[1] || (+a[0])-(+b[0]))
		.slice(0,k)
		.map(([v])=> Number(v));
}
// topKFrequent([1,1,1,2,2,3], 2) => [1,2]

// 6) partition via reduce
function partition(arr, pred) {
	return arr.reduce((acc, x) => (pred(x) ? acc[0].push(x) : acc[1].push(x), acc), [[], []]);
}
// partition([1,2,3,4], x=>x%2===0) => [[2,4],[1,3]]

// 7) compose
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
// compose(x=>x+1, x=>x*2)(3) => 7

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
// deepMerge({a:{x:1}, b:2}, {a:{y:3}, b:4}) => {a:{x:1,y:3}, b:4}

// 9) zip / unzip
const zip = (a, b) => a.map((x,i)=> [x, b[i]]);
const unzip = pairs => pairs.reduce((acc,[x,y])=> (acc[0].push(x), acc[1].push(y), acc), [[],[]]);
// zip([1,2], ['a','b']) => [[1,'a'],[2,'b']]
// unzip([[1,'a'],[2,'b']]) => [[1,2],['a','b']]

// 10) pluck / indexBy
const pluck = (arr, key) => arr.map(o => o[key]);
const indexBy = (arr, key) => arr.reduce((m,o)=> (m[o[key]] = o, m), {});
// pluck([{id:1},{id:2}], 'id') => [1,2]
// indexBy([{id:1,v:'a'},{id:2,v:'b'}], 'id') => {1:{id:1,v:'a'},2:{id:2,v:'b'}}
```

---

## Quick Gotchas

- `sort()` is lexicographic by default; pass a comparator for numbers.
- `forEach` ignores `return`; use `map`/`filter`/`reduce` for data transforms.
- Spread/rest are shallow; nested objects/arrays remain shared references.
- Default parameters trigger only on `undefined`, not on `null/0/''/false`.

