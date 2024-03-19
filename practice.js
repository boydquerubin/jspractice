//Write a Javascript program to check two numbers return true if one of the numbers is 100 or if the sum of the two numbers is 100.
const checkNumbers = (Num1, Num2) => Num1 === 100 || Num2 === 100 || Num1 + Num2 === 100;
console.log(checkNumbers(100, 0));
console.log(checkNumbers(0, 100));
console.log(checkNumbers(50, 50));
console.log(checkNumbers(30, 30));

//Write a Javascript program to get the extension of a filename.
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.html'))

//Write a Javascript program to replace every character in a given string with the character following it in the alphabet.
const moveCharsForward = (str) =>
  str
  .split('')
  .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
  .join('');
console.log(moveCharsForward('abc'));

//Write a Javascript program to get the current date. Expected Output: mm-dd-yyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const formatDate = (date = new Date()) => {
    const days = date.getDate() + 1;
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
  } 
console.log(formatDate());

//Write a Javascript program to create a new string adding "New!" in front of a given string. 
//If the given string begins with "New!" already, then return the original string
const addNew = (str) => 
  str.indexOf('New!') === 0 ? str: `New! ${str}`;
console.log(addNew('New! Offers'))
console.log(addNew('Offers'))