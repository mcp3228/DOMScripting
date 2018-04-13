// second way to it
// selecting the header
var subHeading = document.getElementsByClassName("subheadline");
var slen = subHeading.length;
var para = document.getElementsByTagName("p");
var btn = document.getElementById("buttonmode");
var wrapper =document.getElementById("wrapper");
var tt = document.getElementById("time")

var timeNow = new Date();
tt.innerHTML = timeNow
btn.addEventListener("click", changeBack)
 // lop through all the subheadthin
 // add en event to each
for (var i = 0; i < slen; i++) {
    subHeading[i].addEventListener("click", showOn)
}
function showOn() {
    // this refer to the subheading clicked
   if(this.nextElementSibling.className == "hide") {
      this.nextElementSibling.className = "";
   } else {
        this.nextElementSibling.className = "hide"
   }

}
// just change the background 
function changeBack() {
    if(wrapper.style.background == "") {
        // if the parent of the wrapper
        wrapper.style.background = "black";
        wrapper.style.color = "white";
        btn.textContent = "daylight";
    } else {
        wrapper.style.background = "";
        wrapper.style.color = "#545454";
        btn.textContent = "nightmode";
    }
}
window.addEventListener("load", changeElse);
 function changeElse() {
   if(timeNow.getHours() >= 17) {
    changeBack();
   }
 }

