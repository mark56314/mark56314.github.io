// Клиентская логика
// Функции getRestaurants() и getLogo() доступны из data.js

document.addEventListener('DOMContentLoaded', function() {
  var logo = document.getElementById('logo');
  var restaurantSelect = document.getElementById('restaurant-select');
  var btnMap = document.getElementById('btn-map');
  var btnCall = document.getElementById('btn-call');
  var btnTelegram = document.getElementById('btn-telegram');

  var restaurants = [];
  var currentRestaurant = null;

  // Инициализация
  function init() {
    // Загрузка логотипа из localStorage или дефолтного
    logo.src = window.getLogo();

    // Загрузка ресторанов из localStorage или дефолтных
    restaurants = window.getRestaurants();

    // Заполнение select
    populateSelect();

    // Установка первого ресторана
    if (restaurants.length > 0) {
      currentRestaurant = restaurants[0];
      updateButtons();
    }
  }

  // Заполнение списка ресторанов
  function populateSelect() {
    restaurantSelect.innerHTML = '';
    
    restaurants.forEach(function(restaurant, index) {
      var option = document.createElement('option');
      option.value = index;
      option.textContent = restaurant.name;
      restaurantSelect.appendChild(option);
    });
  }

  // Обновление кнопок при смене ресторана
  function updateButtons() {
    if (!currentRestaurant) return;

    // Обновляем ссылки
    btnMap.href = currentRestaurant.map;
    btnCall.href = 'tel:' + currentRestaurant.phone.replace(/[^+\d]/g, '');
    btnTelegram.href = currentRestaurant.tg;
  }

  // Обработчик смены ресторана
  restaurantSelect.addEventListener('change', function() {
    var index = parseInt(this.value);
    currentRestaurant = restaurants[index];
    updateButtons();
  });

  // Запуск
  init();
});
