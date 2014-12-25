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
  
  for(var i = begin; i < end+1; i++){
    sum += array[i];
  }
  
  return sum;
};

exports.findPivot = function(array, initialPivot, sumLeft, sumRight){
  var pivot = initialPivot;
  var prevPivot = 0;
  
  while(sumLeft != sumRight && (pivot != 0 || pivot != array.length)){
    
    if(sumLeft > sumRight){
      sumRight = sumRight + array[pivot];
      pivot--;
      if(pivot == prevPivot) { 
        pivot = -1;
        break; 
      }
      prevPivot = pivot+1;
      sumLeft = sumLeft - array[pivot];
    }else{
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
  array[index] = "[" + array[index] + "]";
  return array;
};