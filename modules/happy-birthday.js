const fs = require('fs');



function setDb(dbPath){

    let dataBase = fs.readFileSync(dbPath);

    return(
        function getThisMonthBirthdays (_month) {
            let month;

            if(typeof _month === 'string'){
                month = Number.parseInt(_month);
                if(isNaN(month) || month < 1 || month > 12){
                    return({"error": "invalid value"});
                }else if(month < 10 ){
                    month = String('0' + month);
                }

            }
            const dbObject = JSON.parse(dataBase);
        
            const desiredMonth = String(month);
        
            const returnValue = [];
        
            dbObject.forEach(element => {
                if (element.birthDate.substring(3,5) === `${desiredMonth}`){
                    returnValue.push({name: element.name, birthDate: element.birthDate});
                }
            });
        
            //console.log(returnValue);
            return (JSON.stringify(returnValue));
        }
    )
    
}






module.exports = setDb;
