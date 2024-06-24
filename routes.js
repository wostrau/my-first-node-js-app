const fs = require('fs');

const handleRequest = (req, res) => {
  let url = req.url;
  let method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      `<body>
        <form action="/message" method="POST">
          <input type="text" name="message">
          <button type="submit">
            Send
          </button>
        </form>
      </body>`
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page!</title></head>');
  res.write('<body><h1>Hello from my Node.js server!</h1></body>');
  res.write('</html>');
  res.end();
};

// option 1 for exporting
module.exports = {
  handler: handleRequest,
  someText: 'Some hard coded text',
};

// option 2 for exporting
// module.exports = handleRequest

// option 3 for exporting
// module.exports.handler = handleRequest;
// module.exports.someText = 'Some hard coded text';

// option 4 for exporting
// exports.handler = handleRequest;
// exports.someText = 'Some hard coded text';
