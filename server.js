const express = require('express');
const app = express();

// routes
const htmlRoutes = require('./routes/htmlRoutes');

// port
let PORT = process.env.PORT || 3009;

// express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express static
app.use(express.static('public'));

// routing
app.use('/', htmlRoutes);

// server listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});