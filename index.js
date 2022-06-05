const sequelize = require('./db/connection');
const express = require('express');
const app = express();

const PORT = 3000

const start = async ()=>{
    try{
        app.listen(PORT, ()=>{
            console.log('Hello World')
        })
        await sequelize.authenticate();
        console.log('Database successfully connected')
    }catch (error) {
        console.log('Unable connect to database')
    }
}

start();