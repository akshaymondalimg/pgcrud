// Global Imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const chalk = require('chalk');

// Local Imports
const { EnvConfig } = require('./src/config');
const { connectDB } = require('./src/database');
const route = require('./src/routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

// Routes
route(app);

const port = EnvConfig.CONST_CREDENTIALS.PORT;
app.listen(port, () => {
    console.log(chalk.blueBright(`Server up and run on port ${port}`))
    connectDB();
});