const path = require('path');
const { Router } = require('express');

const rootDir = require('../util/path');

const router = Router();
const products = [];

router.get('/add-product', (req, res, next) => {
  // console.log('In another middleware');
  // res.send(
  //   '<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">SUBMIT</button></form>'
  // );

  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', { layout: false, docTitle: 'Add Product', path: '/admin/add-product' });
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
