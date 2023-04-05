// Yêu cầu người dùng nhập vào một chuỗi bất kỳ
const input = prompt("Nhập vào một chuỗi bất kỳ:");

// Chuyển chuỗi thành một mảng các từ, viết hoa ký tự đầu tiên của từ, sau đó chuyển mảng thành một chuỗi
const capitalizedString = input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

// In ra chuỗi viết hoa toàn bộ ký tự đầu tiên của từng từ trong chuỗi người dùng nhập vào
console.log(`Chuỗi viết hoa toàn bộ ký tự đầu tiên của từng từ trong chuỗi "${input}" là "${capitalizedString}".`);
