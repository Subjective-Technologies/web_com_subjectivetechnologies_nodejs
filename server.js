const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Paths to your SSL certificates
const httpsOptions = {
  key: fs.readFileSync('./certs/key.pem'),
  cert: fs.readFileSync('./certs/cert.pem')
};

app.prepare().then(() => {
  const server = express();

  // Redirect HTTP to HTTPS
  server.use((req, res, next) => {
    if (!req.secure) {
      return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Listen on port 80 for HTTP
  http.createServer(server).listen(80, () => {
    console.log('HTTP server running on port 80');
  });

  // Listen on port 443 for HTTPS
  https.createServer(httpsOptions, server).listen(443, () => {
    console.log('HTTPS server running on port 443');
  });
});
