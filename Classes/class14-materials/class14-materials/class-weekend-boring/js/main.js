//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

let ans;

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    ans = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
    ans = "Its The Weekend"
  }else{
    ans = "BORING"
  }
  document.querySelector('#placeToSee').innerText = ans;
}
