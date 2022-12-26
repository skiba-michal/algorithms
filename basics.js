// ** Basics **

// 1. <--- Fibonacci Sequence --->
// Return the nth element of the Fibonacci squence. e.g. fib (4) yields 5

const fib = (n) => {
  const numbers = [1, 1]; // 1
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n -  1
  }
  return numbers[n]; // 1
};

// T = 1 + 1 + n - 1 => O(n) => Linear Time Complexity

// console.log(fib(0)); // 1
// console.log(fib(5)); // 8
// console.log(fib(22)); // 28657

// 2a. <---  Primality Test --->

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    // 1
    if (n % i === 0) {
      // n
      return false; // 1
    }
  }
  return true; // 1
};

// Best Case: number = 1 OR 2 => O(1)
// Avarage case: O(n)
// Worst case: number = 27,277 => O(n)

// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(9));

// 2b. <---  Primality Test - Improved! --->

const isPrimeImproved = (n) => {
  for (let i = 2; i < Math.sqrt(n); i++) {
    // 1
    if (n % i === 0) {
      // n
      return false; // 1
    }
  }
  return true; // 1
};

// console.log(isPrimeImproved(1));
// console.log(isPrimeImproved(5));
// console.log(isPrimeImproved(27275));

// Best Case: number = 1 OR 2 => O(1)
// Avarage case: O(sqrt(n))
// Worst case: number = 27,277 => O(sqrt(n))

// 3. <--- Smallest Number In Array --->

const getMinNumArr = (numbers) => {
  let currentMin = numbers[0]; // 1
  for (const num of numbers) {
    // 1
    if (num < currentMin) {
      // n
      currentMin = num; // 0 (Best Cane), 2 (Worst Case), 1 (Avg. case)
    }
  }
  return currentMin; // 1
};

// Best Case: [1, 2, 3] => O(n)
// Avarage case: [2, 1, 3] => O(n)
// Worst case: [3, 2, 1] => O(n)

// console.log(getMinNumArr([1, 2, 3]));
// console.log(getMinNumArr([9, 8, 3, 5, 1]));
// console.log(getMinNumArr([10, 3, 8, 6]));

// 4. <--- Is Even --->

const isEven = (number) => {
  return number % 2 === 0;
};

// One Case: O(1)

// 5a. <--- Is Power Of Two --->

const isPowerOfTwo = (number) => {
  if (number < 1) return false;

  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) return false;
    dividedNumber = dividedNumber / 2;
  }
  return true;
};

// Best Case: 13 => O(1)
// Avarage case: O(log n)
// Worst case: 1,125,899,906,842,624 => O(log n)

// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(20));

// 5b. <--- Is Power Of Two - Improved --->

const isPowerOfTwoImproved = (number) => {
  if (number < 1) return false;
  return (number & (number - 1)) === 0;
};

// Best Case: 13 => O(1)
// Avarage case: O(1)
// Worst case: 1,125,899,906,842,624 => O(1)

// console.log(isPowerOfTwoImproved(8));
// console.log(isPowerOfTwoImproved(5));
// console.log(isPowerOfTwoImproved(16));
// console.log(isPowerOfTwoImproved(20));


// 6. <--- Factorial - Calculate the factorial of a number --->

const fact = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// O(n)

// console.log(fact(3));
// console.log(fact(4));
// console.log(fact(5));
