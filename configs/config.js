require('dotenv').config();

const config = {
    PORT: process.env.PORT || 3001,
    DB_NAME: process.env.DB_NAME || '',
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT || '',
    DB_HOST: process.env.DB_HOST
}

module.exports = config;
