let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "whiteTshirt.webp",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Black Watch",
      category: "Watch",
      price: "89",
      image: "black-watch.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
  ],
};

function timtukhoa() {
  let element = document.getElementById("tukhoa").value;
  element = element.toLowerCase();
  document.getElementById("1").innerHTML = "";
  for (let i = 0; i < products.data.length; i++) {
    let k = products.data[i].productName;
    k = k.toLowerCase();
    if (k.search(element) != -1) {
      document.getElementById("1").innerHTML += `
      <div class="sp-container">
        <a href="" class="phantu">
          <div>
            <img src="${products.data[i].image}" alt="t-shirt">
          </div>
          <div class="mota">
            <div>${products.data[i].productName}</div>
            <div>${products.data[i].price}</div>
          </div>
        </a>
      </div>
      `
    }
  }
  document.getElementById("tukhoa").value = "";
}

function hiencacphantu(index) {
  document.getElementById("1").innerHTML = "";
  for (let i = index; i < products.data.length; i++) {
    document.getElementById("1").innerHTML += `
  <div class="sp-container">
    <a href="" class="phantu">
      <div>
        <img src="${products.data[i].image}" alt="t-shirt">
      </div>
      <div class="mota">
        <div>${products.data[i].productName}</div>
        <div>$${products.data[i].price}</div>
      </div>
    </a>
  </div>
  `
  }
}

function thaydoi(string1, string2) {
  document.getElementById("row2").querySelector(".active").className = "none";
  let element = document.getElementById(`${string2}`);
  element.className = "active";
  document.getElementById("1").innerHTML = "";
  if (string1 == "All") {
    hiencacphantu(0);
    return;
  }
  for (let i = 0; i < products.data.length; i++) {
    let k = products.data[i].category;
    if (k == string1) {
      document.getElementById("1").innerHTML += `
      <div class="sp-container">
        <a href="" class="phantu">
          <div>
            <img src="${products.data[i].image}" alt="t-shirt">
          </div>
          <div class="mota">
            <div>${products.data[i].productName}</div>
            <div>$${products.data[i].price}</div>
          </div>
        </a>
      </div>
      `
    }
  }
}
