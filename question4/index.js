// Chuyển đổi mảng dữ liệu dưới đây
const players = [
  { name: "Nam", team: "apple" },
  { name: "Phong", team: "banana" },
  { name: "Duc", team: "orange" },
  { name: "Trieu", team: "apple" },
  { name: "Dat", team: "apple" },
  { name: "Tri", team: "banana" },
  { name: "Duc", team: "apple" },
  { name: "Linh", team: "banana" },
  { name: "Quy", team: "apple" },
  { name: "Quang", team: "banana" },
  { name: "Kieu Linh", team: "apple" },
  { name: "Phuc", team: "banana" },
  { name: "Van", team: "orange" },
  { name: "Hanh", team: "apple" },
  { name: "Hoang", team: "banana" },
  { name: "Minh", team: "apple" },
  { name: "Tu", team: "apple" },
  { name: "Duc Anh", team: "banana" },
  { name: "Hoa", team: "orange" },
  { name: "Huong", team: "banana" },
  { name: "Trinh", team: "apple" },
  { name: "Dung", team: "apple" },
  { name: "Phuong", team: "banana" },
  { name: "Lan Anh", team: "apple" },
  { name: "Que", team: "orange" },
  { name: "Hue", team: "apple" },
];

// để được kết quả như sau
const result = {
  apple: [
    "Trieu",
    "Dat",
    "Duc",
    "Quy",
    "Kieu Linh",
    "Hanh",
    "Minh",
    "Tu",
    "Trinh",
    "Dung",
    "Lan Anh",
    "Hue",
  ],
  banana: [
    "Tri",
    "Linh",
    "Quang",
    "Phuc",
    "Hoang",
    "Duc Anh",
    "Huong",
    "Phuong",
  ],
  orange: ["Van", "Hoa", "Que"],
};

// và in ra màn hình console bằng lệnh console.log

/*----- Viết đáp án tại đây -----*/

console.log();
