// Функции с длиной строки
const isLengthLessThanParam = function (string, num) {
  return string.length <= num;
};

const isLengthEqualParam = function (string, num) {
  return string.length === num;
};

const isLengthMoreThanParam = function (string, num) {
  return string.length >= num;
};

// Cтрока короче 20 символов
isLengthLessThanParam('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
isLengthEqualParam('проверяемая строка', 18); // true
// Строка длиннее 25 символов
isLengthMoreThanParam('проверяемая строка', 25); // false

// Функция на проверку палиндрома
const isPalindrome = function (string) {
  string = string.toLowerCase();
  string = string.replaceAll(' ', '');
  const half = Math.floor(string.length / 2);
  let flag = true;
  for (let i = 0; i < half; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      flag = false;
      break;
    }
  }
  return flag;
};

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false
// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true

// Функция для получения целого положительного числа
const getPositiveInteger = function (param) {
  if (isFinite(param)) {
    param = String(param);
  }
  let answer = '';
  param = param.replaceAll(' ', '');
  for (let i = 0; i < param.length; i++) {
    if (!isNaN(param[i])) {
      answer = answer + param[i];
    }
  }
  // if (answer === '') {
  //   return NaN;
  // }
  return parseInt(answer);
};

getPositiveInteger('2023 год'); // 2023
getPositiveInteger('ECMAScript 2022'); // 2022
getPositiveInteger('1 кефир, 0.5 батона'); // 105
getPositiveInteger('агент 007'); // 7
getPositiveInteger('а я томат'); // NaN
getPositiveInteger(2023); // 2023
getPositiveInteger(-1); // 1
getPositiveInteger(1.5); // 15
