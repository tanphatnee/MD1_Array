
// Yêu cầu người dùng nhập vào một chuỗi bất kỳ
const input = prompt("Nhập vào một chuỗi bất kỳ:");

// Chuyển chuỗi thành một mảng các ký tự, đảo ngược mảng, sau đó chuyển mảng thành một chuỗi
const reversedString = input.split("").reverse().join("");

// In ra chuỗi đảo ngược của chuỗi người dùng nhập vào
console.log(`Chuỗi đảo ngược của chuỗi "${input}" là "${reversedString}".`);
