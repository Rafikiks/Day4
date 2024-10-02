function getHousesPrototype() {
  const housesPrototype = new Map([
    ["Apartment 75008", 90],
    ["Apartment 94300", 105],
    ["Apartment 92300", 140],
    ["Apartment 75015", 65]
  ]);
  
  return housesPrototype;
}

console.log(getHousesPrototype());

// Fonction qui retourne une Map contenant les noms des appartements comme clés 
// et leurs surfaces en mètres carrés comme valeurs.
