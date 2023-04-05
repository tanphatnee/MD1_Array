// Lấy chuỗi đầu vào từ người dùng
const input = prompt("Nhập dãy số, cách nhau bởi dấu phẩy:");

// Chuyển chuỗi thành mảng các số
const numbers = input.split(",").map(Number);

// Lọc các số lẻ vào một mảng mới
const oddNumbers = numbers.filter(num => num % 2 !== 0);

// Tạo chuỗi để hiển thị
let output = "Các số lẻ trong dãy số của bạn là:\n";
output += oddNumbers.join(", ");

// Hiển thị kết quả với alert
alert(output);
