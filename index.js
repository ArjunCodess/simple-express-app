require('dotenv').config();
const express = require("express");

const app = express();
const port = 2374; // process.env.PORT

// app.get('/port', callback function)

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// app.listen(port, callback function)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
