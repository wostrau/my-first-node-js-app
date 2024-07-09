const path = require('path');
const { Router } = require('express');

const rootDir = require('../util/path');
const router = Router();

router.get('/add-product', (req, res, next) => {
  console.log('In another middleware');
  // res.send(
  //   '<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">SUBMIT</button></form>'
  // );
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
