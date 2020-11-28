const numbers = [3,4,78,58,10];

// normal for loops

// const output = [];

// for(let i =0; i<numbers.length; i++)
// {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);

// }

// function square (element){
//     element * element
// }

// // arrow function:-

// const square = element => element * element;

// // map

// const result = numbers.map(function(element){
//     return element * element;
// })

// // arrow function inside a map

// const result = numbers.map(x => x*x);

// console.log(result );

// filter

const bigger = numbers.filter(x=> x > 5);

const isThere = numbers.find(x=> x > 5);
console.log(isThere);

