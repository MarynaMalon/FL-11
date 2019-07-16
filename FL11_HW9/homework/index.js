/*TASK 0*/
function getNumbers(x) {
    let myArray, resultArray = [];
    myArray = x.split('');
    for (let i = 0; i < x.length; i++) {
        if (myArray[i] === '1'|| myArray[i] === '2' || myArray[i] === '3' || myArray[i] === '4' 
        || myArray[i] === '5' || myArray[i] === '6' ||
         myArray[i] === '7' || myArray[i] === '8' || myArray[i] === '9' || myArray[i] === '0') {
            resultArray.push(parseInt(myArray[i]));
        }
        }
    return resultArray;
}

/*TASK 1*/
function findTypes() {
    let n = arguments.length;
    let counterNumbers = 0, counterStrings = 0, counterObjects = 0, counterBoolean = 0;

    for (let i = 0; i < n; i++) {
        switch (typeof arguments[i]) {
            case 'number': counterNumbers+=1; 
            break;
            case 'string': counterStrings+=1;
            break;
            case 'object': counterObjects+=1;
            break;
            case 'boolean': counterBoolean+=1;
            break;
            default:
            break;
        }
    } 
    return {'number': counterNumbers, 'boolean': counterBoolean, 'string': counterStrings, 'object': counterObjects};
}

/*TASK 2*/
function executeforEach() {
    let inputArray = arguments[0];
    let funct = arguments[1];
    for (let i=0; i < inputArray.length; i++){
        funct(inputArray[i]);
    }
}

/*TASK 3*/
function mapArray() {
    let inputArray = arguments[0];
    let funct = arguments[1];
    let resultArray2 = [];
    
    executeforEach(inputArray, function(x) { 
        resultArray2.push(funct(x))
    });
    return resultArray2;
}

/*TASK 4*/
function filterArray() {
    let inputArray = arguments[0];
    let funct = arguments[1];
    let filteredArray = [];
    
    executeforEach(inputArray, function(y) {
        if (funct(y)) {
            filteredArray.push(y)
        } 
    });
    return filteredArray;
}

/*TASK 5*/

/*TASK 6*/
function canConvertToDate(dateToCheck) {
    let inputDate = new Date(dateToCheck);
    let finalDate, year, month, date, hour, min, sec;
    let ten = 10;
    year = inputDate.getFullYear();
    month = inputDate.getMonth() + 1;
    if (month < ten) {
        month = '0'+ month
    }
    date = inputDate.getDate();
    if (date < ten) {
        date = '0'+ date
    }
    hour = inputDate.getHours();
    if (hour < ten) {
        hour = '0'+ hour
    }
    min = inputDate.getMinutes();
    if (min < ten) {
        min = '0'+ min
    }
    sec = inputDate.getSeconds();
    if (sec < ten) {
        sec = '0'+ sec
    }
    finalDate = year+'-'+month+'-'+date+'T'+hour+':'+min+':'+sec;
    
    return finalDate === dateToCheck;
}

/*TASK 7*/
function daysBetween() {
    let firstDate = arguments[0];
    let secondDate = arguments[1];
    let msInDay = 86400000;
    let resultDays = Math.ceil((secondDate - firstDate)/msInDay);
    return resultDays;
}

/*TASK 8*/

/*TASK 9*/

/*TASK 10*/