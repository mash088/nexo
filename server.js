const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nexo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Test route
app.get('/', (req, res) => {
  res.send('Nexo backend running...');
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
