function findHousing(housingTofind, housingList){
let index = 0
while (index < housingList.length){
	if (housingList[index].toLowerCase() === housingTofind.toLowerCase()){
  return [index , housingList[index]];
  }
  index++;
}
return null;
}
