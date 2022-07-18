require('dotenv').config();

exports.DB_CREDENTIALS = {
    DB_USER: process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT
};

exports.CONST_CREDENTIALS = {
    PORT: process.env.PORT,
    API_ROUTR_PREFIX: process.env.API_ROUTR_PREFIX,
    AUTH_SECRET: process.env.AUTH_SECRET
}