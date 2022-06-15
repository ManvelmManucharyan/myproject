const sequelize = require('./db/connection');
const bodyParser = require('body-parser')
const express = require('express');
const routes = require('./routes/index');
const employee = require('./models/employee')

const app = express();
const PORT = 3000

app.use(bodyParser.json())
app.use('/api/v1/', routes);

const start = async ()=>{
    try{
        app.listen(PORT)
        await sequelize.authenticate();
        console.log('Database successfully connected')
    }catch (error) {
        console.log('Unable connect to database')
    }
}

start();
