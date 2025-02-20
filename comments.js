// create a web server
// create a route that receives a POST request to /comments
// and store the comment in an array
// create a route that receives a GET request to /comments
// and return the array of comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let comments = [];

app.post('/comments', (req, res) => {
  comments.push(req.body.comment);
  res.send('Comment added');
});

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});