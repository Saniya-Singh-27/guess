let cnum = Math.floor(Math.random() * 100) + 1;
let attempt=0;
let attemptData = document.getElementById("Attempt");
let userinp=document.getElementById("inp");
let subBtn= document.getElementById("btn");
let resBtn= document.getElementById("resBtn");
let message = document.getElementById("msg");

function check(){
         let usernum=parseInt(userinp.value);
    if(cnum==usernum){
        message.innerText="Congratulations! You have guessed the number";
        message.style.color="green";
    }
    else if(cnum>usernum){
        message.innerText="Your guess was too low!";
        message.style.color="red";
        
    }
    else{
        message.innerText="Your guess was too high!";
        message.style.color="red";
        
    }
    attempt++;
    attemptData.innerHTML=attempt;
    setTimeout(()=>{
        userinp.value="";
        message.innerHTML="";
    },1000);
}
function restart(){
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt=0;
    
}
subBtn.addEventListener("click",check);
resBtn.addEventListener("click",restart);