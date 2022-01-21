/* 
    Receives an array of objects in the folowing minimum format:
     [{name:'string value', birthDate:'dd/mm/yyyy'}]
    And a string containing a value that will be used as a reference
    for filtering the passed objects that contain this value in the 'birthDate' property.

    Returns a string, in the JSON format, listing the objects name property of the matching results:
     '[{"name":"string value", "birthDate": "dd/mm/yyyy"}]'
*/


function getThisMonthBirthdays (dbObject, _month) {

    let month;

    
    month = Number.parseInt(_month);
    if(isNaN(month) || month < 1 || month > 12){
        return({"error": "invalid value"});
    }else if(month < 10 ){
        month = String('0' + month);
    }

    

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


module.exports = getThisMonthBirthdays;