const {
  insertDb,
  getAllDb,
  updateById,
  getById,
  deleteById,
} = require("../db");

const createArticle = (req, res) => {
  const {
    article_title,
    article_content,
    article_author,
    article_publish_date,
    article_category,
    article_image,
    article_status,
  } = req.body;

  try {
    insertDb(
      "articles",
      "article_title, article_content, article_author, article_publish_date, article_category, article_image, article_status",
      [
        article_title,
        article_content,
        article_author,
        article_publish_date,
        article_category,
        article_image,
        article_status,
      ]
    );
    res.send("Article has been added to the database succesfuly!");
  } catch (error) {
    console.log(error);
    res.sendStatus(406);
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await getAllDb("articles");
    res.json(articles);
  } catch (error) {
    console.log(error);
    res.sendStatus(406);
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await getById("articles", req.params.id);
    res.send(article);
  } catch (error) {
    console.log(error);
    res.sendStatus(406);
  }
};

const updateArticleById = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      article_title,
      article_content,
      article_author,
      article_publish_date,
      article_category,
      article_image,
      article_status,
    } = req.body;
    updateById(
      "articles",
      [
        "article_title",
        "article_content",
        "article_author",
        "article_publish_date",
        "article_category",
        "article_image",
        "article_status",
      ],
      [
        article_title,
        article_content,
        article_author,
        article_publish_date,
        article_category,
        article_image,
        article_status,
      ],
      id
    );
    res.send("Successful updated");
  } catch (error) {
    console.log(error);
    res.sendStatus(406);
  }
};

// create function to delete article by id

const deleteArticleById = async (req, res) => {
  const { id } = req.params;

  try {
    deleteById("articles", id);
    res.send("Successful deleted");
  } catch (error) {
    console.log(error);
    res.sendStatus(406);
  }
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
