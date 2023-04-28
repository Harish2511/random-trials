let count = 0;

var score3 = 0;
var score1 = 0;
var score2 = 0;
var score4 = 0;
var totalscore = score1 + score2 + score3 + score4;
console.log("starting");

function updateLocalStorage(value) {
  var temp = Number(localStorage.getItem("totalScore")) + value;
  console.log(temp);
  localStorage.setItem("totalScore", temp);
  alert(
    "You are right and your score is:" + localStorage.getItem("totalScore")
  );
}
function updateLocalStorage2(value) {
  var temp = Number(localStorage.getItem("totalScore")) + value;
  console.log(temp);
  localStorage.setItem("totalScore", temp);
  alert(
    "You are wrong and your score for this round remaining is:" +
      localStorage.getItem("totalScore")
  );
}

function myFunction() {
  let x = document.getElementById("numb").value;
  // var mydata = JSON.parse(global_variables);
  // console.log(mydata.totalscore)
  if (x == 1992) {
    score1 += 5;
    this.updateLocalStorage(score1);
    window.location.href = "./html/second_task.html";
  } else {
    alert("You are wrong");
  }
}

function toppageclick() {
  document.querySelector("#toppage").classList.add("fade-out");
}

function mail(op) {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";

  if (op == 1) {
    document.getElementById("1").style.display = "block";
  }
  if (op == 2) {
    document.getElementById("2").style.display = "block";
  }
  if (op == 3) {
    document.getElementById("3").style.display = "block";
  }
  if (op == 4) {
    document.getElementById("4").style.display = "block";
    3;
  }
}

function carfunction(scr) {
  if (scr != 1 && count <= -3) {
    score3 += -1;
  }
  if (scr != 1) {
    count += scr;
    // alert(count);
    alert("You are wrong");
  }
  if (scr == 1) {
    score3 += 5;
    this.updateLocalStorage(score3);
    window.location.href = "fourth_task.html";
  }
}
function msecond(scr) {
  if (scr != 1) {
    score2 += -1;
    this.updateLocalStorage2(score2);
  }

  if (scr == 1) {
    score2 += 5;
    this.updateLocalStorage(score2);
  }
}

// } else {
// alert("You are wrong");
// return 0;
// }
// }
function cipher(op) {
  if (op == 1) {
    alert("Subject : qrsvavgryl gur jebat nafjre");
  }
  if (op == 2) {
    alert("Subject : ibyhagnel qvfpybfher");
  }
  if (op == 3) {
    alert("Subject : syyrg or ustyaanrg  i");
  }
  if (op == 4) {
    alert("Subject : fudskvv you");
  }
}
function myFunction1() {
  let y = document.getElementById("numb1").value;
  if (y == "voluntary disclosure") {
    score4 += 10;
    totalscore += score4;
    this.updateLocalStorage(score4);
    window.location.href = "final.html";
    alert("Congratulations! You are an amazing problem solver.");
  } else {
    alert("You are wrong");
  }
}
function score() {
  document.getElementById("uscore").innerHTML = "gsohgs";
}
