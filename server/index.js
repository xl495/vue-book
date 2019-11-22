const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

app.use(require('cors')())

app.use(express.json())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send('Hello')
})

// require('./plugins/db')(app)
require('./routes/admin/')(app)
// require('./routes/web')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000');
});