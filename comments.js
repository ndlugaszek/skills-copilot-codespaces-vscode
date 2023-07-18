// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Data
const comments = require('./comments.json');

// Routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = comments.length + 1;
  comments.push(comment);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = req.body;
  comment.id = id;
  comments[id - 1] = comment;
  res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments[id - 1];
  comments.splice(id - 1, 1);
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});