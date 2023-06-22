const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

const express = require('express')
const fs = require('fs');
const app = express()
const port = 8080
const mediaBasePath = "/media/";
const mpegExt = ".mp3";

// Server section

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

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});

// App section
app.use('/whatavue', express.static('dist'));

app.post('/media/post', (req, res) => {
  const fpath = mediaBasePath + req.query["id"] + mpegExt;
  console.log('Writing: ', fpath);

  try {
    var fd = fs.createWriteStream(fpath);
    req.pipe(fd);
    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});


app.post('/media/delete', (req, res) => {
  const fpath = mediaBasePath + req.query["id"] + mpegExt;
  console.log('Removing: ', fpath);
  try {
    fs.unlinkSync(fpath);
    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }

});

app.get('/media/get', (req, res) => {
  const fpath = mediaBasePath + req.query["id"] + mpegExt;
  console.log('Reading: ', fpath);

  try {
    var fd = fs.createReadStream(fpath);
    res.status(200);
    fd.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }

});


app.get('/media/path', (req, res) => {
  const fpath = mediaBasePath + req.query["id"] + mpegExt;
  console.log('Path: ', fpath);
  res.send(fpath);
});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
