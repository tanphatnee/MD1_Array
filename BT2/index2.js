// Nhập chuỗi số và chuyển thành mảng
const inputString = prompt("Nhập chuỗi số ngăn cách bởi dấu phẩy:");
const numberArray = inputString.split(",");

// Tìm số nhỏ nhất trong mảng
let minNumber = Number(numberArray[0]);
for (let i = 1; i < numberArray.length; i++) {
  const currentNumber = Number(numberArray[i]);
  if (currentNumber < minNumber) {
    minNumber = currentNumber;
  }
}

// In kết quả ra màn hình console hoặc alert
alert(`Số nhỏ nhất là: ${minNumber}`);
