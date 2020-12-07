'use strict';
const app = require('./app');
const { PORT } = require('./config');
const knex = require('knex');



const knexInstance = knex({
  client: 'pg',
  connection: 'postgresql://localhost/noteful',
});

app.set('db', knexInstance);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});


