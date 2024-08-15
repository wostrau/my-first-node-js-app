const path = require('path');
const { Router } = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = Router();

router.get('/', (req, res, next) => {
  console.log('products array >>>', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products;
  res.render('shop', {
    layout: false,
    prods: products,
    docTitle: 'My Shop',
    path: '/',
    hasProducts: products.length > 0,
  });
});

module.exports = router;
