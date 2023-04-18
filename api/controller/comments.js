// const {
//   insertDb,
//   getAllDb,
//   updateById,
//   getById,
//   deleteById,
// } = require("../db");

// const createComment = (req, res) => {
//   const {
//     commentaire_author,
//     commentaire_content,
//     commentaire_publish_date,
//     article_id,
//   } = req.body;

//   try {
//     insertDb(
//       "commentaires",
//       "commentaire_author, commentaire_content, commentaire_publish_date, article_id",
//       [
//         commentaire_author,
//         commentaire_content,
//         commentaire_publish_date,
//         article_id,
//       ]
//     );
//     res.send("Comment has been added to the database succesfuly!");
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(406);
//   }
// };

// const getAllCommentsByArticle = async (req, res) => {
//   try {
//     const articles = await getAllDb("articles");
//     res.send(articles);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(406);
//   }
// };

// const updateArticleById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const {
//       article_title,
//       article_content,
//       article_author,
//       article_publish_date,
//       article_category,
//       article_image,
//       article_status,
//     } = req.body;
//     updateById(
//       "articles",
//       [
//         "article_title",
//         "article_content",
//         "article_author",
//         "article_publish_date",
//         "article_category",
//         "article_image",
//         "article_status",
//       ],
//       [
//         article_title,
//         article_content,
//         article_author,
//         article_publish_date,
//         article_category,
//         article_image,
//         article_status,
//       ],
//       id
//     );
//     res.send("Successful updated");
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(406);
//   }
// };

// // create function to delete article by id

// const deleteArticleById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     deleteById("articles", id);
//     res.send("Successful deleted");
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(406);
//   }
// };

// module.exports = {
//   createComment,
// };
