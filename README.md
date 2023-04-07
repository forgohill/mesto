# Проект: Место

![image](https://github.com/forgohill/mesto/blob/main/src/images/mem__oop_8pr.jpg)

## Разработка проекта Mesto: базовая функциональность - разрабатываю валидацию всех форм, улучшите UX при работе с попапами 👍. Использование ООП. Модульный подход 🚀🚀🚀.рефакторинг и сборка Вебпаком😅.

###  Часть 5. Усложнение структуры ООП и сборка Вебпаком.
[Ссылка на проект](https://forgohill.github.io/mesto/)

* Рефакторинг кода Java Script.
* Добавили класс который выполняет роль слоя - Section.
* Добавили класс Popup и от него 2 наследуемых класса для попапа для превью и попапа с формой.
* Вынесли логику взаимодействия с контентом в одтельный класс UserInfo.
* Установили Node.js и WebPack в свой свой проект.
* Настроили WebPack для нашего проекта. Сднелаи версию build и dev - локальный сревер.

**О разработке**

В этом проекте, необходимо было вновь сделать рефакторинг существующего кода. Вновь исопльзуем подход ООП. В этот раз необходимо создать еще 5 классов, которые еще больше изменят структуру проекта и организую её в концепции ООП.

Класс `Section`, который отвечает за отрисовку элементов на странице. Выполняет роль связующего слоя — вставляет созданые карточки в HTML нашей страницы.

Класс родитель `Popup` — создаёт стандартные методы которые мы будем использовать при открытии и закрытии модульных окон. Так же от этого класса сделаем 2 наследуемых класса `PopupWithImage` и `PopupWithForm` внутри которых перепишем некторые методы для работы с конретными попами - попап превью и попап который содержит форму для взяимодействия.

В итоге не огранизованной у нас останется логика изменния шапки с профилем страницы — имя и профессия. Эту логику мы организуем с помощью класса `UserInfo`.

После реализации всех задач которые нам поставили в ТЗ, установим в проект Webpack и настроим сборку.

**Технологии используемые в проекте**

* OOP JS.
* Модульная система JS.
* JavaScript
* Node.js
* WebPack



![image](https://github.com/forgohill/mesto/blob/main/src/images/mem__oop_@0,5x.jpg)
###  Часть 4. ООП и разбиение на модули.


* Рефакторинг кода Java Script.
* Создание двух классов и подключение к HTML при помощи `type="module"`
* Используем подход ООП — классы имеют методы для валидации и создания карточки, сама работа класса скрыта под капотом.
* Используем `this.` внутри класса для получения доступа внутри вызова функции/класса.


**О разработке**

В этом проекте, необходимо было сделать рефакторинг существующего кода. Изпользовать подход ООП. Так же разбить структуру кода на модули, которые будут подгружаться к родительскому скрипту `index.js`.

C помощью ООП необходимо создать класс который создаёт экземпляр работающей карточки, внутри которой уже существуют работающие кнопки. Вся работа создания карточки скрыта внутри класса, новый объект созданный с помощью класса Card — имеет только один метод: создание карточки.

Так же создадим класс валидации формы , который имеет метод включение валидации.

Сами классы будут хранится в отдельных файлах JavaScript и подключаться будут модульным подходом.

**Технологии используемые в проекте**

* OOP JS.
* Модульная система JS.
* JavaScript
* Live Server в VSCode — используем локальный сервер.


![image](https://github.com/forgohill/mesto/blob/main/src/images/project__mesto_6pr.gif)
###  Часть 3. Добавление интерактивности: валидация форм и попапы.


* Создание кода Java Script с помощью которого мы будем проверять правильность ввода в строки на стороне пользователя.
* Создание кода Java Script с помощью которого мы будем выводить стандартную строчку браузера на экран в момент ошибки.
* Наш код валидации будет универсален и предназначен на других страницах сайта в том числе.
* Элементы из DOM мы будем добавлять при помощи объекта в которм будут хранится «классы» и «селекторы».


**О разработке**

В этом проекте, необходимо было написать код JS с помощью которго можно будет определять правельно ли пользователь ввел информацию в поля для заполнения. Для этого я буду использовать стандартную валидацию браузера на стороне пользователя. Я буду проверять правильность ввода, и при ошибке выводить стандартную строку из сообщения браузера об ошибке. Эта строка позволит пользователю понять какую он совершил ошибку и исправить её до отправки на сервер. Такой подход уменьшает нагрузку на сервер и позволяет быстро и удобно валидировать вводиимые пользователем данные.

Так же я предумотрю такой момент что до того как пользователь не введет верные данные во все поля формы - кнопка отправить будет не активна.

Файл валидации можно бьудет подключать к другим страницам сайта, где будет валидация. Сделаю его максимально универсальным. Так же элементы для взяимодействия с DOM будут подргужатся из объекта.

**Технологии используемые в проекте**

* Использование стандартной валидации браузера.
* Использование объекта - с набором «ключ: значение» при нахождении элементов DOM.
* Использование подхода «универсальный код»
* JavaScript
* Использование метода Array.from()
* Использование «слушателей» 'input' и 'keydown'
* Графический редактор Figma

**Макет по которому верстался проект**

[Ссылка на макет в Figma](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1)


![image](https://github.com/forgohill/mesto/raw/main/src/images/project__mesto_5pr.gif)

###  Часть 2. Добавление интерактивности: можно добавлять фотографии, удалять их и ставить лайки.



* Создание кода Java Script с помощью которого мы будем добавлять и убрать картинки.
* Создание кода Java Script с помощью которого мы открывать картинку в вспылавющем окне.
* Создание кода Java Script с помощью которого можно будет ставить и убирать лайки, на стороне пользователя.


**О разработке**

В этом проекте, необходимо было написать код JS с помощью которго можно было бы отслеживать интерактивные действия пользователя на странице, и с помощью функций доавлять новые елементы. Так же использовать методологию тега <template> для создания карточек. Так же мы создавали элементы (карточки), а данные для их заполнения брали из массива данных.

**Технологии используемые в проекте**

* Использование <template>
* Использование .addEventListner('событие', функция)
* Использование evt.target
* JavaScript
* Использование метода .forEach()
* Создание эелемeнтов и заполнение их контентом из массива с данными

**Макет по которому верстался проект**

[Ссылка на макет в Figma](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1)



### Часть 1. Базовая функциональность - редактирование профиля страницы.

![image](https://github.com/forgohill/mesto/blob/main/src/images/project__mesto.gif)

* Создание структуры страницы по БЭМ
* Адаптирование страницы под различные экраны и устройства
* Создание кода JavaScript который обеспечивает некоторую функциональность на стороне пользователя.


**О разработке**

В этом проекте, в отличие от пред идущего необходимо было не только создать страницу с CSS структурой по БЭМ(Nested), но так же создать popUp окно, в котором будет находиться 2 текстовых поля для редактирования шапки профиля на созданной странице. С помощью JS необходимо было связать работу этих полей для ввода данных с информацией на странице. Нажав кнопку «СОХРАНИТЬ» пользователь может изменить имя и должность в шапке профиля. Так же появление и закрытие окна popUp реализована при помощи JavaScript.

**Технологии используемые в проекте**

* Grid Layout
* Flex
* Применение медиазапросов
* JavaScript
* обращение к элементам через классы
* запись контента напрямую в элементы

**Макет по которому верстался проект**

* [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

