const dotenv = require('dotenv')
const express = require('express')
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;
let newObject = {};


const data = fs.readFileSync('./textFiles/2_employeedepartment.txt', 'utf-8');

const data2 = data.split('\n').map(row => row.trim());
const newData = data2.map(row => row.split(','));

console.log(newData);

app.get('/', (req, res) => {

    res.send(newData);
  });


app.listen(PORT, console.log(`listening on port ${PORT}`)); 