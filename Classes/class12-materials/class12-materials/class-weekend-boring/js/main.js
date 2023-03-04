document.querySelector('#check').addEventListener('click', check)

function check() {
  let ans;

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if(day === 'tuesday' || day === 'thursday'){
    ans = "Classday"
    document.querySelector('#placeToSee').innerHTML = ans
  }
  else if(day === 'saturday' || day === 'sunday'){
    ans = ""
    document.querySelector("#placeToSee").innerHTML = ans
  }
  else{
    ans = "Booooring"
    document.querySelector("#placeToSee").innerHTML = ans
  }

}
