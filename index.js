// import express from "express";

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
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

app.delete("/:id", (req, res) => {
  const deleteId = todoList.find((c) => c.id === parseInt(req.params.id));
  if (!deleteId)
    return res.status(404).send("The course with the given ID was not found");

  const index = todoList.indexOf(deleteId);
  todoList.splice(index, 1);

  res.send(deleteId);
});

// app.put("/change/:id", (req, res) => {
//   const deleteId = todoList.find((c) => c.id === parseInt(req.params.id));
//   if (!deleteId)
//     res.status(404).send("The course with the given ID was not found");

//   const { error } = validateCourse(req.body); //result.error
//   if (error) {
//     res.status(400).send(error.details[0].message);
//     return;
//   }

//   deleteId.name = req.body.name;
//   res.send(deleteId);
// });

// function validateCourse(deleteId) {
//   const schema = {
//     name: Joi.string().min(3).required(),
//   };

//   return Joi.validate(deleteId, schema);
// }

app.listen(4000, () => {
  console.log("server start! 4000");
});
