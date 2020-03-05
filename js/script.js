var HOURHAND = document.querySelector("#hour");
var MINUTEHAND = document.querySelector("#minute");
var SECONDHAND = document.querySelector("#second");

function movearms() {
  var now = new Date(),
    hr = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    tick = 360 / 60; //angle of 1 tick

  var secondArmPosition = tick * sec,
    minuteArmPosition = tick * min + (sec / 60) * tick,
    hourArmPosition = tick * 5 * hr + (min / 60) * tick * 5;

  var deltaSec = (360 / 60) * sec, //angle moved per second
    deltaMin = (360 / 60) * min, // angle moved per minute
    deltaHr = (360 / 60) * hr; // anle moved per hour

  var HOURHAND = document.querySelector("#hour"),
    MINUTEHAND = document.querySelector("#minute"),
    SECONDHAND = document.querySelector("#second");

  function update() {
    secondArmPosition += tick; // second arm moves 6/60 deg every second
    minuteArmPosition += tick / 60; // minte arem moves extra 6/60 deg every minute
    hourArmPosition += tick / 60 / 60; // hour arm moves extra 6/60/60 deg every every hour

    SECONDHAND.getElementsByClassName.transform =
      "rotate(" + secondArmPosition + "deg)";
    HOURHAND.getElementsByClassName.transform =
      "rotate(" + minuteArmPosition + "deg)";
    MINUTEHAND.getElementsByClassName.transform =
      "rotate(" + minuteArmPosition + "deg)";
  }
  update();
  setInterval(update, 1000);
}
function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
ready(movearms);
