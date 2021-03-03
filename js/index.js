// Поиск тела страницы классу page-body
var page = document.querySelector(".page-body");
// Поиск кнопки открытия формы поиска отелей на главном окне по классу show-search
var btnformopen = document.querySelector(".show-search");
// Поиск модала формы поиска отелей на главном окне по классу search-form
var modalform = document.querySelector(".search-form");
// Поиск поля ввода даты "Дата заезда" в модале формы modalform поиска отелей на главном окне по ID start-date
var startdate = modalform.querySelector("#start-date");
// Поиск поля ввода даты "Дата выезда" в модале формы modalform поиска отелей на главном окне по ID end-date
var enddate = modalform.querySelector("#end-date");
// Поиск поля ввода количества взрослых в модале формы modalform поиска отелей на главном окне по ID adults
// var adultcount = modalform.querySelector("#adults");
// Поиск поля ввода количества детей в модале формы modalform поиска отелей на главном окне по ID childrens
// var childcount = modalform.querySelector("#childrens");

// Прячет модал формы поиска отелей на главном окне при полной загрузке содержимого страницы
page.onload = function () {
  modalform.classList.add("modal-hide");
};

// Переключение класса modal-hide модала формы поиска отелей на главном окне при нажатии на кнопку btnformopen
btnformopen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalform.classList.toggle("modal-hide");
  modalform.classList.toggle("modal-shown");
  modalform.classList.remove("modal-error-animation");
});

// Скрытие модала формы поиска отелей на главном окне при нажатии на кнопку ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalform.classList.contains("modal-shown")) {
      modalform.classList.remove("modal-shown");
      modalform.classList.add("modal-hide");
    }
  }
});

// Проверка модала формы поиска отелей на главном окне на пустые поля при отправке формы
modalform.addEventListener("submit", function (evt) {
  if (!startdate.value || !enddate.value) {
    evt.preventDefault();
    modalform.classList.remove("modal-error-animation");
    modalform.offsetWidth = modalform.offsetWidth;
    modalform.classList.add("modal-error-animation");
  } else {
    localStorage.setItem("startdate", startdate.value);
  }
});
