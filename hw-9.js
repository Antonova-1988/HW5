// Задание 1

const minNamber = (a, b) => a < b ? a : b;

console.log (minNamber (8, 4));
console.log (minNamber (6, 6));

//Задание 2

function evenNumber(n) {
    if (n % 2 == 0) {
        return `Число чётное`;
    } else {
        return `Число нечётное`; 
    }
}

console.log (evenNumber(7));
console.log (evenNumber(6));

//Задание 3

function square(number) {
    console.log(number ** 2);
}

const up = (c) => c ** 2

square(5);
console.log(up(7));

//Задание 4

function userAge() {
    let userAge = +prompt('Введите Ваш возраст.');
    
    if (userAge < 0) {
        alert('Возраст не может быть отрицательным!');
    } else if (userAge >= 0 && userAge <= 12) {
        alert('Привет, друг!');

    } else if (userAge >= 13) {
        alert('Добро пожаловать!');
        
    }  else {
        alert('Вы ввели неправильное значение');
    }
}

userAge();

//Задание 5

function calc(a, b) {
    if (isNaN(a) || isNaN(b)) {
       return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

console.log(calc('khdfhe',5));
console.log(calc(3,5));

//Задание 6

function number() {
    let userNumber = prompt('Введите число.');
    
    if (isNaN(userNumber)) {
        return 'Переданный параметр не является числом';
    } else {
        return (`${userNumber} в кубе равняется ${userNumber ** 3}`);
    }
}

console.log(number());

Задание 7

function getRectangleArea() {
    return Math.PI * this.radius  ** 2;
}

function getRectanglePerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}

const circle2 = {
    radius: 7,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());