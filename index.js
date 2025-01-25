const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToDB = require('./config/database.js');
const apiRouter = require('./routes/index.js');
const bodyParser = require('body-parser');
dotenv.config(); // Load environment variables

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);
app.get("/", (req, res) => {
    res.send("Working Server");
});

// Connecting to database
connectToDB();
// const PORT = process.env.PORT;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  


// Export the app for Vercel
module.exports = app;
