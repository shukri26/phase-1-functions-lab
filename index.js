// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  let loc = blocks - 42
  if(blocks < 42){
      let loc = 42 - blocks
      return loc;
  }
  return loc;
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(feet){
  let distance = feet - 42
  if(feet < 42){
      let distance = 42 - feet
      return distance * 264;
  }
  return distance * 264;
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination){
  let travelled = destination - start 
  if(destination < start){
      let travelled = start - destination
      return travelled * 264;
  }
  return travelled * 264;
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination){
  let fare = distanceTravelledInFeet(start, destination);
  if(fare < 400){
      return 0;
  }else if(fare >= 400 && fare <= 2000){
      return (fare - 400) * 0.02;
  }
  else if(fare >= 2000 && fare <= 2500){
      return 25;
  }else{
      return 'cannot travel that far';
  }


}