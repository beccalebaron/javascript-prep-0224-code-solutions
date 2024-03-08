const person = {
  firstName: 'Becca',
  lastName: 'LeBaron',
  hobby: 'bodybuilding',
};
console.log(
  'firstName:',
  person.firstName,
  'lastName:',
  person.lastName,
  'hobby:',
  person.hobby
);

console.log('My name is', person.firstName + ' ' + person.lastName);

person.job = 'bartender';
console.log('My current job is:', person.job);

person['previousJob'] = 'barista';
console.log('My previous job is:', person['previousJob']);

console.log('The complete person object:', person);
