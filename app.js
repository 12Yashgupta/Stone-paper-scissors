let stn=document.querySelector("#stone");
let pap=document.querySelector("#paper");
let sci=document.querySelector("#scissors");
let comp=["rock","paper","scissor"];
let btn=document.querySelector("#btn");
let userScore=document.querySelector("#userScore");
let compScore=document.querySelector("#compScore");
let user_num=0;
let comp_num=0;
function computerTurn(user)
{
    let ansCollect=[];//User,computer,draw
    let turn=Math.floor(Math.random()*2);
    ansCollect.push(user);
    ansCollect.push(comp[turn]);
    if(user==comp[turn])
   {
    ansCollect.push("Draw");
    return ansCollect;
 }
    else if((user=="paper"&&comp[turn]=="rock")||(user=="scissor"&&comp[turn]=="paper")||(user=="rock"&&comp[turn]=="scissor"))
   { 
    ansCollect.push("user");
    return ansCollect;
   }
    else
    {
        ansCollect.push("comp");
    return ansCollect;
    }
}
function scoreInc(winner)
{
         if(winner[2]=="user")    
         {

            userScore.innerText=user_num+1;
            user_num++;
            btn.innerText=`You won! ${winner[0]} beats ${winner[1]}`;
            btn.style.color="white";
            btn.style.backgroundColor="green";
         } 
         else if(winner[2]=="comp")
         {

            compScore.innerText=comp_num+1;
            comp_num++;
            btn.innerText=`You lost. ${winner[1]} beats ${winner[0]}`;
            btn.style.color="white";
            btn.style.backgroundColor="red";
         }
         else
         {
            btn.innerText="It was Draw.";
            btn.style.color="white";
            btn.style.backgroundColor="black";
         }
}
stn.addEventListener("click",function(){
   let winner=computerTurn("rock");
   console.log(winner);
    scoreInc(winner);
});
pap.addEventListener("click",function(){
    let winner=computerTurn("paper");
    console.log(winner);
    scoreInc(winner);
});
sci.addEventListener("click",function(){
    let winner=computerTurn("scissor");
    console.log(winner);
    scoreInc(winner);
});