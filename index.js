const dotenv = require('dotenv')
const express = require('express')
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const path = require('path')

app.use('/htmlFile', express.static(path.join(__dirname, './public')))


// const please_work = document.addEventListener("DOMContentLoaded", function(){
//   document.getElementById('mainDiv').appendChild(DepartmentData)
// })
//const newDiv = document.createElement("div");
//mainDiv.innerHTML += departmentId, deptName;


app.get('/departments', (req, res) => {
  const data = fs.readFileSync('./textFiles/1_departments.txt', 'utf-8');
  const data2 = data.split('\n').map(row => row.trim());
  const DepartmentData = data2.map(row => {
  const [departmentId, deptName] = row.split(',');
  return {departmentId, deptName}

})
  res.send(DepartmentData);
})

app.get('/employeeDept', (req, res) => {
    const data = fs.readFileSync('./textFiles/2_employeedepartment.txt', 'utf-8');
    const data2 = data.split('\n').map(row => row.trim());
    const EmployeeDepartmentData = data2.map(row => {
    const [employeeId, departmentId, hireDate, fireDate] = row.split(',');
    return {employeeId, departmentId, hireDate, fireDate}
});
    res.send(EmployeeDepartmentData);
});

app.get('/employees', (req, res) => {
    const data = fs.readFileSync('./textFiles/3_employees.txt', 'utf-8');
    const data2 = data.split('\n').map(row => row.trim());
    const EmployeeData = data2.map(row => {
    const [employeeId, birthDay, firstName, lastName, sex, hireDate] = row.split(',');
    return {employeeId, birthDay, firstName, lastName, sex, hireDate}
})
res.send(EmployeeData);
});

app.get('/employeesSalaries', (req, res) => {
  const data = fs.readFileSync('./textFiles/4_employeesalaries.txt', 'utf-8');
  const data2 = data.split('\n').map(row => row.trim());
  const SalaryData = data2.map(row => {
  const [employeeId, salary, salaryStartDate, salaryEndDate] = row.split(',');
  return {employeeId, salary, salaryStartDate, salaryEndDate}
})
res.send(SalaryData);
});



app.listen(PORT, console.log(`listening on port ${PORT}`));  