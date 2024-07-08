// const http = require('http');
// const {handler} = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.use((req, res, next) => {
//   console.log('In the middleware');
//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.use(shopRoutes);

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
