import express from "express";

const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 2;
const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
];

app.get("/", (req, res) => {
  res.json(todoList);
});

app.post("/", (req, res) => {
  const { text, done } = req.body;
  console.log("req.body : ", req.body);
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send("success");
});

app.listen(4000, () => {
  console.log("server start! 4000");
});
