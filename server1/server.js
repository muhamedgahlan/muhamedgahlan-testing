const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const os = require('os');
const containerId = os.hostname();

app.get('/', (req, res) => {
  // السطر ده هو اللي هيخلي الـ Logs تتحرك وتسجل كل طلب بيجيلك
  console.log(`Received request on container: ${containerId}`);
  
  res.send(`Hello from backend container ID here mo yes: ${containerId}`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});