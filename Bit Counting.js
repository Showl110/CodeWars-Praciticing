var countBits = function(n) {
  // Program Me
  let counter = 0;
  let binaryNum = n.toString(2);
  let numArray = binaryNum.split('');
  for (let i = 0; numArray.length > i; i++){
    if(numArray[i] == 1){
      counter++
    } 
  }
  return counter;
};
