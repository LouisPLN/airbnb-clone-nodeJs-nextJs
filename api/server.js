const express = require("express");
const app = express();
const port = 3030;
const creator = "Louis";
const { insertDb, getAllDb } = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/product", (req, res) => {
  console.log(req.body);
  const {
    product_url,
    product_name,
    product_img,
    product_desc,
    product_price,
  } = req.body;
  try {
    insertDb(
      "product",
      "product_url, product_name, product_img, product_desc, product_price",
      [product_url, product_name, product_img, product_desc, product_price]
    );
    res.send("Product added");
  } catch (error) {
    console.log(error);
    res.sendStatus(406);
  }
});

app.get("/api/product", async (req, res) => {
  try {
    const products = await getAllDb("product");
    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(406);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} by ${creator}!`);
});
