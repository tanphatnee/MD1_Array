// Yêu cầu người dùng nhập vào một chuỗi các số, cách nhau bởi dấu phẩy
const input = prompt("Nhập vào một mảng các số, cách nhau bởi dấu phẩy:");

// Chuyển chuỗi vào một mảng các số
const numbers = input.split(",").map(Number);

// In ra màn hình console các giá trị trong mảng
console.log("Mảng của bạn là:", numbers);
console.log("Số lớn nhất là:", Math.max(...numbers));
console.log("Số bé nhất là:", Math.min(...numbers));
console.log("Tổng là:", numbers.reduce((a, b) => a + b));
console.log("Tích là:", numbers.reduce((a, b) => a * b));
console.log("Trung bình cộng là:", numbers.reduce((a, b) => a + b) / numbers.length);
console.log("Mảng theo chiều thuận là:", numbers);
console.log("Mảng theo chiều nghịch là:", numbers.reverse());
console.log("Mảng đã sắp xếp tăng dần là:", numbers.sort((a, b) => a - b));

