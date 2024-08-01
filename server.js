require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000; // Use environment variable or default to 3000


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Node.js server running at http://localhost:${port}`);
});

app.get('/config', (req, res) => {
    res.json({
      "mapKey": process.env.GOOGLE_MAP_API_KEY    
    });
  });

