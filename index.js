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
  var currentLine =     "The line is currently: ";
  
  if (katzDeli.length = 0) {
  return "There is nobody waiting to be served!";}
  else {return
    for (let i = 0, i < katzDeli.length, i++) {
      if (i === 1) {
        currentline.push(['${i}. ${katzDeli[i]}'])
      }
      else {currentline.push([', ${i}. ${katzDeli[i]}'])
}
}
  


  }
}

