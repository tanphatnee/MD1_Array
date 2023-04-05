// Nhập chuỗi số và chuyển thành mảng
const inputString = prompt("Nhập chuỗi số ngăn cách bởi dấu phẩy:");
const numberArray = inputString.split(",");

// Tính tổng của các số trong mảng
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
  sum += Number(numberArray[i]);
}

// In kết quả ra màn hình console hoặc alert
alert(`Tổng của các số là: ${sum}`);
