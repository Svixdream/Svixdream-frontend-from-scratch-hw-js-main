/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/
const result = ["apple", "banana", "cherry", "date"];
const element = ["banana", "fig", "apple"];

function includesElement(array, element) {
    for (let i = 0; i < element.length; i++) {
        if (array.includes(element[i])) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(includesElement(result, element));
