const express = require('express');

const app = express();

const fs = require('fs');

const port = 3000;

// MOCK DB
const DB_TEXT_FILE = fs.readFileSync('./mock-data.json');
const DB_OBJECT = JSON.parse(DB_TEXT_FILE);

// LOCAL MODULES IMPORTS
const getBirthday = require('./modules/happy-birthday.js');

const getPeopleByDepartment = require('./modules/work-department.js');

const getPeopleBranchLine = require('./modules/branch-line.js');


// GET - item b e c
app.get('/people', (req, res) => {
    
    if('month' in req.query){
        let month = req.query.month;

        res.type('json');
        res.send(getBirthday(DB_OBJECT, month));
    }else if('department' in req.query){
        let department = req.query.department;

        res.type('json');
        res.send(getPeopleByDepartment(DB_OBJECT, department));
    }else{
        res.type('text/plain');
        res.status('404');
        res.send('404 - Not Found');
    }
    
})

// GET - item d
app.get('/people/branch', (req, res) => {

    res.type('json');
    res.send(getPeopleBranchLine(DB_OBJECT));

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