const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: "./config/.env" });
const { CLIENT_URL } = process.env;

app.use(cors({
    origin: CLIENT_URL,
    optionsSuccessStatus: 200
}));

app.use(express.json());

const authRoute = require('./routes/authRoute');

app.use("/", authRoute);

module.exports = app;