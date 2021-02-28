const express = require('express');

const app = express();

let PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server now on port ` + PORT);
  });