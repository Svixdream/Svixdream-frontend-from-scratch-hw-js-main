/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**
у
- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        const isElementFound = includesElement(newArr, array[i])
        if (!isElementFound) {
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(findUniqueElements([1, 2, 3, 2, 1, 4, 5]));

