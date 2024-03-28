const express = require('express');
const { Respond } = require('./dataSet');
const app = express();
const cors = require('cors')

app.use(cors());

app.listen(3001,() => {
    console.log('listening on port 3001')
})


app.get('/names',Respond)