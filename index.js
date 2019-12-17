// Дано число. Если оно больше 3, то увеличить число на 10, иначе уменьшить на 10.
const numb = (num) => {
  if (num > 3) {
    console.log(num + 10);
  } else {
    console.log(num - 10);
  }
};
numb(5);

// Дано число. Если оно меньше 7, то вывести Yes, если больше 10, то вывести No, если равно 9, то вывести Error.
const number = (num) => {
  if (num === 9) {
    console.log('Error');
  }
  if (num < 7) {
    console.log('Yes');
  } else if (num > 10) {
    console.log('No');
  }
};
number(6);

// Пользователь вводит номер месяца, вывести название месяца.
const month = (num) => {
  if (num === 1) console.log('January');
  if (num === 2) console.log('February');
  if (num === 3) console.log('March');
  if (num === 4) console.log('April');
  if (num === 5) console.log('May');
  if (num === 6) console.log('June');
  if (num === 7) console.log('July');
  if (num === 8) console.log('August');
  if (num === 9) console.log('September');
  if (num === 10) console.log('October');
  if (num === 11) console.log('November');
  if (num === 12) console.log('December');
};
month(3);

// Дано два числа. Вывести наибольшее из них.
const selectingLargestNumber = (num1, num2) => {
  if (num1 > num2) console.log(num1);
  if (num2 > num1) console.log(num2);
};

// Дано два числа. Вывести yes, если они отличаются на 100, иначе вывести No.
const excellentOnHundred = (num1, num2) => {
  if (num1 - num2 === 100 || num2 - num1 === 100) {
    console.log('yes');
  } else {
    console.log('no');
  }
};

// Даны два числа. Если первое число больше второго, то вывести yes, иначе поменять значения этих переменных и вывести их на экран.
const compareNumbers = (num1, num2) => {
  if (num1 > num2) {
    console.log('yes');
  } else {
    [num1, num2] = [num2, num1];
    console.log(num1, num2);
  }
};
compareNumbers(2, 4);

// Дано число. Если оно от -10 до 10 не включительно, то увеличить его на 5, иначе уменьшить на 10.
const anyNumber = (num) => {
  if (num < 10 && num > -10) {
    console.log(num + 5);
  } else {
    console.log(num - 10);
  }
};

// Дано число. Если оно более 100 или менее -100, то занулить, иначе увеличить его на 1.
const moreHundred = (num) => {
  if (num >= 100 || num <= -100) {
    console.log(num = 0)
  } else {
    console.log(num + 1);
  }
};
moreHundred(100);

// Дано число. Если оно от 2 до 5 включительно, то увеличить его на 10. Если оно от 7 до 40, то уменьшить на 100. Если оно не более 0 или более 3000, то увеличить в 3 раза (то есть умножить на 3). Иначе занулить это число.
const randomNumber = (num) => {
  if (num >= 2 && num <= 5) {
    console.log(num + 10);
  }
  if (num >= 7 && num <= 40) {
    console.log(num - 100);
  }
  if (num <= 0 || num >= 3000) {
    console.log(num * 3);
  } else {
    cosole.log(num = 0);
  }
};

// Пользователь вводит номер месяца. Вывести название поры года (весна, лето и т.д.)
const timeYear = (num) => {
  if (num < 1 || num > 12) console.log(null)
  if (num === 1 || num === 2 || num === 12) console.log('winter');
  if (num === 3 || num === 4 || num === 5) console.log('spring');
  if (num === 6 || num === 7 || num === 8) console.log('summer');
  if (num === 9 || num === 10 || num === 11) console.log('autumn');
};
// Пользователь вводит два числа. Если они не равны 10 и первое число четное, то вывести их сумму, иначе вывести их произведение.
const twonumbers = (num1, num2) => {
  if (num1 !== 10 && num2 !== 10 && num1 % 2 === 0) {
    console.log(num1 + num2);
  } else {
    console.log(num1 * num2);
  }
};

// Пользователь вводит три числа. Если все числа больше 10 и первые два числа делятся на 3, то вывести yes, иначе no
const threNumbers = (num1, num2, num3) => {
  if (num1 > 10 && num2 > 10 && num3 > 10 && num1 % 3 === 0 && num2 % 3 === 0) {
    console.log('yes');
  } else {
    console.log('no');
  }
};

// Пользователь вводит три числа. Найти сумму тех чисел, которые делятся на 5. Если таких чисел нет, то вывести error.
const numbers = (num1, num2, num3) => {
  if (num1 % 5 === 0 && num2 % 5 === 0 && num3 % 5 === 0) {
    console.log(num1 + num2 + num3);
  }
  if (num1 % 5 === 0 && num2 % 5 === 0) {
    console.log(num1 + num2);
  }
  if (num1 % 5 === 0 && num3 % 5 === 0) {
    console.log(num1 + num3);
  }
  if (num2 % 5 === 0 && num3 % 5 === 0) {
    console.log(num2 + num3);
  }
};

// Даны три числа. Найдите наибольшее число из них.
const threeNumb = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  }
  if (num2 > num1 && num2 > num3) {
    console.log(num2);
  }
  if (num3 > num1 && num3 > num2) {
    console.log(num3);
  }
};

// Дана дата из трех чисел (день, месяц и год). Вывести yes, если такая дата существует (например, 12 02 1999 - yes, 22 13 2001 - no). Считать, что в феврале всегда 28 дней.
const date = (day, month, year) => {
  if (month === 02) {
    if (day >= 1 && day <= 28) {
      return 'yes';
    } else {
      return 'no';
    }
  }
  if ((day <= 31 && day >= 1) && (month >= 1 && month <= 12) && (year >= 1000)) {
    return 'yes';
  } else {
    return 'no';
  }
};
date(22, 02, 1980)

// Дано трехзначное число. Переставьте первую и последнюю цифры.
const threeNumber = (num) => {
  const string = String(num);
  arrString = string.split('');
  const newArr = [];
  for (let i = arrString.length - 1; i >= 0; i -= 1) {
    newArr.push(arrString[i]);
  }
  console.log(newArr.join(''))
}
threeNumber(123);
