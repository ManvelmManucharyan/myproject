const sequelize = require('./db/connection');
const bodyParser = require('body-parser')
const express = require('express');
const employee = require('./models/employee')

const app = express();
const PORT = 3000

app.use(bodyParser.json())

const start = async ()=>{
    try{
        app.listen(PORT, ()=>{
            console.log('Hello World')
        })
        await sequelize.authenticate();
        app.post('/', async (req, res)=>{
            await employee.create({
                name: req.body.name,
                age: req.body.age,
                email: req.body.email
            })
            res.status(201).send('Successfully created');
        })
        console.log('Database successfully connected')
    }catch (error) {
        console.log('Unable connect to database')
    }
}

start();