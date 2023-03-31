var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase=['a','b','c','d','e','e','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var passSymbols =["!","@","#","$","%"]
var passNum=["1","2","3","4","5","6","7","8","9","0"];

var numNeed="";
var passwordArray=[""];
var yourPassword="";
var password="";

var onclickBtn=document.querySelector("#button");
var passwordBox=document.querySelector("#password");


alert("hai")

 var feedBack = confirm("do you want to generate a password?")
  if(feedBack)
  {
      var pswLength = prompt ("length of password will be between 8 and 128, chose the least desired length")
       if(pswLength>=8&&pswLength<=128)
       {
         alert("generating password")
       }else
               {
                
                  alert("haven't met the criteria,should choose a length between 8 and 128 only")
                var nextChoice =  prompt ("length of password will be between 8 and 128, chose the least desired length")
                  if(nextChoice>=8&&nextChoice<=128)
                  {
                     nextChoice = pswLength;
                  }else
                  {
                     alert("invalid-will generate with desired safety with random length")
                  }
       
               }
               var numLength = prompt("Do you want numerics? how many Numerics should be in the password? You have " + pswLength + " characters left.")
               var storePssLength="";
                for(i=0;i<numLength;i++)
                  {
                 storePssLength = storePssLength+passNum[Math.floor(Math.random()*passNum.length)];
                  }
                   console.log("i am the value of length: " +numLength);
                   console.log(storePssLength);
                   passwordArray.push(storePssLength);
               
                   pswLength = pswLength - storePssLength.length;

   
      var passUpperChar= confirm("do you want UpperCAse?")
      if(passUpperChar)
         {
           var storeUc = prompt("how many Upper-case you want? You have " + pswLength + " characters left.")
           var storeUcAdd="";
              for(i=0;i<storeUc;i++)
               {         
                  storeUcAdd = storeUcAdd +upperCase[Math.floor(Math.random()*upperCase.length)];
               }
                  passwordArray.push(storeUcAdd);
                  pswLength = pswLength - storeUcAdd.length;
                  
         }else
              {
                 console.log("dont need UpperCase") 
              }
                 var passLowerChar= confirm("do you want LowerCAse?")

      if(passLowerChar)
         {  
            var storeLc = prompt("how many lower case you want? You have " + pswLength + " characters left.")
            var storeLcAdd="";
               for(i=0;i<storeLc;i++)
                {
                 storeLcAdd=storeLcAdd+lowerCase[Math.floor(Math.random()*lowerCase.length)];
               }
      
                console.log(storeLcAdd);
                 passwordArray.push(storeLcAdd);
                 pswLength = pswLength - storeLcAdd.length;
                 console.log(pswLength);

         }else
              {
               console.log("dont need lower case")
               }

         var passSymbol= confirm("do ypu want Symbols")
              if(passSymbol)
              {  
                 var symbol="";
                 for(i=0;i<pswLength;i++)
                {
                  symbol = symbol+passSymbols[Math.floor(Math.random()*passSymbols.length)]
               }
               passwordArray.push(symbol);

                }else
                 {
                   console.log("dont need symbols")
                 }
    
   }else
    {
    alert("thank you")
    }

    alert("click on generate password the get your password ");
  
console.log("i am passwordArray " +passwordArray);
console.log(pswLength);
var tada=[""];

tada = [storePssLength]+[storeUcAdd]+[storeLcAdd]+[symbol];
console.log(tada, "tada");
onclickBtn.addEventListener("click",function()
 {
 
    passwordBox.textContent = tada;
   // alert("your password is: " + tada)

});











