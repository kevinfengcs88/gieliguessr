const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');

const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res) => {
    res.send('API is running');
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.italic));