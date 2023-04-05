
// Yêu cầu người dùng nhập vào một chuỗi bất kỳ
const input = prompt("Nhập vào một chuỗi bất kỳ:");

// Chuyển chuỗi thành một mảng các từ
const words = input.split(" ");

// Khởi tạo biến lưu trữ độ dài lớn nhất và từ có độ dài lớn nhất
let maxLength = 0;
let longestWord = "";

// Lặp qua mảng và tìm từ có độ dài lớn nhất
for (let i = 0; i < words.length; i++) {
  if (words[i].length > maxLength) {
    maxLength = words[i].length;
    longestWord = words[i];
  }
}

// In ra từ có độ dài lớn nhất trong chuỗi người dùng nhập vào
console.log(`Từ có độ dài lớn nhất trong chuỗi "${input}" là "${longestWord}".`);
