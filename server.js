const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');
const users = require('./routes/api/users');

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

// MongoDB database url
const dbRoute = config.get('mongoURI');

// connects our back end code with the database
 mongoose
    .connect(dbRoute, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log("MongoDB connection error", err));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// append /api/users for our http requests
app.use("/api/users", users);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));