function dwarfRollCall(dwarves) {
  var rollCall = "";
  for (let i = 0; i < dwarves.length; i++){
    rollCall += `${i + 1}. ${dwarves[i]}`
  }
  return rollCall;
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
  for (let i = 0; i < planeteerCalls.length; i++){
      calls.push(planeteerCalls[i].toUpperCase() + '!')
  return calls;
  }
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++){
    if (foods[i] == 'cheddar'){
      return "cheddar";
    }
    else if (foods[i] == 'gouda'){
      return "gouda";
    }
    else if (foods[i] == 'camembert'){
      return "camembert";
    }
    else if (food[i] == 'Swiss'){
      return "Swiss";
    }
  }
  return 'no cheese!'
}

findTheCheese(['apple', 'gouda', 'banana', 'cheddar'])

function wordsWithB(words) {
  var wordsB = [];
  for (let i =0; i < words.length; i++){
    if(words[i].startsWith('b')) { // 'ashley' == 'b'
      wordsB.push(words[i]);
    }
  }
  return wordsB;
}

'ashley'.startsWith('a') //true
'ashley'.startsWith('c') //false


wordsWithB(['ashley', 'rishi', 'brian']) // ['brian']
wordsWithB(['bob', 'ashley', 'brian']) // ['bob', 'brian']
wordsWithB(['ashley', 'rishi', 'charles']) // []