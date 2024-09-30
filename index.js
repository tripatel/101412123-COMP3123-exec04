const express = require('express');
const app = express();
const port = 3000;

// Route for GET /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// Route for GET /user with query parameters
app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'Pritesh';
  const lastname = req.query.lastname || 'Patel';
  res.json({ firstname, lastname });
});

// Route for POST /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:{port}');
});