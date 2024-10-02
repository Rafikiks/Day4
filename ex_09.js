function addHousing(housingList, newHouse, quantity) {
  if (housingList.has(newHouse)) {
    housingList.set(newHouse, housingList.get(newHouse) + quantity);
  } else {
    housingList.set(newHouse, quantity);
  }
}

let housingList = new Map();
addHousing(housingList, "Flat", 2);
addHousing(housingList, "Log", 3);
addHousing(housingList, "Flat", 3);
addHousing(housingList, "Hutch", 2);
displayResult(housingList);

// Fonction qui ajoute ou met à jour une maison (newHouse) dans la Map housingList
// avec sa quantité (quantity). Si la maison existe déjà, la quantité est augmentée.
