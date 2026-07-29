//Create an array containing 5 numbers and print it.
let arr =[1,2,3,4,5]
for (const element of arr) {
    console.log(element)
}

//Print the first element of an array.
console.log(arr[0]);

//Print the last element of an array.
let lastIndex = arr.length-1;
console.log(arr[lastIndex])

//Find the length of an array.
console.log(arr.length);

//Change the value of the third element.
arr[2]=10;
console.log(arr[2]);

//Add an element to the end using push().
arr.push(20)
lastIndex = arr.length-1;
console.log(arr[lastIndex])

//Add an element to the beginning using unshift().
arr.unshift(22)
console.log(arr[0])

//Remove the last element using pop().
arr.pop()
console.log(arr)

//Remove the first element using shift().
arr.shift()
console.log(arr)

//Check whether an array contains a particular value.
let num=2
for (const element of arr) {
    if (element===num) {
        console.log(`Number found`);
        break;
    }
}

//Print every element using a for loop.
let arr1 = [10,20,30,40,51]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])    
}

//Print every element using for...of.
for (const element of arr1) {
    console.log(element);
}

//Print the elements in reverse order using a loop.
for (let i = arr1.length-1; i >=0; i--) {
    console.log(arr1[i])    
}

//Find the sum of all numbers.
let sum=0
for (let i = 0; i < arr1.length; i++) {
    sum+=arr1[i]
}
console.log(`Sum of all elements in the array is ${sum}`);

//Find the average of all numbers.
let average = sum/arr1.length;
console.log(`Average of all number is ${average}`)

//Find the largest number.
let largest=arr1[0]
console.log(arr1)
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i]>largest) {
        largest=arr1[i]
    }
}
console.log(`Largest number is ${largest}`)

//Find the smallest number.
let smallest=arr1[0]
console.log(arr1)
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i]<smallest) {
        smallest=arr1[i]
    }
}
console.log(`Largest number is ${smallest}`)

//Count how many even numbers are present.
let even=0
for(let i=0;i<arr1.length;i++){
    if (arr1[i]%2==0) {
        even++
    }
}
console.log(`Total even number in array is ${even} `);

//Count how many odd numbers are present.
let odd=0
for(let i=0;i<arr1.length;i++){
    if (arr1[i]%2!==0) {
        odd++
    }
}
console.log(`Total odd number in array is ${odd} `);

//Print only numbers greater than 50.

for(let i=0;i<arr1.length;i++){
    if (arr1[i]>50) {
        console.log(arr1[i])
    }
}

//Add two elements to the end of an array.
arr1.push(22,33)
console.log(arr1)

//Remove the last two elements.
arr1.pop()
arr1.pop()
console.log(arr1)

//Remove the first two elements.
arr1.shift()
arr1.shift()
console.log(arr1)

//Insert "JavaScript" at index 2.
arr1[1]="JavaScript";
console.log(arr1)

//Remove the element at index 3.
let arr2=[1,2,3,4,5,6,7,8,9]
console.log(arr2);
arr2.splice(3, 1);
console.log(arr2);

//Extract the elements from index 1 to 4.
console.log(arr2.slice(1,5))

//Check whether "Python" exists in an array.
arr1 = ["C", "Python", "Ruby", "java"];
if (arr1.includes("Python")) {
    console.log("Python Present")
}
else{
    console.log("Not Present");
}

//Find the index of "Java".
console.log(arr1.indexOf("java"))