const path = require("path");

const filePath = path.join(__dirname, "example-0.txt");
const ext = path.extname(filePath);

console.log(filePath);
console.log(ext);
