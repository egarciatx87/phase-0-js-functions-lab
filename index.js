// Function 1: calculateTax
// Takes an amount and returns 10% of that value.
function calculateTax(amount) {
  return amount * 0.10;
}

// Function 2: convertToUpperCase
// Takes a string and returns it in all capital letters.
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3: findMaximum
// Compares two numbers and returns the larger one.
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Function 4: isPalindrome
// Checks if a word is the same forward and backward.
function isPalindrome(word) {
  // Convert to lowercase to ensure the check is not case-sensitive
  const lowerWord = word.toLowerCase();
  // Split the string into an array, reverse it, and join it back to a string
  const reversedWord = lowerWord.split('').reverse().join('');
  
  return lowerWord === reversedWord;
}

// Function 5: calculateDiscountedPrice
// Subtracts the discount amount from the original price.
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice }