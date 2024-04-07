let k = 2;
let check = false;

function hiencacphantu() {
  if (check) {
    document.getElementById("hien").innerHTML = ``;
    check = false;
  }
  let element = document.getElementById("nhap").value;
  if (element == "") {
    return;
  }
    document.getElementById("hien").innerHTML += `
    <div class="phantu" id="tp${k}">
          <button type="button" onclick="xoacacphantu('tp${k}')"><i class="fa fa-trash"></i></button> 
          <div onclick="gachcheo('tp${k}')">${element}</div>
    </div>
  `;
  document.getElementById("nhap").value = "";
  k++;
}

function xoacacphantu(string) {
  k--;
  let element = document.getElementById(`${string}`);
  element.style.borderBottom = 0;
  document.getElementById(`${string}`).innerHTML = "";
  if (k == 1) {
    document.getElementById("hien").innerHTML = `
      <div class="non">this is nothing in the list!</div>
    `
    check = true;
  }
}

function gachcheo(string) {
  let element = document.getElementById(`${string}`);
  if (element.style.textDecoration == "line-through") {
    element.style.textDecoration = "none";
  } else {
    element.style.textDecoration = "line-through";
  }
}