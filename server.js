const { application } = require("express");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
app.set("view engine", "ejs");

var db;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.71rse6y.mongodb.net/todoapp?retryWrites=true&w=majority",
  { useUnifiedTopology: true },
  function (에러, client) {
    if (에러) return console.log(에러);
    db = client.db("todoapp");

    db.collection("post").insertOne(
      { 이름: "John", _id: 100 },
      function (에러, 결과) {
        console.log("저장완료");
      }
    );

    app.listen(8080, function () {
      console.log("on 8080");
    });
  }
);

app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/write.html");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/add", (요청, 응답) => {
  db.collection("post").insertOne(
    { title: 요청.body.title, date: 요청.body.date },
    function (에러, 결과) {
      console.log("add 저장완료");
    }
  );
  응답.send("전송완료");
});

app.get("/list", (req, res) => {
  res.render("list.ejs");
});
