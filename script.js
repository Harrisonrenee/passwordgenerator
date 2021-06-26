let clipboard = document.getElementById = ('copyToClipboard')
let lengthTaker = document.getElementById = ('length')
let Uppercase = document.getElementById =('upperCase')
let Lowercase = document.getElementById =('lowerCase')
let Numbers = document.getElementById =('number')
let Symbols = document.getElementById =('symbols')
let generatePassword = document.getElementById =('generatepassword')
let textArea = document.getElementbyId = ('textarea')

// when someone click the generate password button
generatepassword.addEventListener('click',()=>{

let length = +lengthTaker.value;
let hasUpper = upperCase.checked; // it will give a true or false
let hasLower = lowerCase.checked; //it will give a true or false 
let hasNumber = number.checked; // it will give a true or false
let hasSymbols = symbols.checked; // it will give you a true or false

generate(hasUpper,hasLower,hasNumber,hasSymbols,length);

textArea.value = generate(Upper, Lower, Number, Symbols, length);

});

function generate( upper, lower, number, symbols,length)
{
    let password ='';
    let countType = upper + lower + number + symbols;
// this will filter out symbol if not available
    let arryType = [{upper},{lower}, {number}, {symbols}].filter(item=>Object.values(item)[0]);
} // user does not check any of the boxes
     if (countType === 0){
         return '';
        
         for(var i=0; i< length; i+= countType){
         let final = password[Math.floor(Math.random()* password.length)];
            arrType.forEach(type=>{
               // this syntax will take, upper, lower, number, symbols
                const generateFuncName= Object.keys(type)[0];
                password += generateFunc[generateFuncName]();
        })   
    }
    }
// password options choosen are held
let generateFunc = {
    upper : generateUpper,
    lower : generateLower,
    number : generateNumber,
    symbols : generateSymbols
}
// generate functions
 function generateUpper(){
     return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }
 function generateLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function generateNumber(){
    return Math.floor(Math.random()*10)
}
function generateSymbols(){
      let symbols = '!@#$%&*'
    return symbols[Math.floor(Math.random()* symbols.length)];
}
console.log(password);
    return password;


