// Задание 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.
class City {
  constructor(population) {
    this.population = population;
  }
  getAgeCity(dateFoundation) {
    const date = new Date().getFullYear();
    return date - dateFoundation;
  }
}
const minsk = new City(2000000);
console.log(minsk.getAgeCity(1067));

// Задание 2
// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств
class Calculator {
  constructor() {
    this.x = +prompt();
    this.y = +prompt();
  }
  sum() {
    return this.x + this.y;
  }
  mul() {
    return this.x * this.y;
  }
}
const nums = new Calculator();
console.log(nums.mul());

// Задание 3
// 1. Реализовать следующее мини-приложение
class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    const img = document.createElement("img");
    img.src = this.imgUrl;
    this.html = img;
    this.render();
    document.body.style.background = "black";
    // метод должен создать тег img
    // вложить в него src картинки (this.imgUrl)
    // и записать в this.html
    // + дергаем render

    // + странице должен залится фон черным
  }

  render() {
    document.body.appendChild(this.html);
    this.html.style.position = "fixed";
    this.html.style.top = this.top;
    this.html.style.left = this.left;
    this.html.style.width = `${this.width}px`;
    // метод должен отрисовать изображение (this.html) на странице
    // применить фиксированное позиционирование
    // использовать this.top и this.left для указания позиции
    // использовать this.width для указания ширины
  }

  moveUp() {
    this.top = this.top - 20;
    this.html.style.top = `${this.top}px`;
    this.render();
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    // на 20px
    // + дергаем render
  }
  moveDown() {
    this.top = this.top + 20;
    this.html.style.top = `${this.top}px`;
    this.render();
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    // на 20px
    // + дергаем render
  }
  moveLeft() {
    this.left = this.left - 20;
    this.html.style.left = `${this.left}px`;
    this.render();
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    // на 20px
    // + дергаем render
  }
  moveRight() {
    this.left = this.left + 20;
    this.html.style.left = `${this.left}px`;
    this.render();
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    // на 20px
    // + дергаем render
  }
}

const imgUrl = "https://bit.ly/2tcDito";
const mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();
mfLogotip.moveUp();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveLeft();
mfLogotip.moveLeft();
mfLogotip.moveLeft();
// something else, чтобы всё работало

// 2. Добавить к приложению желтый круг (пример ЗДЕСЬ)
// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.
class Circle {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }
  render() {
    const circleDiv = document.createElement("div");
    circleDiv.style.width = `${this.size}px`;
    circleDiv.style.height = `${this.size}px`;
    circleDiv.style.borderRadius = "50%";
    circleDiv.style.backgroundColor = this.color;
    document.body.appendChild(circleDiv);
  }
}
const circle = new Circle(300, "lime");
console.log(circle);
circle.render();
