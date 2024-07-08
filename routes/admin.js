const { Router } = require('express');

const router = Router();

router.get('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">SUBMIT</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
