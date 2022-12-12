import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    hello: "hi",
  });
});

app.listen(4000, () => {
  console.log("server start! 4000");
});
