const result = ["CHANGE", "this", "array", "BY", "ThE", "RESULT", "oF", "youR", "FUNCTION", "TO", "test", "IT", "OUT"];

function capitalize(words) {
  const capitalizeWords = []; 
  words.forEach(function(word) {
    capitalizeWords.push(word.toUpperCase()); 
  });
  return capitalizeWords;
}


// La fonction "capitalize" prend un tableau de mots et les transforme en majuscules 
// en utilisant "forEach" et "toUpperCase()". Elle retourne ensuite un nouveau tableau 
// avec tous les mots en majuscules.

