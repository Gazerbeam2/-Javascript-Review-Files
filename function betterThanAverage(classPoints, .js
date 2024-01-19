function betterThanAverage(classPoints, yourPoints) {
    //Class Points are the array
    //Push your points to the end of the array
    //Calculate the Sum of the Array and the divide it by the length of the array
    //Write a conditional that checks if the your point is greater than the the average and then return True if better else false.
    let totalArray = classPoints.push(yourPoints);
    let total = 0;

    for(i = 0; i < totalArray.length; i++){
       total += totalArray[i];

    }

    let arrayAvg = total / totalArray.length;

    console.log(arrayAvg);

    //if(yourPoints > arrayAvg){
      //return true
    //}else{
     // return false
    //}

  }

  betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)
  
  //function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  //var classAvg = 0;
  //for (var i = 0; i < classPoints.length; i++){
   // classAvg += classPoints[i]; 
 // }
  //classAvg = classAvg/classPoints.length; 
  //return yourPoints > classAvg;
//}
