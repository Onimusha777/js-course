'use strict';

//С 1. помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let x = 0;

while (x < 100) {
    if (x === 2 || x === 3 || x === 5 || x === 7) {
        console.log(x);
        x++;
    }

    else if (x === 1) {
        x++;
    }

    else if (x / 2 === Math.round(x / 2)) {
        x++;
    }
    else if (x / 3 === Math.round(x / 3)) {
        x++;
    }

    else if (x / 5 === Math.round(x / 5)) {
        x++;
    }

    else if (x / 7 === Math.round(x / 7)) {
        x++;
    }

    else {
        console.log(x);
        x++;
    }
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


var price;
var products = [
    ["брюки", price = 20],
    ["рубашка", price = 10],
];


products.push(["юбка", price = 17]);
console.log(products);

function arraySum(array) {
    var sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i][1];
    }
    console.log(sum);
}

arraySum(products);

// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

// for (var n = 0; n < 10; console.log(n), n++) { };

// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx -->

for (var n = 0; n <= 20; n++) {
    console.log('x'.repeat(n));
};
