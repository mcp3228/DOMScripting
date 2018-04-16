(function(){
// SELECTING ELEMENT IS HERE
var btnAdd = document.getElementById("additems");
var inputEntry = document.getElementById("inputItem");
var ok = document.getElementById("ok");
var checklist = document.getElementById("checklist");
 

// EVENT LISTENER TO ELEMENT SELECTED
btnAdd.addEventListener("click", showOff);
inputEntry.addEventListener("keypress",  addTo);
ok.addEventListener('click', addToo);

function showOff() {
     'use strict';
      if(inputEntry.className =="hide") {
         inputEntry.className = "show";
         ok.className = 'show';
        inputEntry.value = "";
    }
}
function addTo() {
        'use strict';
        if(event.which == 13 && this.value)  {
            checklist.innerHTML +=  "<li>" + inputEntry.value + "</li>";
            inputEntry.className ="hide";
            ok.className = 'hide';
        } 
    }
    function addToo() {
       if(inputEntry.value) {
          checklist.innerHTML +=  "<li>" + inputEntry.value + "</li>";
          inputEntry.className ="hide";
          ok.className = 'hide';
       }
    }
 

/* code for the footer button*/ 
    var showBottom = document.getElementById("show-bottom");
    var ulFooter = document.getElementById("ulfoot");
    showBottom.addEventListener("click", showBottomFooter);
    function showBottomFooter() {
        if(ulFooter.className == 'hide') {
            ulFooter.className = '';
        } else {
            ulFooter.className = 'hide';
        }
    }
}())

