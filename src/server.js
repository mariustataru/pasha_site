const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

let users = []; // In-memory data store

app.use(express.json()); // Parse JSON request bodies
const cors = require('cors');
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = users.find(u => u.email === email);

  if (existingUser) {
    res.status(400).json({ message: 'User already exists' });
  } else {
    const newUser = { username, email, password };
    users.push(newUser);
    res.json({ message: 'User registered successfully', user: newUser });
  }
});