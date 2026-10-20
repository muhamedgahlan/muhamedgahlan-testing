const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const os = require('os');
const containerId = os.hostname();

app.get('/', (req, res) => {
  
  res.send(`welcome: ${containerId}`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});