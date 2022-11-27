const generateBtn=document.getElementById("generateBtn");
const screen1=document.getElementById("screen1");
const screenValue1='';
generateBtn.addEventListener('click', function () {
   var min = 1000;
   var max = 9000;
// var num = Math.floor(Math.random() * min)) + max;
    const randomNumber=Math.floor((Math.random() * max)) + min;
    //console.log(typeof randomNumber);
    screen1.value=randomNumber;
    document.getElementById("matched").style.display="none";
    document.getElementById("unMatched").style.display="none";
      
})




//screen     2
let screen2 = document.getElementById('screen2');
let buttons = document.querySelectorAll('.button');
let screenValue2='';
for (item of buttons) {
    item.addEventListener('click', (e)=> {
      let buttonText = e.target.innerText;
       // console.log(buttonText);

       if (buttonText=='C') {
        screenValue2='';
       // console.log(typeof screenValue2);
        screen2.value=screenValue2;
       }
       else if (buttonText=='<') {
        screenValue2=screen2.value.slice(0,-1);
        //console.log(typeof screenValue2);

        screen2.value=screenValue2;
       }
       else
       {
        screenValue2 +=buttonText;

        screen2.value=screenValue2;

       }

      }
      )}









      
      console.log(typeof screen2ValueInNumber);

      const submitButton=document.getElementById("submitButton");
      submitButton.addEventListener('click', function () {
      const screenText1=document.getElementById("screen1").value;
      
      const screenText2=document.getElementById("screen2").value;
     
      const screenText1ToNumber=parseFloat(screenText1);
      const screenText2ToNumber=parseFloat(screenText2);
      console.log(typeof screenText1ToNumber);
      console.log(typeof screenText2ToNumber);
      if (screenText1ToNumber==screenText2ToNumber) {
         document.getElementById("matched").style.display="block";
         document.getElementById("unMatched").style.display="none";
         
      }
      else
      {
         
         document.getElementById("unMatched").style.display="block";
         let tryLeft=document.getElementById("try-left").innerText;
         
         let tryLeftToNumber=parseFloat(tryLeft);
         
          tryLeftToNumber=tryLeftToNumber-1;
          document.getElementById("try-left").innerText=tryLeftToNumber;
          if (tryLeftToNumber==0) {
            alert("Ooops...your chance is over");
          }
          
      }


        
      })