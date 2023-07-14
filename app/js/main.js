let btnBarElement = document.querySelector('.bars'); // Перехватываем кнопку hamburger
let blockMenuElement = document.querySelector('.menu'); // Перехватываем блок меню
let itemMenuElements = document.querySelectorAll('.menu__item'); // Перехватываем обертки ссылок меню
let linkMenuElements = document.querySelectorAll('.menu__link'); // Перехватываем ссылки меню
let blockPageElements = document.querySelectorAll('.page'); // Перехватываем страницы
let btnHeaderElements = document.querySelectorAll('.accordion__header'); // Перехватываем элемент аккардиона
let itemCardElements = document.querySelectorAll('.wifipanel__card'); // Перехватываем элементы списка Wi-Fi
let checkboxWifiElement = document.querySelector('.wifisettings__checkbox'); // Перехватываем checkbox WiFi
let blockWifiElement = document.querySelector('.wifimanual'); // Перехватываем блок ручного ввода IP
let checkboxWifilocalElement = document.querySelector('.wifilocal__checkbox'); // Перехватываем checkbox WiFi
let blockWifilocalElement = document.querySelector('.wifilocal__form'); // Перехватываем блок ручного ввода IP
let btnNewschElement = document.querySelector('.new-schedule'); // Перехватываем кнопку "Добавить новое время"
let btnNewCloseElement = document.querySelector('.schedule-newpanel__close'); // Перехватываем кнопку закрыть окно нового расписания
let blockNewpanelElement = document.querySelector('.schedule-newpanel'); // Перехватываем блок модального окна

// Действие кнопки hamburger
btnBarElement.addEventListener('click', function () {
  blockMenuElement.classList.toggle('menu_active');
  btnBarElement.blur();
});

// Действия кнопок меню
itemMenuElements.forEach((item) => item.addEventListener('click', function () {
  for (let i = 0; i < itemMenuElements.length; i++) {
    blockPageElements[i].classList.remove('page_show');
    linkMenuElements[i].blur();
  };
  blockPageElements[this.dataset.index].classList.add('page_show');
  blockMenuElement.classList.remove('menu_active');
}));

// Аккардион
btnHeaderElements.forEach((item) => item.addEventListener('click', function () {
  for (let i = 0; i < btnHeaderElements.length; i++) {
    btnHeaderElements[i].firstElementChild.classList.remove('button-icon-active');
    btnHeaderElements[i].nextElementSibling.classList.remove('accordion__content_show');
  }
  this.firstElementChild.classList.toggle('button-icon-active');
  this.nextElementSibling.classList.toggle('accordion__content_show');
}));

// Список wi-fi
itemCardElements.forEach((item) => item.addEventListener('click', function () {
  for (let i = 0; i < itemCardElements.length; i++) {
    itemCardElements[i].classList.remove('wifipanel__card-target');
  }
  item.classList.add('wifipanel__card-target');
}))

// Ручное назначение IP, checkBox
checkboxWifiElement.addEventListener('click', function () {
  blockWifiElement.classList.toggle('wifimanual_hide');
})

// Локальная точка доступа Wi-Fi, checkBox
checkboxWifilocalElement.addEventListener('click', function () {
  blockWifilocalElement.classList.toggle('wifilocal__form_show');
})

// Вкладки, Состояние системы
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("statussystem__tabpanel-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("statussystem__tabpanel-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" statussystem__tabpanel-tab_active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " statussystem__tabpanel-tab_active";
}

// Действие кнопок "Добавить новое время" и "закрыть"
btnNewschElement.onclick = () => { blockNewpanelElement.style.display = "block"; }
btnNewCloseElement.onclick = () => { blockNewpanelElement.style.display = "none"; }
window.onclick = (event) => {
  if (event.target == blockNewpanelElement) {
    blockNewpanelElement.style.display = "none";
  }
}