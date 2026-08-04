//Create a string "JavaScript is fun" and print its length.
let str = "javascript is fun";
console.log(str.length);

/*Given:
let name = "Ajaya";
Print the first character and the last character.*/
let name = "Ajaya Mahanty";
console.log(name[0]);
console.log(name[name.length - 1]);

//Convert this string to uppercase:
let text = "hello javascript";
console.log(text.toUpperCase());

//Convert this string to Lowercase:
text = "HELLO JAVASCRIPT";
console.log(text.toLowerCase());

//Given:
let word = "Programming";
//Check whether the string contains "gram".
console.log(word.includes("gram"));

//Find the position/index of "Script":
text = "JavaScript";
console.log(text.indexOf("Script"));

// Remove extra spaces from:
text = "   Hello JavaScript   ";
text = text.trim();
console.log(text);

// Replace "Java" with "Type":
text = "I love Java";
console.log(text.replace("Java", "Type"));

// Check whether this string starts with "Hello":
text = "Hello, JavaScript!";
console.log(text.startsWith("Hello"));

//Check whether this string ends with "World":
text = "Hello World";
console.log(text.endsWith("World"));

//Extract "JavaScript" from:
text = "I am learning JavaScript";
console.log(text.slice(14, text.length));

// Given:
text = "apple,banana,mango,orange";
// Convert it into an array of fruits.
let arr = text.split(" ");
console.log(arr);

//Count the number of vowels in:
function vowels(text) {
  let str = text.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
        break;
    }
  }
  return count;
}
text = "javascript";
console.log(`Total Vowel in String is :${vowels(text)}`);

//Reverse this string:
text = "hello";
console.log(text.split("").reverse().join(""));

//Check whether a string is a palindrome.
// Example:
// "madam" → true
// "hello" → false
text = "hello";
console.log(isPelindrom(text));

function isPelindrom(str) {
  let reverserdStr = str.split("").reverse().join("");
  if (str === reverserdStr) {
    return true;
  } else {
    return false;
  }
}

//Count how many times "a" appears:
text = "banana";
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (text.charAt(i) === "a") {
    count++;
  }
}
console.log(`Total 'a' occures in string is ${count}`);

//Count how many words are in the string.
text = "JavaScript is awesome";
let words = text.split(" ").length;
console.log(words);

//Find the longest word:
text = "I am learning JavaScript";
words = text.split(" ");
console.log(words);
let longest = words[0];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}
console.log(longest);

//Capitalize every word
text = "javascript is very interesting";
let capitalized = text
  .split(" ")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");
console.log(`Capitalized of every word "${capitalized}"`);

//Remove duplicate characters
text = "programming";
//Expected: "progamin"
function removeDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result.includes(char) == false) {
      result += char;
    }
  }
  return result;
}
console.log(removeDuplicates(text));

//Character frequency
text = "banana";
//Expected:
// b → 1
// a → 3
// n → 2
console.log(text);
let counts = {};

for (let i = 0; i < text.length; i++) {
  let char = text[i];
  if (counts[char]) {
    counts[char] += 1;
  } else {
    counts[char] = 1;
  }
}

for (const char in counts) {
  console.log(char + "->" + counts[char]);
}
