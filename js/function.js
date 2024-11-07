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
// Строка длиннее 10 символов
isLengthMoreThanParam('проверяемая строка', 10); // false

const isPalindrome = function (string) {
  if (string.length % 2 === 1) {

  }
};




// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс');  // false

