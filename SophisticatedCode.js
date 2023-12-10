// File: SophisticatedCode.js

/*******************************
 *   Complex JavaScript Code   *
 *******************************/

// Declare a Person class
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  // Add a method to print person's details
  printDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Occupation: ${this.occupation}`);
  }
}

// Create instances of the Person class
const person1 = new Person("John Doe", 25, "Engineer");
const person2 = new Person("Jane Smith", 30, "Designer");

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Utility function to get the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Array of numbers
const numbers = [2, 5, 10, 15, 20];

// Filter prime numbers from the array
const primeNumbers = numbers.filter((num) => isPrime(num));

// Calculate the factorial of each number in the array
const factorials = numbers.map((num) => factorial(num));

// Print the prime numbers
console.log("Prime Numbers:");
primeNumbers.forEach((num) => console.log(num));

// Print the factorials
console.log("Factorials:");
factorials.forEach((fact) => console.log(fact));

// Fetch data from an API using async/await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchData function
fetchData().catch((error) => console.error("Error:", error));

// Compute the sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

// Print the sum
console.log("Sum of numbers from 1 to 100:", sum);

// Use setTimeout to print a message after a delay
setTimeout(() => {
  console.log("This message is delayed by 3 seconds.");
}, 3000);

/*******************************
 *        End of Code         *
 *******************************/