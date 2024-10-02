function fillbus(peopleAtBusStops,busSeats ){
	let totalBus = 0 ;
  for (let i = 0;i < peopleAtBusStops .length; i++){
  
  totalBus += peopleAtBusStops[i];
  		if (totalBus>= busSeats){
      		return i;
      }
  }
  return - 1;
}


