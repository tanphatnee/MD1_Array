let number = prompt("Nhập một số có 3 chữ số từ 100 đến 999:");
let ones = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
let tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
let hundreds = ["", "một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sáu trăm", "bảy trăm", "tám trăm", "chín trăm"];

let digit1 = parseInt(number[0]);
let digit2 = parseInt(number[1]);
let digit3 = parseInt(number[2]);

let result = "";

if (digit1 !== 0) {
  result += hundreds[digit1] + " ";
}

if (digit2 === 0 && digit3 !== 0) {
  result += "lẻ ";
}

if (digit2 === 1) {
  result += "mười ";
} else if (digit2 > 1) {
  result += tens[digit2] + " ";
}

if (digit3 !== 0 && digit2 !== 1) {
  result += ones[digit3];
}

alert   (result);
