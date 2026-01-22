const listDiv = document.getElementById("restaurantList");
const nameInp = document.getElementById("name");
const phoneInp = document.getElementById("phone");
const tgInp = document.getElementById("tg");
const mapInp = document.getElementById("map");
const saveBtn = document.getElementById("saveBtn");

let editIndex = -1;

function renderList() {
  listDiv.innerHTML = "";
  restaurants.forEach((r,i)=>{
    const div = document.createElement("div");
    div.innerHTML = `
      ${r.name} | ${r.phone} 
      <button onclick="edit(${i})">Редактировать</button>
      <button onclick="remove(${i})">Удалить</button>
    `;
    listDiv.appendChild(div);
  });
}
renderList();

window.edit = (i)=>{
  editIndex=i;
  const r = restaurants[i];
  nameInp.value=r.name;
  phoneInp.value=r.phone;
  tgInp.value=r.tg;
  mapInp.value=r.map;
}

window.remove = (i)=>{
  restaurants.splice(i,1);
  renderList();
}

saveBtn.onclick = ()=>{
  const newData = {
    name: nameInp.value,
    phone: phoneInp.value,
    tg: tgInp.value,
    map: mapInp.value
  };
  if(editIndex>=0){
    restaurants[editIndex]=newData;
  }else{
    restaurants.push(newData);
  }
  editIndex=-1;
  nameInp.value=phoneInp.value=tgInp.value=mapInp.value="";
  renderList();
  alert("Сохранено (данные живут в этом браузере пока не обновить репозиторий)");
}
