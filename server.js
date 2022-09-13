const { application } = require("express");
const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("on 8080");
});

app.get("/pet", function (요청, 응답) {
  응답.send("펫 용품 페이지");
});

app.get("/beauty", function (req, res) {
  res.send("뷰티 용품 페이지");
});
