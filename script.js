let current = 0;

// Заполняем список ресторанов
const select = document.getElementById("restaurantSelect");
function renderSelect() {
  select.innerHTML = "";
  restaurants.forEach((r,i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = r.name;
    select.appendChild(option);
  });
  select.value = current;
}
renderSelect();

// Обновляем кнопки по выбранному ресторану
function renderButtons() {
  const r = restaurants[current];
  document.getElementById("routeBtn").href = r.map;
  document.getElementById("callBtn").href = "tel:" + r.phone;
  document.getElementById("tgBtn").href = r.tg;
}
renderButtons();

// Смена ресторана
select.addEventListener("change", e => {
  current = e.target.value;
  renderButtons();
});
