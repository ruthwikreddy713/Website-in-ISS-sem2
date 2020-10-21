
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});   
if (typeof Storage !== "undefined") {
    document.getElementById("result").innerHTML =
      "You've been here  " +
      localStorage.visitcount +
      " time(s)";
    localStorage.visitcount = Number(localStorage.visitcount) + 1;
}
console.log("localstorage visit count now: " + localStorage.visitcount);