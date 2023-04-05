const bakery = ["chocolate", "marshmallow", "cookies", "chips"];
const cart = [];
const newCart = [
  ["chocolate", 0],
  ["marshmallow", 0],
  ["cookies", 0],
  ["chips", 0],
];

while (confirm) {
  for (let i = 0; i < bakery.length; i++) {
    console.log(`${i + 1}. ${bakery[i]}`);
  }

  let add = prompt("mày muốn mua cái gì? Nhập vào đi ");

  let findIndex = -1;
  for (let i = 0; i < bakery.length; i++) {
    if (add === bakery[i]) {
      findIndex = i;
    }
  }

  let checkCart = -1;
  if (findIndex == -1) {
    alert("Sản phầm hết rồi");
  } else {
    for (let i = 0; i < newCart.length; i++) {
      console.log(`${i + 1}. ${newCart[i]}`);
      if (add == newCart[i][0]) {
        checkCart = i;
      }
    }
  }

  if (checkCart != -1) {
    newCart[checkCart][1] = newCart[checkCart][1] + 1;
    for (let i = 0; i < newCart.length; i++) {
      console.log(`${i + 1}. ${newCart[i]}`);
    }
  }

  let confirm = prompt(
    "Mày có muốn mua hàng tiếp không (yes|no)"
  ).toUpperCase();

  if (confirm == "NO") {
    alert("Tạm biệt và nhớ zả tiền cho t");
    break;
  }
}