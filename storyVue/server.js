const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

const express = require('express')
const fs = require('fs');
const app = express()
const port = 8080

// Custom route handler for POST requests to /stories/:id
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST' && req.originalUrl.startsWith('/stories/')) {
    // Extract the story ID from the URL
    const id = parseInt(req.originalUrl.split('/').pop());

    // Set the ID in the request body
    req.body.id = id;
  }

  // Continue to JSON Server router
  next();
});

server.use(middlewares);
server.use(router);

// This is so bad, its almost unbelievable.

app.use('/whatavue', express.static('dist'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
