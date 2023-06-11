const express = require('express')
const fs = require('fs');
const app = express()
const port = 8080

app.get('/storyTypes', (req, res) => {

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  res.send(data);
});
})

app.use('/whatavue', express.static('static'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

