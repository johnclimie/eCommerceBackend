// Creates Router and apiRoutes
const router = require('express').Router();
const apiRoutes = require('./api');

// /api route is based on /api folder
router.use('/api', apiRoutes);

// If wrong route is inputted, the user get's prompted "Wrong Route!"
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Exports to Router
module.exports = router;