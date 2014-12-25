var utils = require("./lib/utils.js");

console.log('Gumroad Test 1 - Find pivot of array');
console.log('------------------------------------');
console.log('Please enter comma seperated numeric array values e.g. 1,4,6,3,2:');
process.stdin.resume();
process.stdin.setEncoding('utf8');

//Start processing on receiving user input
process.stdin.on('data', function (data) {
    //Parse user input and display as array
    var array = utils.parseToArray(data);
    
    //If array is not undefined, then go ahead with processing
    if (typeof array != 'undefined'){
        console.log("Array: " + array);
        
        //Find center of the array and use that as the initial pivot
        var initialPivot = utils.indexOfCenter(array);
        
        //Using the initial pivot, find sums of left and right side of array
        var sumLeft = utils.sumOf(array, 0, initialPivot-1);
        var sumRight = utils.sumOf(array, initialPivot+1, array.length-1);
        
        //Using the initial pivot, sum of left side and sum of right side, find pivot
        var pivot = utils.findPivot(array, initialPivot, sumLeft, sumRight);
        
        //Display result depending on whether pivot was found or not
        //based on pivot's value being -1 when no pivot exists for the array
        if(pivot != -1){
            array = utils.highlightIndex(array, pivot);
            console.log("Pivot for the array " + array + " is located at index " + pivot + ".");
        }else{
            console.log("Array " + array + " does not have a pivot.")
        }
    }else{ //else, display error message
        console.log('Input is not a numeric array.');    
    }
    
    console.log();
    
    //Prompt for more user input
    console.log('Please enter comma seperated numeric array values e.g. 1,4,6,3,2:');

});