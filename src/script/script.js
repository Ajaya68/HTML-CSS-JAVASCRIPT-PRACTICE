// Print numbers from 1 to 10 using a for loop.
console.log("Print numbers from 1 to 10 using a for loop.")
for(let i=1;i<=10;i++){
    console.log(i)
}

//Print numbers from 10 to 1 using a while loop.
let i=10
console.log("Print numbers from 10 to 1 using a while loop.")
while (i >= 1) {
    console.log(i)
    i--;
}

//Print all even numbers between 1 and 50.
console.log("Print all even numbers between 1 and 50")
for (let j = 1;j <= 50; j++) {
    if (j%2==0) {
        console.log(j)
    }    
}

//Print all odd numbers between 1 and 100.
console.log("Print all odd numbers between 1 and 100.")
for (let j = 1; j <=100 ; j++) {
    if (j%2!==0) {
        console.log(j)
    }    
}

// Print the multiplication table of 7.
console.log("Print the multiplication table of 7.");
let x =7;
for (let j = 1; j <=10; j++) {
    console.log(`${x} X ${j}=${x*j}`)    
}

//Find the sum of numbers from 1 to 100.
let sum=0;
for (let j = 1; j <=100 ; j++) {
    sum +=j;
}
console.log(`sum of numbers from 1 to 100 = ${sum}`)

//Find the factorial of a number.
let factorial=1,num=4;
for(let k=1;k<=num;k++){
    factorial *=k;
}
console.log(`Factorial of ${num} = ${factorial}`)

//Count how many numbers are divisible by 5 between 1 and 100.
let divisibleByFive=0;
for(let a=1;a<=100;a++){
    if (a%2===0) {
        divisibleByFive++;
    }
}
console.log(`Total ${divisibleByFive} number divisible by 5 between 1-100`)

//Print the first 20 natural numbers using do...while.
console.log("first 20 natural numbers using do...while.")
let naturalNum=0;
do {
    console.log(naturalNum);
    naturalNum++;
} while (naturalNum<=20);

//Print numbers from 1 to 20, but skip multiples of 3.
for(let b=1;b<=20;b++){
    if(b%3==0){
        continue
    }
    else{
        console.log(b)
    }
}