let a = +prompt('Введите значение стороны треугольника A', '');
let b = +prompt('Введите значение стороны треугольника B', '');
let c = +prompt('Введите значение стороны треугольника C', '');

if (a>b+c||b>a+c||c>a+b||a!==+a||b!==+b||c!==+c) {
    console.log('Triangle doesn’t exist');
} else {
    if (a===b&&b===c&&c===a) {
        console.log('Equivalent triangle');
    } else if (a===b||b===c||a===c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
}