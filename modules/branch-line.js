const fs = require('fs');



function setDb(dbPath){

    let dataBase = fs.readFileSync(dbPath);

    return(
        function getPeopleByBranchLine () {
            
            const dbObject = JSON.parse(dataBase);

            function arrangeValues(a, b){
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1;
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                return 0;
            }
        
            dbObject.sort(arrangeValues);
        
            //console.log(dbObject);
            return (JSON.stringify(dbObject));
        }
    )
    
}


//let x = setDb('../mock-data.json');
//console.log(x());



module.exports = setDb;
