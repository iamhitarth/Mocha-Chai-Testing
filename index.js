var utils = require("./lib/utils.js");

console.log('Gumroad Test 1 - Find pivot of array');
process.stdin.resume();
process.stdin.setEncoding('utf8');
 
process.stdin.on('data', function (data) {
    var array = utils.parseToArray(data);
    console.log("Array: " + array);
    
    var initialPivot = utils.indexOfCenter(array);
    console.log("Initial Pivot: " + initialPivot);
    
    var sumLeft = utils.sumOf(array, 0, initialPivot-1);
    console.log("Initial sum left: " + sumLeft);
    var sumRight = utils.sumOf(array, initialPivot+1, array.length-1);
    console.log("Initial sum right: " + sumRight);
    
    var pivot = utils.findPivot(array, initialPivot, sumLeft, sumRight);
    
    if(pivot != -1){
        array = utils.highlightIndex(array, pivot);
        console.log("Pivot for the array " + array + " is located at index " + pivot + ".");
    }else{
        console.log("Array " + array + " does not have a pivot.")
    }
    
});