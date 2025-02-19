# Домашнее задание к лекции «TypeScript»

[![Build status](https://ci.appveyor.com/api/projects/status/l40o6ncpawv3t285?svg=true)](https://ci.appveyor.com/project/ArtKonX/ajs-homeworks-typescript)


**Важно**: все задачи допустимо выполнять в одном GitHub репозитории.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: вы можете использовать преднастроенный [шаблон](../ts-template/).


В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## Новые типы

### Описание

На лекции мы написали классы для книг и аудио-альбомов. Но этого недостаточно, т.к. владельцы портала решили добавить возможность поддержки продажи фильмов.

Реализуйте класс `Movie`, который позволяет отобразить информацию, указанную на скриншоте (скриншот с сайта КиноПоиск):

![](pic/avengers.png)

Удостоверьтесь, что добавление объектов вашего класса в корзину работает.

---

## Сумма покупки

### Описание

На лекции мы написали класс `Cart`, который хранит добавленные объекты и может выдавать их список.

Реализуйте в нём несколько дополнительных функций:
1. Функцию, считающую суммарную стоимость (без учёта скидки)
1. Функцию, считающую суммарную стоимость (с учётом скидки) - скидка должна быть параметром, передаваемым в эту функцию
1. Функцию, позволяющую удалять уже добавленный в корзину объект по полю `id`

Для функций обязательно:
1. Указание типов параметров
1. Указание типа возвращаемого значения (если функция ничего не возвращает, то должен быть указан тип `void`)

Напишите авто-тесты на функции - удостоверьтесь, что покрытие по строкам для тестируемых функций равно 100%.

---