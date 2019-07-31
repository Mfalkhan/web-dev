console.log("Guess a number between 1 - 1000");

var guess;
var h = 1000;
var l = 1;

alert("are you ready");
while(true)
{
   guess = Math.floor((h+l)/2);
   var ans = Number(prompt("is your guess " + guess + " Type 1 : Yes or 2 : No"));
   if (ans === 1)
   {
     alert("your guess is "+guess);
     break;
   }
   else {
           var ch = prompt("1 : Higher  2: Lower ");
           ch = Number(ch);
           if ( ch === 1)
           {
             l = guess;
           }
           else
             {
               h = guess;
             }
        }
   }
