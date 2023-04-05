let input = prompt("Nhập vào các tên ngăn cách nhau bằng dấu phẩy (,):");
let names = input.split(",");
let wrappedNames = names.map(name => "<" + name.trim() + ">");
let message = "Danh sách tên đã nhập: " + wrappedNames.join(", ");
alert(message);
