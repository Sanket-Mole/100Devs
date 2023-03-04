document.querySelector('#rock').addEventListener('click', rock)
document.querySelector('#paper').addEventListener('click', paper)
document.querySelector('#scissors').addEventListener('click', scissors)

let ans;
let yourScore=0;
let compScore=0;

function randomComp(){
    out =  Math.floor(Math.random() * (3 - 0) + 0)

    if(out == 0) {
        out = 'rock'
    }
    else if(out == 1){
        out = 'paper'
    }
    else if(out == 2){
        out = 'scissors'
    }
    return out
}

function rock(){
    let out = randomComp()
    if(out == 'rock'){
        ans="Tie"
    }
    else if(out == 'paper'){
        ans = "You Lose"
    }
    else {
        ans = "You Win"
    }
    document.querySelector("#here").innerText = ans
    if(ans == 'You Win'){
        yourScore++
    }
    else if(ans == "You Lose"){
        yourScore--
    }
    document.querySelector('#score').innerText = yourScore
    
}

function paper(){
    let out = randomComp()
    if(out == 'rock') {
        ans = 'You Win'
    }
    else if(out == 'paper') {
        ans = 'Tie'
    }
    else {
        ans = 'You Lose'
    }
    document.querySelector("#here").innerText = ans
    if(ans == 'You Win'){
        yourScore++
    }
    else if(ans == "You Lose"){
        yourScore--
    }
    document.querySelector('#score').innerText = yourScore
}

function scissors(){
    let out = randomComp()
    if(out == 'rock'){
        ans = "You Lose"
    }
    else if(out == 'paper'){
        ans = "You Win"
    }
    else {
        ans = "Tie"
    }
    document.querySelector("#here").innerText = ans
    if(ans == 'You Win'){
        yourScore++
    }
    else if(ans == "You Lose"){
        yourScore--
    }
    document.querySelector('#score').innerText = yourScore
}


