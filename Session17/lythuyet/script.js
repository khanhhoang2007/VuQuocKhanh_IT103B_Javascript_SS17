// .setItem : tạo key và value
localStorage.setItem("name", "maicute");

// .getItem : lấy value của key
let nameByLocal = localStorage.getItem("name");
console.log(nameByLocal);

// // .removeItem : xóa theo key
// localStorage.removeItem("name");

// // .clear : xóa hết
// localStorage.clear();

// cách lưu trữ giá trị là mảng hoặc object lên localstorage
let todos = [
  { id: 0, name: "chơi game", status: true },
  { id: 0, name: "xem phim", status: false },
];

// kiểu dữ liệu json
// JSON.stringify : chuyển mảng hoặc object về dạng JSON
localStorage.setItem("listTodo", JSON.stringify(todos));

// JSON.parse : chuyển JSON về kiểu dữ liệu mảng hoạc object
let data = JSON.parse(localStorage.getItem("listTodo"));
console.log(data);
