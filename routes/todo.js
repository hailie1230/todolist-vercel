const express = require("express");

const router = express.Router();

let id = 2;
const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
];

router.get("/", (req, res) => {
  return res.json(todoList);
});

router.post("/", (req, res) => {
  const { text, done } = req.body;
  console.log("req.body : ", req.body);
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send("success");
});

router.delete("/:id", async (req, res) => {});

module.exports = router;
