// selecting elements on item
var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");
// loop through item
for (var i = 0; i < items.length; i++) {
    // add item an event to each item selected
    items[i].addEventListener("click", doItem);
    inputs[i].addEventListener("blur", upDatedItem)
    inputs[i].addEventListener("keypress", itemPress)
}
// this event is to apply to show
function doItem() {
   this.className = "edit";
   var input = this.querySelector("input");
   input.focus();
   input.setSelectionRange(0, input.value.length);
}
function upDatedItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemPress(event) {
    if(event.which === 13) {
        upDatedItem.call(this);
    }
}

var mli = document.getElementById("lihere");
mli.addEventListener("click", makeInput)

function makeInput() {
    var minput = document.createElement("input");
    var myatt = document.createAttrib
     minput.appendChild(myatt);
    var ul = document.getElementById('clickhere');
    ul.appendChild(minput);

}