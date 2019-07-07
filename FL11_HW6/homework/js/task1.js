let a1 = +prompt('Введите значение координаты оси x точки A', '');
let a2 = +prompt('Введите значение координаты оси y точки A', '');
let b1 = +prompt('Введите значение координаты оси x точки B', '');
let b2 = +prompt('Введите значение координаты оси y точки B', '');
let c1 = +prompt('Введите значение координаты оси x точки C', '');
let c2 = +prompt('Введите значение координаты оси y точки C', '');
let result;
let divider = 2;

if (c1===(a1+b1)/divider && c2===(a2+b2)/divider) {
    result = true; 
} else {
    result = false;
}
console.log(result);