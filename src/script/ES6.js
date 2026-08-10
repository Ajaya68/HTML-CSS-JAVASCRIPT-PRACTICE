let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9, 10, 11, 12];

console.log(arr1.concat(arr2));

let arr3 = [...arr1, ...arr2];
console.log(arr3);

let obj1 = {
  name: "Ajaya",
};
let obj2 = {
  name: "Sunauana",
};
let obj3 = {
  ...obj1,
  ...obj2,
  ...arr1,
};
console.log(obj3);
