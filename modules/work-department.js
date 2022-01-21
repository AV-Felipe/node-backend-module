/* 
    Receives an array of objects in the folowing minimum format:
     [{name:'string value', department:'string value'}]
    And a string containing a value that will be used as a reference
    for filtering the passed objects that contain this value in the 'department' property.

    Returns a string, in the JSON format, listing the objects name property of the matching results:
     '[{"name":"string value"}]'
*/

function getPeopleByDepartment (dbObject, _department) {
    
    let department = _department;

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


module.exports = getPeopleByDepartment;