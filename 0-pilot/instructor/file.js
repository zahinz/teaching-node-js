const fs = require("fs");

for (let index = 0; index < 5; index++) {
  const content = `hello world ${index + 10}`;
  fs.writeFile(`example-${index}.txt`, content, (error) => {
    if (error) {
      console.log("error file creation");
      // throw new Error("file error");
    } else {
      console.log("success file creation");
    }
  });
}
