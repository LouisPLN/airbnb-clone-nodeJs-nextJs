const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database_blog.sqlite");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS articles ( id INTEGER PRIMARY KEY AUTOINCREMENT, article_title TEXT NOT NULL, article_content TEXT NOT NULL, article_author TEXT NOT NULL, article_publish_date DATETIME NOT NULL, article_category TEXT NOT NULL, article_image TEXT, article_status TEXT NOT NULL CHECK (article_status IN ('draft', 'published', 'archived')) );"
  );

  db.run(
    "CREATE TABLE IF NOT EXISTS commentaires ( id INTEGER PRIMARY KEY AUTOINCREMENT, commentaire_author TEXT NOT NULL, commentaire_content TEXT NOT NULL, commentaire_publish_date DATETIME NOT NULL, article_id INTEGER NOT NULL, FOREIGN KEY(article_id) REFERENCES articles(id))"
  );
});

/*
 * Database Functions
 */

/**
 *
 * @param {string} table the name of the table inside db
 * @param {string} columns list of colums to insert "col1, col2.."
 * @param {Array} values list of values to insert [val for col1, ...]
 */
exports.insertDb = (table, columns, values) => {
  const stmt = db.prepare(
    `INSERT INTO ${table} (${columns}) VALUES (${values
      .map((pl) => "?")
      .join(",")})`
  );

  stmt.run(values, (err) => {
    if (err) {
      throw new Error(err.message);
    }
    console.log("Row was added to the table");
  });
};

/**
 * Select all in db
 * @param {string} table table name
 * @returns
 */
exports.getAllDb = async (table) => {
  return await new Promise((resolve, reject) => {
    db.all(`SELECT * FROM ${table}`, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

/**
 * Get elements by id
 * @param {string} table table name
 * @param {number} id
 * @returns
 */
exports.getById = async (table, id) => {
  return await new Promise((resolve, reject) => {
    return db.all(`SELECT * FROM ${table} WHERE id= ? `, id, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

/**
 * Delete element in db by id
 * @param {string} table table name
 * @param {number} id
 */
exports.deleteById = async (table, id) => {
  db.run(`DELETE FROM ${table} WHERE id=(?)`, id, function (err) {
    if (err) {
      throw new Error(err);
    } else {
      return "OK";
    }
  });
};

/**
 * Update element in database by id
 * @param {string} table table name
 * @param {array} columns array of columns names
 * @param {array} values array of values
 * @param {number} id
 * @returns
 */
exports.updateById = async (table, columns, values, id) => {
  const stmt = db.prepare(
    `UPDATE ${table} SET ${columns
      .map((column) => `${column}=(?)`)
      .join(",")} WHERE id=(?)`
  );

  return stmt.run([...values, id], (err) => {
    if (err) {
      throw new Error(err.message);
    }
    console.log("Row was added to the table");
  });
};

/**
 * Get elements by id
 * @param {string} table table name
 * @param {number} id
 * @returns
 */
exports.getByArticleId = async (table, id) => {
  return await new Promise((resolve, reject) => {
    return db.all(
      `SELECT * FROM ${table} WHERE article_id= ? `,
      id,
      (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      }
    );
  });
};

// db.close();
