const fs = require('fs');



function setDb(dbPath){

    let dataBase = fs.readFileSync(dbPath);

    return(
        function getPeopleByDepartment (_department) {
            
            let department = _department;

            
            const dbObject = JSON.parse(dataBase);
        
            const returnValue = [];
        
            dbObject.forEach(element => {
                let elementDepartment = element.department.toLowerCase();
                if (elementDepartment === `${department.toLowerCase()}`){
                    returnValue.push({name: element.name});
                }
            });
        
            //console.log(returnValue);
            return (JSON.stringify(returnValue));
        }
    )
    
}


//let x = setDb('../mock-data.json');
//console.log(x('Technology'));



module.exports = setDb;
