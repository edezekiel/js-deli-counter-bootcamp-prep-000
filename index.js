//var katzDeliLine = [];
function takeANumber(katzDeli, name){
var place = katzDeli.length + 1;
katzDeli.push(name);
return "Welcome, " + name + "." + ` You are number ${place} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length < 1) {
  return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine(katzDeli){
  if (katzDeli.length = 0) {
  return "There is nobody waiting to be served!";}

  else {
    var line = "The line is currently: ";
    var newLine = line;
    for (let i = 0; i < katzDeli.length; i++) {
      if (i === 1) {
      var newLine = line + `${i}. ${katzDeli[i]}`
      } else {
      var newLine = line + `, ${i}. ${katzDeli[i]}`}

  return newLine;
  }
}
}


  }
}
