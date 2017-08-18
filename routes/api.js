const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.sendFile('index.html');
});


module.exports = router;
