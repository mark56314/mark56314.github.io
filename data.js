// Начальные данные ресторанов
const DEFAULT_RESTAURANTS = [
  {
    id: 1,
    name: "Шашлычная (на Гусинобродском шоссе)",
    phone: "+7‒913‒755‒61‒11",
    tg: "https://t.me/+79137556111",
    map: "https://2gis.ru/novosibirsk/firm/70000001087433622?m=82.996884%2C55.033718%2F16"
  },
  {
    id: 2,
    name: "Шашлычная (на Карла Маркса)",
    phone: "+7‒913‒759‒70‒07",
    tg: "https://t.me/+79137597007",
    map: "https://2gis.ru/novosibirsk/firm/70000001081844723/82.894464%2C54.982878?m=82.894464%2C54.982878%2F16"
  }
];

// Логотип по умолчанию (base64 placeholder или URL)
const DEFAULT_LOGO = "logo.jpg";

// Функция получения данных из localStorage или дефолтных
function getRestaurants() {
  const stored = localStorage.getItem('restaurants');
  if (stored) {
    return JSON.parse(stored);
  }
  return DEFAULT_RESTAURANTS;
}

function getLogo() {
  const stored = localStorage.getItem('logo');
  if (stored) {
    return stored;
  }
  return DEFAULT_LOGO;
}

function saveRestaurants(restaurants) {
  localStorage.setItem('restaurants', JSON.stringify(restaurants));
}

function saveLogo(logoData) {
  localStorage.setItem('logo', logoData);
}
