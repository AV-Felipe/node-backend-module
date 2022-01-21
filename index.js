const express = require('express');

const app = express();

const port = 3000;

const getBirthdayDB = require('./modules/happy-birthday.js');
let getBirthday = getBirthdayDB('./mock-data.json');

const getPeopleByDepartmentDB = require('./modules/work-department.js');
let getPeopleByDepartment = getPeopleByDepartmentDB('./mock-data.json');

const getPeopleBranchLineDB = require('./modules/branch-line.js');
let getPeopleBranchLine = getPeopleBranchLineDB('./mock-data.json');

//app.use(express.json());

// GET - item b e c
app.get('/people', (req, res) => {
    
    if('month' in req.query){
        let month = req.query.month;

        res.type('json');
        res.send(getBirthday(month));
    }else if('department' in req.query){
        let department = req.query.department;

        res.type('json');
        res.send(getPeopleByDepartment(department));
    }else{
        res.type('text/plain');
        res.status('404');
        res.send('404 - Not Found');
    }
    
})

// GET - item d
app.get('/people/branch', (req, res) => {

    res.type('json');
    res.send(getPeopleBranchLine());

})

// custom 404 page
app.use((req, res) => {
	res.type('text/plain')
	res.status(404)
	res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
	console.error(err.message)
	res.type('text/plain')
	res.status(500)
	res.send('500 - Server Error')
})

app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))