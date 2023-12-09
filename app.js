let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let user1 = document.querySelector(".user1");
let user2 = document.querySelector(".user2");
let msg = document.querySelector("p");

let usr=[];
user1.addEventListener("click", ()=>{
    usr.push(prompt("Enter 1st user !")); 
    user1.disabled = true;
    console.log(usr[0])
});
user2.addEventListener("click", ()=>{
    usr.push(prompt("Enter 2nd user !"));
    user2.disabled = true;
    console.log(usr[1])
});


let user = [user1,user2];
let  turn = true;

const winners = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let count=0;

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turn){
        box.innerText="O";
        box.style.color="#780000";
        turn = false;
    }else{
        box.innerText="X";
        box.style.color="#003049";
        turn = true;
    }
    box.disabled = true; 
    count++;
    checkWinner(); 
    })  
});

let win = false;
const checkWinner = ()=>{
    for(let winner of winners){
        let btn1 = boxes[winner[0]].innerText;
        let btn2 = boxes[winner[1]].innerText;
        let btn3 = boxes[winner[2]].innerText;
        if(btn1!="" && btn2!="" && btn3!=""){
            if(btn1===btn2 && btn2===btn3){
                if(turn=true){
                    msg.innerText=`Winner is ${usr[0]}`;
                    win = true;
                    disabled();
                }                
                else{
                    msg.innerText=`Winner is ${usr[1]}`;
                    win = true;
                    disabled();
                }
            }
            else{
                if(count==9 && win==false){
                    msg.innerText="Oops! It is Draw. Try again";
                } 
            }
        }
    }
}

let disabled = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
reset.addEventListener("click", ()=>{
    location.reload();
});





//You can ignore it ...


// For Text Effect - copied from <Neon text flicker glow>
const target = window.document.getElementsByTagName('h1')[0]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);