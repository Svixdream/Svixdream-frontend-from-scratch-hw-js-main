// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {

    if (num % 2 === 0) {
        console.log(`${num}: is even!`);
        return true
    } else {
        console.log(`${num}: is odd!`);
        return false
    }
    
}

isEven(1)
isEven(2)
