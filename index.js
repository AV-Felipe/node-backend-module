const express = require('express');

const app = express();

const port = 3000;

const getBirthdayDB = require('./modules/happy-birthday.js');
let getBirthday = getBirthdayDB('./mock-data.json');

//app.use(express.json());

// GET - item a
app.get('/birthday', (req, res) => {
    
    if('month' in req.query){
        let month = req.query.month;

        res.type('json');
        res.send(getBirthday(month));
    }else{
        res.type('text/plain');
        res.status('404');
        res.send('404 - Not Found');
    }
    
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