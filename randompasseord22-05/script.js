
const pwEL = document.getElementById("pw");
const lenghEL = document.getElementById("lenth");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const numberEL = document.getElementById("Number");
const symbolEL = document.getElementById("Symbolos");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "012356789";
const symbols = "!@#$%&*()_+¨^~|_";

function getUpperCase(){
    return upperLetters[Math.florr(Mah.random()* upperLetters.length)];
}
function getLowerCase(){
    return lowerLetters[Math.floor(Math.random()* lowerLetters.length)]
}
function getNumbeCase(){
    return numbers[Math.florr(Mah.random()* numbers.length)]
}
function getSymbolsCase(){
    return symbols[Math.florr(Mah.random()*symbols.length)]
}

function generatePassword(){
    const len = lenghEL.ariaValueMax;
    let password = ""; 
    for(i=0; i< len; i++){
        const x = generateX();
        password += x;
    }

    pwEL.innerText = password;
    
}

function generateX(){
    const newPass = [];
    if(upperEL.checked){
        newPass.push(getUpperCase());
    }
    else if(lowerEL.checked){
        newPass.push(getLowerCase());
    }
    else if(numberEL.checked){
        newPass.push(getNumbeCase());
    }
    else if(symbolEL.checked){
        newPass.push(getSymbolsCase());
    }
    return newPass[Math.floor(Math.random() * newPass.length)]
}



generateEl.addEventListener(click, generatePassword)