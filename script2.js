'use strict';

/*

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2; префиксная форма инкремента : 'c' стало равным 2, 'a' стал равным 2

d = b++; alert(d);           // 1; постфиксная форма инкремента : 'd' осталось равным 1, 'b' все равно увеличился и стал равным 2

c = (2 + ++a); alert(c);      // 5; 2 + (2'ранее запомненное'+1); 'a' стало равно 3

d = (2 + b++); alert(d);      // 4; b ранее стал равен 2, сейчас к нему прибиавляется 1, но возвращается все равно 2, тк постфиксная форма инкремента

alert(a);                    // 3; ранее стал равным трем
alert(b);                    // 3; ранее стал равным трем

*/


/*
var a = 2;
var x = 1 + (a *= 2);
console.log(x);

// x равен 5. a стало равным четырем, тк ей присвоилось новое значение от умножения себя на 2. Потом прибавляем единицу

*/

/*

let a = -2;
let b = 5;

if (a >= 0 && b >= 0) {
    console.log(a - b);
}

else if (a < 0 && b < 0) {
    console.log(a * b);
}

else {
    console.log(a + b);
}

*/

/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/


// function recoursion(x) {
//     if (x < 0 || !Number.isInteger(x)) return 'Задайте целое число больше 0';
//     if (x === 15) return '15';
//     return recoursion(x + 1) + ' ' + x;
// }


// let userNumber = +prompt('Введите число от 0 до 15');
// switch (userNumber) {
//     case alert((recoursion(userNumber))):
//         break;

// }

//можно вынести проверку на положительное/целое число в конструкцию свитч, чтобы она несла не чисто декоративный характер, но решил оставить так - ели будут новые правила для задачи - можно добавлять новые функции в свитч

/* Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */
//(+, -, *, %) 


// function sum(a, b) {
//     return a + b;
// }

//console.log(sum(2, 3));

// function deference(a, b) {
//     return a - b;
// }

// console.log(deference(2, 3));

// function mult(a, b) {
//     return a * b;
// }

// console.log(mult(2, 3));


// function procent(a, b) {
//     return a * 100 / b;
// }

// console.log(procent(2, 3));

//сколько процентов a от b;

//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

// function sum(a, b) {
//     return a + b;
// }

// function deference(a, b) {
//     return a - b;
// }

// function mult(a, b) {
//     return a * b;
// }

// function procent(a, b) {
//     return a * 100 / b;
// }





// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {

//         case 'сумма': return console.log(sum(arg1, arg2));
//         case 'разница': return console.log(deference(arg1, arg2));
//         case 'произведение': return console.log(mult(arg1, arg2));
//         case 'процент от числа': return console.log(procent(arg1, arg2));
//         default: return null;
//     }
// }

// mathOperation(2, 4, 'процент от числа');

// *Сравнить null и 0. Попробуйте объяснить результат.

// let a = 0;
// let b = null;

// if (a === b) {
//     console.log(true);
// }

// else {
//     console.log(false);
// }

//false при любой степени сравнения. https://habr.com/ru/company/ruvds/blog/337732/ - разные типы значений. "Наконец мы попадаем на шаг 22, после чего false возвращается как значение по умолчанию!"22. Вернуть false."
// В результате и оказывается, что:

// null == 0; //false


//*С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень. -->

// let n = 0;
// let origin;

// function index(number) {
//     return origin = val;

// }

// function power(val, pow) {
//     if (n === pow) return console.log(val);

//     if (n = 0) {
//         index(val);
//         return origin;
//     }
//     val = val * origin;
//     n++;
//     return power(val, pow);
// }

// function power(val, pow) {
//     if (pow !== 1) {
//         return val * power(val, pow: pow - 1);
//     }
//     return val;
// }

// power(2, 6);

//можете подсказать, почему переменная origin у меня постоянно undefinded? Уверен, что дело в этом и если бы origin стала равна 2-м на первом ходе функции - все бы решилось,


//Сначала выкатил, потом внес пару правок, перезалив

