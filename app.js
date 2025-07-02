let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newgamebtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turnO=true;
const winPattern =[
    [0,1,2],
     [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
  turnO=true;
  enableboxes();
  msgcontainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turnO){//player 1
        box.innerText="O";
        turnO=false;
      }else{//player 2
        box.innerText="X";
        turnO=true;
      }  
      box.disabled=true;//ek bar x ho gya to o na ho
      checkWinner();
    });
});
const disableboxes =()=>{
  for(let box of boxes){
  box.disabled=true;
}
};
const enableboxes =()=>{
  for(let box of boxes){
  box.disabled=false;
  box.innerText="";
}
};
const showwinner=(winner)=>{
msg.innerText=`The winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableboxes();
};
const checkWinner=()=>{
for(let pattern of winPattern){
    let pos1val=boxes[pattern[0]].innerText;
     let pos2val=boxes[pattern[1]].innerText;
     let pos3val=boxes[pattern[2]].innerText;
if(pos1val!=""&& pos2val!="" && pos3val !=""){
    if(pos1val==pos2val&& pos2val==pos3val){
        console.log("winner",pos1val);
        showwinner(pos1val);
    }
}
}
};
newgamebtn.addEventListener("click",resetGame);

resetbtn.addEventListener("click",resetGame);
