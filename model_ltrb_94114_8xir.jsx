23,64,30,19,20,39,11,34,50,64,7,10,27,66,81,27,23,29,97,16,15,32,72,71,59,85,82,19,20,35,0 * 4
const sum = (a, b) => a + b;
banana


const deepClone = obj => JSON.parse(JSON.stringify(obj));
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
console.log(getRandomString());
84 + 78
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const getUniqueValues = array => [...new Set(array)];

92,3,94 + kiwi
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const removeDuplicates = array => Array.from(new Set(array));
