// Global Imports
const { Pool } = require('pg');
const chalk = require('chalk');

// Local Imports
const { EnvConfig } = require('../config');

exports.pool = new Pool({
    user: EnvConfig.DB_CREDENTIALS.DB_USER,
    host: EnvConfig.DB_CREDENTIALS.DB_HOST,
    database: EnvConfig.DB_CREDENTIALS.DB_NAME,
    password: EnvConfig.DB_CREDENTIALS.DB_PASSWORD,
    port: EnvConfig.DB_CREDENTIALS.DB_PORT
});

exports.connectDB = async () => {
    try {
        const conn = await this.pool.connect();
        console.log(chalk.blueBright(`Database connected on ${conn.host}`));
    } catch (error) {
        console.log(chalk.yellowBright(`Database not connected!`));
        console.log(error);
    }
}