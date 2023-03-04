// *Variables*
// Create a variable and console log the value

let one = 100;
console.log(one);

// Create a variable, add 10 to it, and alert the value

let two = 50;
two = two + 10;
alert(two);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtracts(num1,num2,num3,num4){
    let ans = num1 - num2 - num3 - num4;
    alert(ans);
}
subtracts(50,20,10,5);

// Create a function that divides one number by another and returns the remainder

function divides(num1,num2){
    return num1 / num2;
}
console.log(divides(40,20))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function adds(num1,num2){
    let sum = num1+num2
    if(sum>50){
        alert("Jumanji")
    }
}
adds(30,30)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplys(num1,num2,num3){
    let result = num1 * num2 * num3;
    if(result % 3 ==0){
        alert("ZEBRA");
    }
}
multiplys(3,5,10);