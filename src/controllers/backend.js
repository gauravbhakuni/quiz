// Assuming this is your backend code using Node.js and Express.js

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.json());

// Mock teachers data (usually fetched from the database)
const teachers = [
  {
    id: 1,
    email: 'admin',
    password: '37bd45d638c2d11c49c641d2e9c4f49f406caf3ee282743e0c...', // hashed password
  },
];

// Authenticate endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email (in real app, query from database)
  const user = teachers.find((teacher) => teacher.email === email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Compare password with hashed password
  try {
    if (await bcrypt.compare(password, user.password)) {
      // Passwords match, authentication successful
      return res.status(200).json({ message: 'Login successful' });
    } else {
      // Passwords do not match
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error comparing passwords', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
