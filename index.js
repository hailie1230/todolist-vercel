const express = require("express");
const todoRouter = require("./routes/todo");

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/todo", todoRouter);

app.listen(4000, () => {
  console.log("server start! 4000");
});
