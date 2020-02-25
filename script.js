// Assignment Code
var generatebtn = document.getElementById("generateBtn");


var  generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var  numeric ="123467890";
var specialcharacters ="@$*!&^%#+?~`'";
var   none ="";
var characters = lowercase + uppercase + numeric + specialcharacters;



do{
  var length = prompt("how many caracters would you like?");
  if (length<8){
    alert("number too small");
  }
  else if (length>128){
    alert("number too big");
  }
}
while (length<8 || length>128);
console.log(length);

var SC=confirm("would you like to include special caraters?");
  if (SC===true){
    SC = specialcharacters;
  }
  else if(SC===false){
    SC = none;
  }
  console.log(SC);
  var numb=confirm("would you like to include numerics?");
  if (numb===true){
    numb = numeric;
  }
  else if(numb===false){
    numb=none;
  }
  console.log(numb);
  var lc=confirm("would you like to include lowercase?");
  if (lc===true){
   lc = lowercase;
  }
  else if(lc===false){
    lc = none;
  }
  console.log(lc);
  var uc=confirm("would you like to include uppercase?");
  if (uc===true){
    uc = uppercase;
  }
  else if(uc===false){
    uc = none;
  }
  console.log(uc);


  // var passwordText = document.querySelector("your secure password");
  

function writePassword() {
  let characters = SC + numb + lc + uc;
  console.log(characters)
   let password = "";
  for (var i = 0; i <= length - 1; i++){
    
    password = password + characters.charAt(Math.floor(Math.random()* Math.floor(characters.length)));
    
  }
  console.log('password', password);
 document.getElementById("password").innerHTML = password;



 
}

generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button



