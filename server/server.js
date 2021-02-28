//Express Application
require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000
const staticOptions = {
    dotfiles: 'ignore',
    extensions: ['htm','html']
}

//setup express to server static html page
app.use(express.static(path.join(__dirname, '../public'), staticOptions))


//API FOR EMPLOYEES
//baseURL api/v1/emplyees
app.get('/api/v1/employees', (req, res, next)=>{
    res.send({name:'jim'})
})

//public 404 page not found
app.use((req, res, next)=>{
    res.sendFile(path.join(__dirname, '../public/404.html'))
})

app.listen('3000', ()=>{
    console.log(`SERVER IS RUNNING ON------- http://localhost:${PORT}`)
})
