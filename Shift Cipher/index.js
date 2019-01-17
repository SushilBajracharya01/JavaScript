const kVal={
    'A':{'value': 0},'B':{'value': 1},'C':{'value': 2},'D':{'value': 3},'E':{'value': 4},
    'F':{'value': 5},'G':{'value': 6},'H':{'value': 7},'I':{'value': 8},'J':{'value': 9 },
    'K':{'value': 10},'L':{'value': 11},'M':{'value': 12},'N':{'value': 13},'O':{'value': 14},
    'P':{'value': 15},'Q':{'value': 16},'R':{'value': 17},'S':{'value': 18},'T':{'value': 19},
    'U':{'value': 20},'V':{'value': 21},'W':{'value': 22},'X':{'value': 23},'Y':{'value': 24},
    'Z':{'value': 25}
};

const plainText_input = document.getElementById('plainText');
var keyValue_input=document.getElementById('encriptionKey');
var encript_btn=document.getElementById('encriptIt');
var cipherText_span = document.getElementById('cipherText');

const encripted_input = document.getElementById('encriptedText');
var decriptKey_input=document.getElementById('decriptionKey');
var decript_btn=document.getElementById('decriptIt');
var decript_span = document.getElementById('decriptedText');


encript_btn.addEventListener('click', Encripter);
decript_btn.addEventListener('click', Decripter);


function Decripter (){
    decript_span.innerHTML = '';
    var decriptedText = '';
    if(decriptKey_input.value){
        var encriptedText = encripted_input.value.toUpperCase();
        for(i=0;i<encriptedText.length;i++){
            decriptedText = decriptedText + Decode(encriptedText[i]);
        }
//        decript_span.innerHTML = decriptedText;
        
        printLetterByLetter("decriptedText", decriptedText, 100);
    }
    else{
//        decript_span.innerHTML = "Please Enter a key!";
        printLetterByLetter("decriptedText", "Please Enter a key!", 100);

    }
}

function Decode(Letter){
    if(Letter === '+'){
        return(' ');
    }
    else if(/[A-Z]/.test(Letter)){
        var Num = parseInt(kVal[Letter].value);
        var key = parseInt(decriptKey_input.value);
        
//        if(Num < key){
//            Num = 26 + Num - key;
//        }
//        else{
//            Num = (Num - key)%26   
//        }
        
        Num = Num - key;
        Num = (Num % 26 + 26)% 26;
        return (Object.keys(kVal)[Num]);
    }
    else{
        return ('*');
    }
}


function Encripter (){
    cipherText_span.innerHTML = '';
    var cipherText = '';

    console.log(cipherText_span.value);
    if(keyValue_input.value){
        var plainText = plainText_input.value.toUpperCase();
        for(i=0;i<plainText.length;i++){
            cipherText = cipherText + Cipher(plainText[i]) ;
        }
//        cipherText_span.innerHTML = cipherText;
        printLetterByLetter("cipherText", cipherText, 100);

    }
    else{
//        cipherText_span.innerHTML = "Please Enter a key!";
        printLetterByLetter("cipherText", "Please Enter a key!", 100);

    }
}

function Cipher(Letter){
    if(Letter === ' '){
        return('+');
    }
    if(/[A-Z]/.test(Letter)){
        var Num = parseInt(kVal[Letter].value);
        var key = parseInt(keyValue_input.value);

        Num = (Num + key)%26
        return (Object.keys(kVal)[Num]);
    }
    else{
        return("*");
    }
}



function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}
