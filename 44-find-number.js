let numberInput=document.getElementById("num");
let startButton=document.querySelector(".btn-start");
let guessButton=document.querySelector(".btn-guess");
let resultp=document.querySelector(".result");

const createRandomNumber= (min,max)=>Math.floor(Math.random()*(max-min+1)+min);
console.log(createRandomNumber(1,100));
var randomNumber=createRandomNumber(1,100);
const startGame=()=>{
    startButton.style.display="none";
    console.log(randomNumber);
    guessButton.style.display="inline";
    numberInput.style.display="inline";
    resultp.innerHTML="";
}
const guessNumber=()=>{
    let num =Number(numberInput.value);
    if(num>=1 && num<=100){
        if(num>randomNumber) {
            resultp.innerHTML="Ufak Atta civcivler yesun";
        }else if(num<randomNumber){
            resultp.innerHTML="Çok Ufak Attin";
        }else{
            resultp.innerHTML="Tebrikler. İyi salladın. Sayı: "+randomNumber ;
            startButton.style.display="inline";
            guessButton.style.display="none";
            numberInput.style.display="none";
        }
        numberInput.value="";
        numberInput.focus();
    }else{
        resultp.innerHTML="Lütfen 1 ile 100 arasında bir sallayınız.";
    }
}