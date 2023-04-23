const dotenv = require('dotenv')
const express = require('express')
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.get('/departments', (req, res) => {
  const data = fs.readFileSync('./textFiles/1_departments.txt', 'utf-8');
  const data2 = data.split('\n').map(row => row.trim());
  const newData = data2.map(row => {
  const [departmentId, deptName] = row.split(',');
  return {departmentId, deptName}
})
  res.send(newData);
})

app.get('/employeeDept', (req, res) => {
    const data = fs.readFileSync('./textFiles/2_employeedepartment.txt', 'utf-8');
    const data2 = data.split('\n').map(row => row.trim());
    const newData = data2.map(row => {
    const [employeeId, departmentId, hireDate, fireDate] = row.split(',');
    return {employeeId, departmentId, hireDate, fireDate}
});
    res.send(newData);
});

app.get('/employees', (req, res) => {
    const data = fs.readFileSync('./textFiles/3_employees.txt', 'utf-8');
    const data2 = data.split('\n').map(row => row.trim());
    const newData = data2.map(row => {
    const [employeeId, birthDay, firstName, lastName, sex, hireDate] = row.split(',');
    return {employeeId, birthDay, firstName, lastName, sex, hireDate}
})
res.send(newData);
});

app.get('/employeesSalaries', (req, res) => {
  const data = fs.readFileSync('./textFiles/4_employeesalaries.txt', 'utf-8');
  const data2 = data.split('\n').map(row => row.trim());
  const newData = data2.map(row => {
  const [employeeId, salary, salaryStartDate, salaryEndDate] = row.split(',');
  return {employeeId, salary, salaryStartDate, salaryEndDate}
})
res.send(newData);
});



app.listen(PORT, console.log(`listening on port ${PORT}`)); 