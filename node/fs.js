const fs = require("fs");

fs.writeFile("./a.txt", "111111", (err, data) => {
  if (err) {
    console.log("错误", err);
  } else {
    console.log("成功", data);
  }
})