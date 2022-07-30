
let dis=document.getElementById('box');
function pratyush(){
    const age =prompt("enter you age");
    if(age>10){
       var x=prompt("20-20+3");
          if(x!=3){
            alert("you are lie!!!!!!");
          }
         else{
             document.write("your computer is on")}
              }
	else{
	alert("you are under age")
    }
  
}
let operation=document.getElementById('btn');
operation.addEventListener("click", pratyush, false);