const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Vishal Technologies HRMS API' });
});

// Employee routes
app.use('/api/employees', require('./routes/employee.routes'));

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});