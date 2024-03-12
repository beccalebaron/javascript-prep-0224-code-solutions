function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(4, 4);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return 60 * hours;
}
var convertHoursToMinutesResult = convertHoursToMinutes(3);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + 'Everybody!';
}
var getGreetingResult = getGreeting('Everybody!');
console.log('getGreeting Exercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Results = addAndMultiplyBy5(4, 4);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Results = multiplyAndDivideBy5(10, 5);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResults = subtractTwoNumbers(4, 2);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * 3.14159265359 * radius;
}
var getCircleCircumferenceResults = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}
const getFullNameResult = getFullName('Becca', 'LeBaron');
console.log('getFullName Exercise:', getFullNameResult);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(4);
console.log('cube Exervise:', cubeResult);
