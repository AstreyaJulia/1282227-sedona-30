// ДЛЯ СЕБЯ. Переключатель сортировки. Для sorting-list-direction не работает, т.к. внутри есть SVG
// Отсюда https://habr.com/ru/company/badoo/blog/143714/

document.addEventListener("click", clickEvent, false);
function clickEvent(e) {
  if (
    e.target.classList.contains("sorting-item") &&
    e.target.parentNode.classList.contains("sorting-list-type")
  ) {
    toggle(e.target);
  }
}

function toggle(el) {
  var cls = el.rel || "active";

  // Удаляем класс active
  var sorttype = document.querySelector(".sorting-list-type");
  var sorttypebtn = sorttype.querySelectorAll(".sorting-item");
  var i;
  for (i = 0; i < sorttypebtn.length; i++) {
    sorttypebtn[i].classList.remove("active");
  }
  el.className += " " + cls;
}


