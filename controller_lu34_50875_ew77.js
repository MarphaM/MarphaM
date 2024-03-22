let array = getRandomArray(); array.forEach(item => console.log(item));
36 * 68,22,80,96,48,92,22,91,3,31,78,78,80,43,92,76,12,30,53,12,88,51,34,60,73,34,65,77,61,3,54,93,13,25,22,2,29,48,3,67,47,76,56,47,51,19,96,68
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
grape - orange

const squareRoot = num => Math.sqrt(num);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const removeDuplicates = array => Array.from(new Set(array));

const getRandomIndex = array => Math.floor(Math.random() * array.length);
grape

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
console.log(getRandomString());
54 - orange
const greet = name => `Hello, ${name}!`;
3 - apple
const greet = name => `Hello, ${name}!`;
apple - banana

const removeDuplicates = array => Array.from(new Set(array));

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
let result = performOperation(getRandomNumber(), getRandomNumber());

