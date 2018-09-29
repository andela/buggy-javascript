const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('Hoorah! We got to the user resource');
});

module.exports = router;
