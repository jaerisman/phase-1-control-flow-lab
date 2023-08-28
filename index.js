function scuberGreetingForFeet(rideLength){
  let result;
  if (rideLength <= 400) {
    return 'This one is on me!'
  } 
  else if (rideLength <= 2000){
    return 'That will be twenty bucks.'
  }
  else if (rideLength <= 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (rideLength > 2500){
    return 'No can do.'
  }
  }

function ternaryCheckCity(cityName){
  let result;
  if (cityName === 'NYC'){
    return 'Ok, sounds good.'
  }
  else if (cityName !=='NYC'){
    return 'No go.'
  }
}

function switchOnCharmFromTip(tipAmount){
  let result;
  if (tipAmount === 'generous'){
    return 'Thank you so much.'
  }
  else if (tipAmount === 'not as generous'){
    return 'Thank you.'
  }
  return 'Bye.'
}