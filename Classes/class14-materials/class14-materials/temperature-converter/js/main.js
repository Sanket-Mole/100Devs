//Write your pseduo code first! 
/* 
1. take input
2. convert using formula
3. display output
*/

document.querySelector("#press").addEventListener('click' , convert)


function convert(){
    let inp = document.querySelector("#input").value
    let res = (inp * 9/5) +32;
    document.querySelector("#here").innerText = res
}
