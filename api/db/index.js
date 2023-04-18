const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.sqlite");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS product (pid INTEGER PRIMARY KEY AUTOINCREMENT, product_url TEXT, product_name TEXT, product_img TEXT, product_desc TEXT, product_price NUMBER)"
  );
});
/*
 * Dtabase Functions
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

// db.close();
