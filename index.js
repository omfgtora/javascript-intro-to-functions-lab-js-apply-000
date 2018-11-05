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
  
}