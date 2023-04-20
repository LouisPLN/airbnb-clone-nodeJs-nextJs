const express = require("express");
const app = express();
const port = 8000;
const creator = "Louis";
var cors = require("cors");
const {
  getAllArticles,
  createArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
} = require("./controller/articles");

app.use(cors());

app.use(express.json());

app.post("/api/article", createArticle);

app.get("/api/articles", getAllArticles);

app.get("/api/article/:id", getArticleById);

app.put("/api/edit/article/:id", updateArticleById);

app.delete("/api/delete/article/:id", deleteArticleById);

app.listen(port, () => {
  console.log(`Blog app listening on port ${port} by ${creator}!`);
});
