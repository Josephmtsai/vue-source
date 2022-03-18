const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
var cors = require('cors');
const app = express();
app.use(cors());
// here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.use('/static', serveStatic(path.join(__dirname, '/dist/thirdparty')));
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);