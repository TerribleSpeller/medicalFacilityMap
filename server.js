import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Node.js server running at http://localhost:${port}`);
});

app.get('/config', (req, res) => {
  res.json({
    "mapKey": process.env.GOOGLE_MAP_API_KEY    
  });
});