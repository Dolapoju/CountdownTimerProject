var dueDate = new Date("Mar 30, 2024 11:00:00");
document.getElementById("due-date").innerHTML = dueDate.toDateString();
var countDownDate = dueDate.getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var timeDifference = countDownDate - now;
  var days1 = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins1 = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var secs1 = Math.floor((timeDifference % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days1;
  document.getElementById("hours").innerHTML = hours1;
  document.getElementById("mins").innerHTML = mins1;
  document.getElementById("secs").innerHTML = secs1;
  if (timeDifference < 0) {
    clearInterval(x);
    document.getElementById("expired").innerHTML = "THE GIVEAWAY HAS ENDED!!";
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
  }
}, 1000);
