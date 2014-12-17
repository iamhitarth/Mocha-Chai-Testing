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
}

exports.sumOf = function(array, begin, end){
  var sum = 0;
  
  for(var i = begin; i < end+1; i++){
    sum += array[i];
  }
  
  return sum;
}