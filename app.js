const p = document.createElement("p");
const date = new Date();
var h = date.getHours();
var m = date.getMinutes;
var s = date.getSeconds;
var time = date.toLocaleTimeString();
p.innerHTML = time;
document.getElementById("dynamictime").append(p);
function greet() {
    if (h > 15) {
        document.getElementById("greeting").innerHTML = "Good evening";
    } else if (h > 12 && h < 15) {
        document.getElementById("greeting").innerHTML = "Good afternoon";
    } else {
        document.getElementById("greeting").innerHTML = "Good morning";
    }

}