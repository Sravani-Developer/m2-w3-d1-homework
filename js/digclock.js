document.addEventListener('DOMContentLoaded', function () {
 
  function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;

    if (hr === 12) ampm = "PM";
    else if (hr > 12) { hr -= 12; ampm = "PM"; }
    else ampm = "AM";

    var time = hr + ":" + min + ":" + sec + " " + ampm;
    var el = document.getElementById("clock");
    if (el) el.innerText = time;
  }
  currentTime();
  setInterval(currentTime, 1000);


  function getUSZone() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (tz.includes("Los_Angeles") || tz.includes("Tijuana") || tz.includes("Vancouver")) return "PT";
      if (tz.includes("Denver") || tz.includes("Edmonton") || tz.includes("Phoenix"))   return "MT";
      if (tz.includes("Chicago") || tz.includes("Winnipeg"))                              return "CT";
      if (tz.includes("New_York") || tz.includes("Toronto"))                              return "ET";
    } catch (_) {}
    var off = new Date().getTimezoneOffset();
    if (off === 480 || off === 420) return "PT";
    if (off === 420 || off === 360) return "MT";
    if (off === 360 || off === 300) return "CT";
    if (off === 300 || off === 240) return "ET";
    return "";
  }

  (function attachZone(){
    var clockEl = document.getElementById("clock");
    if (!clockEl) return;
    var tzEl = document.getElementById("tz");
    if (!tzEl) {
      tzEl = document.createElement("span");
      tzEl.id = "tz";
      tzEl.style.marginLeft = "6px";
      tzEl.style.color = "#125688";
      tzEl.style.fontWeight = "600";
      clockEl.insertAdjacentText("afterend", " ");
      clockEl.insertAdjacentElement("afterend", tzEl);
    }
    tzEl.textContent = getUSZone();
  })();
});