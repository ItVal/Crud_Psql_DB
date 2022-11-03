const {Pool} = require('pg');
const pool = new Pool({
  host: 'localhost',
  database: 'express_crud',
  user: 'postgres',
  password: 'postgres',
  port: 5432
});

module.exports = pool;