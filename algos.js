// String Reversal
// .reverse() is an array method, so we need to use .split() first when splits the string into an array
function reverse(str) {
  return str.split('').reverse().join('')
}

function reverse(str) {
  let reversed = '';
  for (let char in str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Palindromes
function palindrome(str) {
  return str.split('').reverse().join('') === str;
}

// Integer Reversal
function reverseInt(n) {
  const reveredInt = n.toString().split('').reverse().join('');
  return parseInt(reveredInt) * Math.sign(n);
}

// CharMaps and Max Character
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] ? charMap[char]++ : charMap[char] = 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
