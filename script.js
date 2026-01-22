let data = JSON.parse(localStorage.getItem("restaurants")) || [];
let current = localStorage.getItem("current") || 0;

function render() {
  if (!data.length) return;

  const r = data[current];
  document.getElementById("routeBtn").href = r.map;
  document.getElementById("callBtn").href = "tel:" + r.phone;
  document.getElementById("tgBtn").href = r.tg;
}

document.getElementById("selectBtn").onclick = () => {
  const modal = document.getElementById("modal");
  modal.innerHTML = data.map((r,i) =>
    `<div onclick="select(${i})">${r.name}</div>`
  ).join("");
  modal.style.display = "block";
};

function select(i){
  current = i;
  localStorage.setItem("current", i);
  document.getElementById("modal").style.display="none";
  render();
}

render();
