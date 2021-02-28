// modules
const express = require('express');
const app = express();

// routes
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');

// port
let PORT = process.env.PORT || 3005;

// sets express to handle data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express static
app.use(express.static("public"));

// routing
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// server listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});