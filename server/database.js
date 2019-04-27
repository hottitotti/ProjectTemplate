/**
 * Day 4: Natalie abandoned my ass
 */

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.db_string,
  max: 2
});


pool.connect((err) => {
  if (err) throw new Error(err);
  else console.log('connected to db!');
});

module.exports = pool;