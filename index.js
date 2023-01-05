var superman = {
  name: "superman",
  power: "flight",
  costumeColor: "blue",
  strength: 10000,
  stealth: 0,
  intelligence: 100,
}


var batman = {
  name: "batman",
  power: "martial arts",
  costumeColor: "black",
  strength: 100,
  stealth: 100,
  intelligence: 1000,
}

var superhero = [superman, batman]


console.log(superman, batman)

for(var i=0;i<superhero.length;i++){
  console.log(superhero[i].name, superhero[i].costumeColor)
}