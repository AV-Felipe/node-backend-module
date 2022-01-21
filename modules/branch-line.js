/* 
    Receives an array of objects in the folowing minimum format:
     [{name:'string value', branchLine:'string value'}]
    And a string containing a value that will be used as a reference
    for filtering the passed objects that contain this value in the 'birthDate' property.

    Returns a string, in the JSON format, listing the objects name property of the matching results:
     '[{"name":"string value", "branchLine": "string value"}]'
*/

function getPeopleByBranchLine (dbObject) {

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

    const returnValue = [];

    dbObject.forEach(element => {
        returnValue.push({name: element.name, branchLine: element.branchLine})
    });

    //console.log(dbObject);
    return (JSON.stringify(returnValue));
}


module.exports = getPeopleByBranchLine;
