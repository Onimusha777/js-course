'use strict';
var temperCel = +prompt("Введите температуру по Цельсию, чтобы получить температуру по Фаренгейту");
var temperFar = (9 / 5) * temperCel + 32;
alert("Градусов по Фаренгейту: " + temperFar);



var name = "Василий";
var admin = name;
alert(admin);


var sum = 1000 + "108";
alert(sum);

//доп задание

// var a = 10, b = 20

a = a ^ b;
b = a ^ b;
a = a ^ b;

// alert(a)
// alert(b)

//через XOR

/*Атрибуты async и defer - нужны для того, чтобы браузер подгружал страницу с скриптом/скриптами с данными атрибутами, не дожидаясь, пока они отработают

Различия:

В таком коде (с async) первым сработает тот скрипт, который раньше загрузится:

<script src="1.js" async></script>
<script src="2.js" async></script>


А в таком коде (с defer) первым сработает всегда 1.js, а скрипт 2.js, даже если загрузился раньше, будет его ждать.

<script src="1.js" defer></script>
<script src="2.js" defer></script>

Также defer всегда ждет полной загрузки html, а async - нет */