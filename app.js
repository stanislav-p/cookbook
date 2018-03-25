const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const router = express.Router();
const appRoutes = require('./routes/api')(router);

// Connect to Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function() {
    console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', function(err) {
    console.log('Database error: ' + err);
});

const app = express();

// Port Number
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/api', appRoutes);

// Index Route
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start Server
app.listen(port, function() {
    console.log( 'Server is running on port' + ' ' + port );
});