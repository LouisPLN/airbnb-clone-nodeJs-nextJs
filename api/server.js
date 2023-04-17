const express = require("express");
const app = express();
const port = 3000;
const creator = "Louis";

app.get("/", (req, res) => {
  res.send("hello ivan");
});

app.get("/product", (req, res) => {
  res.send({
    pid: 1,
    product_url: "",
    product_name: "",
    product_desc: "",
    product_price: "",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} by ${creator}!`);
});
