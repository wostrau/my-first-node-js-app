// const http = require('http');
// const {handler} = require('./routes');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views, 404.html'));
  res.status(404).render('404');
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
