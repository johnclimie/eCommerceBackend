const express = require('express');
const routes = require('./routes');
// Imports sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Turns on Server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
