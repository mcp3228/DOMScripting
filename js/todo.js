(function () {
    "use strict";
    // SELECTING ELEMENT IS HERE
    const btnAdd = document.getElementById("additems");
    const inputEntry = document.getElementById("inputItem");
    const btnOk = document.getElementById("ok");
    const checklist = document.getElementById("checklist");
    const ulitems = document.querySelectorAll("ul li");

    for (let i = 0; i < ulitems.length; i++) {
        ulitems[2].addEventListener("click", function () {
            if (ulitems[2].innerHTML == "delete") {
                checklist.innerHTML = localStorage.clear();
            }
        })
    }

    // EVENT LISTENER TO ELEMENT SELECTED
    btnAdd.addEventListener("click", showOff);
    inputEntry.addEventListener("keypress", addTo);
    btnOk.addEventListener('click', addToo);

    // to show the input
    function showOff() {
        'use strict';
        if (inputEntry.className == "hide") {
            inputEntry.className = "show";
            btnOk.className = 'show';
            inputEntry.value = "";
        }
    }
    // to add element to the list when enter press
    function addTo(event) {
        'use strict';
        if (event.which == 13 && this.value) {
            checklist.innerHTML += "<li>" + inputEntry.value + "</li>";
            localStorage.checklist += "<li>" + inputEntry.value + "</li>";
            inputEntry.className = "hide";
            btnOk.className = 'hide';
        }
    }
    // to add element to the list when OKButton press || click
    function addToo() {
        if (inputEntry.value) {
            checklist.innerHTML += "<li>" + inputEntry.value + "</li>";
            localStorage.checklist += "<li>" + inputEntry.value + "</li>";
            inputEntry.className = "hide";
            btnOk.className = 'hide';
        }
    }

    /* code for the footer button*/
    var showBottom = document.getElementById("show-bottom");
    var ulFooter = document.getElementById("ulfoot");
    showBottom.addEventListener("click", showBottomFooter);
    function showBottomFooter() {
        if (ulFooter.className == 'hide') {
            ulFooter.className = '';
        } else {
            ulFooter.className = 'hide';
        }
    }
    window.addEventListener("load", function () {
        // the value of chkecklist will be this value
        if (!localStorage.checklist)
            return false;
        checklist.innerHTML = localStorage.checklist;
    })
}())
