//Current Time FUnction 
let outside = "AM"
function current_time() {
  let a = new Date()
  let h = a.getHours()
  let m = a.getMinutes()
  let s = a.getSeconds()


  if (h == 0) {
    h == 12 
  }
  if (h > 12) { //for formating time to 24 Hrs -->to 12 Hrs
    h = h - 12
    outside = "PM"
  }

  h = (h < 10) ? "0" + h : h //adding 0 for 1 to 9 hrs
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s

  //let time = h + " : " + m + " : " + s
  let hour = h
  let min = m
  let sec = s
  let ses = outside

  document.getElementById("h").innerHTML = hour+" Hour"
  document.getElementById("m").innerHTML = min+"  Min"
  document.getElementById("s").innerHTML = sec+"  Sec"
  document.getElementById("ses").innerHTML = ses

  if (ses == "AM") {
    document.getElementById("ses").style.backgroundColor = "rgb(77, 195, 255)"
  }
  if (ses == "PM") {
    document.getElementById("ses").style.backgroundColor = "rgb(255, 153, 51)"
  }
  let settime = setTimeout(function() {
    current_time()
  }, 1000)
}
current_time()





