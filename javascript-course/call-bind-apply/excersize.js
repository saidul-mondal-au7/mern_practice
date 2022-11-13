const array = [1,2,3];
 
function getMaxNumber(arr){
  //code here  
  const maxNum =  Math.max.apply(null, arr)
  console.log(maxNum)
}
 
getMaxNumber(array) // should return 3