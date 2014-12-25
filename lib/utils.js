exports = module.exports = {};

exports.parseToArray = function(args){
  var array = args.split(',');

  //Convert strings to base 10 integers
  for (var num in array) {
    array[num] = parseInt(array[num], 10);
  }

  return array;
};

exports.indexOfCenter = function(array){
  var center = 0;
  
  //For even numbered arrays, return index of element just before center
  if(array.length%2 === 0){
    center = ((array.length/2)-1);
  }else{
    center = ((array.length/2)-0.5);
  }

  return center;
};

exports.sumOf = function(array, begin, end){
  var sum = 0;
  
  //Loop through array while adding each value to sum
  for(var i = begin; i < end+1; i++){
    sum += array[i];
  }
  
  return sum;
};

exports.findPivot = function(array, initialPivot, sumLeft, sumRight){
  var pivot = initialPivot;
  var prevPivot = 0;
  
  //Sum of left side does not equal right side and pivot is not 0 or length of array
  while(sumLeft != sumRight && (pivot != 0 || pivot != array.length)){
    
    //If sum of left side is greater than right side, 
    //shift pivot to the left and recalculate sum of left and right sides 
    if(sumLeft > sumRight){
      sumRight = sumRight + array[pivot];
      
      pivot--;
      
      if(pivot == prevPivot) { 
        pivot = -1;
        break; 
      }
      
      prevPivot = pivot+1;
      sumLeft = sumLeft - array[pivot];
      
    }else{  //sum of right side is greater than left so shift pivot to right and recalculate
      sumLeft = sumLeft + array[pivot];
      
      pivot++;
      
      if(pivot == prevPivot) { 
        pivot = -1;
        break; 
      }
      
      prevPivot = pivot-1;
      sumRight = sumRight - array[pivot];
      
    }
    
  }
  
  return pivot;
};

exports.highlightIndex = function(array, index){
  //Take value from given index in array and highlight it by adding
  //square brackets around it
  array[index] = "[" + array[index] + "]";
  return array;
};