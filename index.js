function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string = shout(string)
  return console.log(string)
}

function logWhisper(string){
  string = whisper(string);
  return console.log(string)
}

function sayHiToGrandma(string){
  if (string === "I love you, Grandma."){
    string = "I love you, too."
  } else if (string === string.toUpperCase) {
    string = "YES, INDEED."
  } else {
    string = "I can\'t hear you!"
  }
  return string
}