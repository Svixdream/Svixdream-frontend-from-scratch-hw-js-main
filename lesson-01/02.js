/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial = 1; // factorial — переменная, в которой будет накапливаться результат вычисления факториала. Изначально она равна 1, так как произведение чисел начинается с 1
let number = 1; // number — переменная, которая используется для перебора чисел от 1 до 10. Изначально она равна 1

while (number <= 10) { // Цикл выполняется до тех пор, пока значение переменной number меньше или равно 10. На каждом шаге цикла выполняются следующие действия
  factorial = factorial * number; // factorial = factorial * number; — текущее значение переменной factorial умножается на текущее значение переменной number, и результат присваивается обратно переменной factorial
  number = number + 1; // значение переменной number увеличивается на 1
}

console.log(factorial); // Эта строка выводит окончательное значение переменной factorial в консоль


/* Пошаговый процесс работы цикла:

Когда number = 1: factorial = 1 * 1 = 1
Когда number = 2: factorial = 1 * 2 = 2
Когда number = 3: factorial = 2 * 3 = 6
Когда number = 4: factorial = 6 * 4 = 24
Когда number = 5: factorial = 24 * 5 = 120
Когда number = 6: factorial = 120 * 6 = 720
Когда number = 7: factorial = 720 * 7 = 5040
Когда number = 8: factorial = 5040 * 8 = 40320
Когда number = 9: factorial = 40320 * 9 = 362880
Когда number = 10: factorial = 362880 * 10 = 3628800

После того как цикл завершается (когда number становится равным 11), значение переменной factorial будет равно 3628800, что является факториалом числа 10. */