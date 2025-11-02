const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let todos = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.post('/add', (req, res) => {
  const newTodo = req.body.todo;
  if (newTodo) todos.push(newTodo);
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const index = req.body.index;
  todos.splice(index, 1);
  res.redirect('/');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(' Server running at http://0.0.0.0:${PORT}');
});


