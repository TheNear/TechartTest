## Techart's тестовое задание.

**Тестовое задание по React**

Реализовать одностраничное веб-приложение на React/Redux, представляющее собой
калькулятор стоимости конструкций здания с использованием внешего API.
Интерфейс калькулятора состоит из последовательных шагов:
##### Шаг 1.
Выбор типа здания (жилой дом или гараж)
<details>
<summary>Скриншот</summary>

![](https://raw.githubusercontent.com/TheNear/TechartTest/master/readmeimg/step1.png)

</details>

##### Шаг 2.
Ввод количества этажей (поле ввода). Внимание: для гаражей этот шаг опускается,
т.к. гаражи только одноэтажные!
<details>
<summary>Скриншот</summary>

![](https://raw.githubusercontent.com/TheNear/TechartTest/master/readmeimg/step2.png)

</details>

##### Шаг 3.
Выбор материала стен. При этом для жилых домов варианты выбора: кирпич,
шлакоблок, деревянный брус. Для гаражей: шлакоблок, металл, сендвич-панели.

<details>
<summary>Скриншот</summary>

![](https://raw.githubusercontent.com/TheNear/TechartTest/master/readmeimg/step3.png)

</details>

##### Шаг 4.
Ввод длины стен в метрах (два поля ввода)
На каждом шаге кнопка __*"Отмена"*__ сбрасывает все введенные данные и возвращает на
первый шаг. Кнопка __*"Далее"*__ переводит на следующий шаг.
На шагах 1 и 3 (выбор из списка) разрешается делать переход на следующий шаг по
нажатию на ссылку в списке без использования кнопки __*"Далее"*__.
По кнопке __*"Рассчитать"*__ на последнем шаге производится обращение к внешнему API за
результатом.
Нумерация шагов для гаражей изменяется (переход с 1-го шага на 3-й не допускается).

<details>
<summary>Скриншот</summary>

![](https://raw.githubusercontent.com/TheNear/TechartTest/master/readmeimg/step4.png)

</details>

##### Шаг ошибки или успеха.

После получения результата его нужно вывести на странице.
По кнопке __*"Новый рассчет"*__ производится переход на первый шаг.


<details>
<summary>Ошибка</summary>

![](https://raw.githubusercontent.com/TheNear/TechartTest/master/readmeimg/error.png)

</details>

<details>
<summary>Успех</summary>


![](https://raw.githubusercontent.com/TheNear/TechartTest/master/readmeimg/result.png)

</details>

# API 
работает по адресу https://data.techart.ru/lab/json/

Это GET-запрос с параметрами:

    building:       тип здания (1 - жилой дом, 2 - гараж)
    height:         количество этажей (для гаражей игнорируется)
    material:       материал стен (1 - кирпич, 2 - шлакоблок, 3 - деревянный брус, 4 - металл, 5 - сендвич-панели)
    sizex и sizey:  длина стен в метрах

**Пример запроса:**
https://data.techart.ru/lab/json/?building=1&height=2&material=2&sizex=10&sizey=12

**Ответ отдается в формате JSON и состоит из двух полей:**

    result:         результат ("ok" или "error")
    message:        сообщение (текст с ценой или сообщение об ошибке)
