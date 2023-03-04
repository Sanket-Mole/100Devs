//Write your pseduo code first! 

document.querySelector('#convert').addEventListener('click',convert)

function convert(){
//  1. Take the input
    let input = document.querySelector('#input').value    
//  2. use conversion formula
    let ans = (input * 9/5) + 32
//  3. display the output result
    document.querySelector('#result').innerText = ans
}


