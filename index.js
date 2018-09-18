//Challenge 1 -- 
// create a function (takeANumber) that accepts two parameters (the current line of people and the new person's name); lets call them line and name
// should add a new person's name to the line
// should also be able to tell name their position in line
// return "Welcome, Ada. You are number 1 in line."
// array method push() - adds an item to the end of a list then return the new array length

function takeANumber(line, name){
  
line.push(name);
  
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}



//the function should accept two parameters; lets call it line and num
// num does not exist yet 
//should be able to add person num to line
//not concerned with position in line
//should return welcome you are num ticket.

//start at 1 
// manipulate so when next person comes in they are at 2 
// doesn't need a loop 
// loop iterates var x = num 
// loop x < line
// loop x++


var num = 0;

function takeANumberTwo (line, num) {
  num++;
  line.push(num);
  return `Welcome you are ticket ${num}.`;
}

//Challenege 2 -- 
//create a function (nowServing) that accepts one parameter (the current line of people); lets call it lineNumber
//function should first check if the line is empty
//IF empty return "There is nobody waiting to be served!"
//ELSE the function should return the first person in line and then remove that individual from the line 
// array method shift() - returns the first item of the array then removes that item

function nowServing(lineNumber) {
  if(lineNumber.length === 0) {
    return 'There is nobody waiting to be served!';
  }else {
    return `Currently serving ${lineNumber.shift()}.`;
  }
}

//Challenge 3 --
// create a function (currentLine) that accepts one parameter (the current line of people); lets call it line
//function should first check if the line is empty
//IF empty return "The line is currently empty."
//ELSE the function should return the current line as a string -- "The line is currently: 1. Ada, 2. Grace"

// would need a loop to check the array and pull each name and line position 
// would need a way to structure array elements by 1. Ada, 2. Grace...etc
// would need a way to make array elements into a string sentence 
// array method join() - joins all elements of an array into a string and returns the string.

function currentLine(line) {
  
  if(line.length === 0){
    return 'The line is currently empty.';
  }
  var arr = [];
  for(var i = 0; i< line.length; i++) {
    arr.push(` ${i + 1}. ${line[i]}`);
  }
  return `The line is currently:${arr.join(',')}`;
}
