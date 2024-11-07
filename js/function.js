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

