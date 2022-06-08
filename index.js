const sequelize = require('./db/connection');
const bodyParser = require('body-parser')
const express = require('express');
const employee = require('./models/employee');
const position = require('./models/position')

const app = express();
const PORT = 3000
const PORT1 = 3001

app.use(bodyParser.json())

const startEmployee = async ()=>{
    try{
        app.listen(PORT)
        await sequelize.authenticate();
        app.post('/', async (req, res)=>{
            await employee.create({
                name: req.body.name,
                age: req.body.age,
                email: req.body.email
            })
            res.status(201).send('Successfully created');
        })
        app.get('/', async (req, res)=>{
            const users = (await employee.findAll()).map(el=> el.getDataValue('name'));
            res.send(users)
        })
        console.log('Database successfully connected')
    }catch (error) {
        console.log('Unable connect to database')
    }
}

// startEmployee();

const startPosition = async ()=>{
    try{
        app.listen(PORT1)
        await sequelize.authenticate();
        app.post('/', async (req, res)=>{
            await position.create({
                position: req.body.position,
                salary: req.body.salary
            })
            console.log(req.body)
            res.status(201).send('Successfully created');
        })
        console.log('Database successfully connected')
    }catch (error) {
        console.log('Unable connect to database')
    }
}

startPosition();