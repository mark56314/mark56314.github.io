// Инициализация
const logoEl = document.getElementById("logo");
const select = document.getElementById("restaurantSelect");
const routeBtn = document.getElementById("routeBtn");
const callBtn = document.getElementById("callBtn");
const tgBtn = document.getElementById("tgBtn");

// Логотип
logoEl.src = logoSrc;

// Заполняем список ресторанов
let current = 0;
function renderSelect(){
  select.innerHTML = "";
  restaurants.forEach((r,i)=>{
    const option = document.createElement("option");
    option.value = i;
    option.textContent = r.name;
    select.appendChild(option);
  });
  select.value = current;
}
renderSelect();

// Обновляем кнопки
function renderButtons(){
  const r = restaurants[current];
  routeBtn.href = r.map;
  callBtn.href = "tel:" + r.phone;
  tgBtn.href = r.tg;
}
renderButtons();

// Смена ресторана
select.addEventListener("change", e=>{
  current = e.target.value;
  renderButtons();
});
