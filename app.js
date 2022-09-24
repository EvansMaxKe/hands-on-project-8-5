/* declaring the array that will hold all the list items */
var list = [];
//function to generate list
function generateList() {
//get all list items
var listItems = document.getElementsByTagName("li");
//applying for loop
for (var i = listItems.length - 1; i >= 0; i--) {
document.getElementsByTagName("ol")[0].removeChild(listItems[i]);
}
//applying for loop
for (var i = 0; i < list.length; i++) {
var newItem = "<button class='first'>first</button>" + "<span class='last'>last</span>"+ 
list[i];
/* creating the action buttons : first and last buttons*/
var newListItem = document.createElement("li");
newListItem.innerHTML = newItem;//set text
document.getElementsByTagName("ol")[0].appendChild(newListItem);
var firstButtons = document.querySelectorAll(".first");
var lastFirstButton = firstButtons[firstButtons.length - 1];
 var lastButtons=document.querySelectorAll(".last");
var lastLastButtons=lastButtons[lastButtons.length - 1];  
if (lastFirstButton.addEventListener) {
lastFirstButton.addEventListener("click", moveToTop, false);
 lastLastButtons.addEventListener("click", moveToBottom, false);  
}
else if (lastFirstButton.attachEvent) {
lastFirstButton.attachEvent("onclick", moveToTop);
 lastLastButtons.attachEvent("onclick", moveToBottom);  
}
}
}

//this function will add eventListener for button

function createEventListener(){
    //get the button
    var addButton= document.getElementById("button");

    if (addButton.addEventListener) {
        addButton.addEventListener("click", addItem, false);
    }
    else if (addButton.attachEvent) {
        addButton.attachEvent("onclick", addItem);
    }
}

//function to add item
function addItem(){
    //get the textbox element with id as newItem
    var newItem=document.getElementById("newItem");
    list.push(newItem.value); //add element into the array
    newItem.focus(); //set focus to the textBox
    newItem.value="";
    //call function generationList()
    generateList();

}

/* function to move the item in the list to the bottom */

function moveToBottom(evt){
    if (evt===undefined) {
        evt=window.event;
    }

    var callerElement=evt.target || evt.srcElement;
    var listItems= document.getElementsByTagName("li");

    //this get the parent element of first button
    var parentItem=callerElement.parentNode;

    //using for loop with search method
    for(var i=0; i<list.length;i++){
        if (parentItem.innerHTML.search(list[i]) !==-1) {
            //uses slice() method to slice the element from the array
            var itemToMove=list.splice(i,1);

            list.push(itemToMove); //this will add the new element at the start of the array

        }
    }
    generateList();
}


//function to move item in the list to the top
function moveToTop(evt){
    if (evt===undefined) {
        evt=window.event;
    }

    var callerElement=evt.target || evt.srcElement;
    var listItems= document.getElementsByTagName("li");
    var parentItem=callerElement.parentNode;

    //implementing search method on for loop
    for(var i=0; i<list.length;i++){
        if (parentItem.innerHTML.search(list[i]) !==-1) {
            //uses slice() method to slice the element from the array
            var itemToMove=list.splice(i,1);

            list.unshift(itemToMove); //this will add the new element at the start of the array

        }
    }
    generateList();
}

/* adding action listeners of the window */
if (window.addEventListener) {
window.addEventListener("load", createEventListener, false);
}
else if (window.attachEvent) {
window.attachEvent("onload", createEventListener);
}