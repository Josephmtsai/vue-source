const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
var cors = require('cors');
const app = express();
app.use(cors());

function setCustomCacheControl(res, path) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log('set header');
}
// here we are configuring dist to serve app files
app.use(serveStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);
