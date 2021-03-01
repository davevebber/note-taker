// modules
const express = require('express');
// routes

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
// port

const PORT = process.env.PORT || 3001;

// sets express to handle data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express static
app.use(express.static("public"));

// routing
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// server listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});