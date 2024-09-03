// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven() {
    const num = Math.floor(Math.random() * 101);

    if (num % 2 === 0) {
        console.log(`${num}: is even!`);
    } else {
        console.log(`${num}: is odd!`);
    }
    return num
}

isEven()
