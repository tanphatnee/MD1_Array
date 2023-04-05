// Tạo một mảng gồm ít nhất 5 số
const numberArray = [3, 4, 6, -9, 10, -88, 2];

// Nhập số cần tìm kiếm từ người dùng
const searchNumber = Number(prompt("Nhập số cần tìm kiếm:"));

// Tìm kiếm số trong mảng và thông báo kết quả cho người dùng
const index = numberArray.indexOf(searchNumber);
if (index >= 0) {
  console.log(`Số ${searchNumber} có tồn tại trong mảng tại chỉ số ${index}.`);
} else {
  console.log(`Số ${searchNumber} không tồn tại trong mảng.`);
}
