let choices = ["r","p","s"]

let userwin = 0
let userdraw = 0
let userloss = 0

for (let i = 0;i<10;i++){
    let uservar = prompt("Type r, p or s for rock paper or scissors")
    let randvar = choices[(Math.random()*choices.length) | 0]
    if(uservar===randvar){
        alert("You Drew")
        userdraw = (userdraw+1)
    } else if ((uservar==="r"&&randvar==="s")||(uservar==="s"&&randvar==="p")||(uservar==="p"&&randvar==="r")){
        alert("You Won")
        userwin = userwin + 1
    } else {
        alert("You Lost")
        userloss = userloss+1}
    }

alert("User Wins = "+userwin+" User Draws = "+userdraw+" User Losses = "+userloss)
