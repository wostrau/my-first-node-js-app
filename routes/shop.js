const path = require('path');
const { Router } = require('express');

const rootDir = require('../util/path');

const router = Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
