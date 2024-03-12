function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  if (age <= 18) {
    return false;
  }
}
var isAdultResult = isAdult(25);
console.log(isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  }
  if (score < 70) {
    return false;
  }
}
var didStudentPassResult = didStudentPass(95);
console.log(didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}
var gradeCalculatorResult = gradeCalculator(102);
console.log(gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'is it hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter valid season';
  }
}
var seasonMessengerResult = seasonMessenger('spring');
console.log(seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else if (
    dayOfTheWeek === 'monday' ||
    dayOfTheWeek === 'tuesday' ||
    dayOfTheWeek === 'wednesday' ||
    dayOfTheWeek === 'thursday' ||
    dayOfTheWeek === 'friday'
  ) {
    return 'it is a weekday!';
  }
}
var dayDetectorResults = dayDetector('monday');
console.log(dayDetectorResults);
