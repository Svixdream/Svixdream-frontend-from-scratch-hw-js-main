/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
let isAdmin = true
let isVerifiedUser = true

let hasSpecialPermission = true
let hasTemporaryPass = true

let isAccess = ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass))

    if (isAccess) { // Если переменная isAccess истинна (то есть равна true), то выполните блок кода внутри if"
        console.log('Доступ получен!');
    } else {
        console.log('Доступ закрыт!');
    }