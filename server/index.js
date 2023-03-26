require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  })