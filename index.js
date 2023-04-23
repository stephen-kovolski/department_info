const dotenv = require('dotenv')
const express = require('express')
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;


const data = fs.readFileSync('./textFiles/2_employeedepartment.txt', 'utf-8');

const data2 = data.split('\n').map(row => row.trim());
const newData = data2.map(row => {
  const [employeeId, departmentId, hireDate, fireDate] = row.split(',');
  return {employeeId, departmentId, hireDate, fireDate}

// const dataObjects = dataRows.map(row => {
//   const [employeeId, departmentId] = row.split(',');
//   return { employeeId, departmentId };
});

app.get('/', (req, res) => {
    res.send(newData);
  });


app.listen(PORT, console.log(`listening on port ${PORT}`)); 