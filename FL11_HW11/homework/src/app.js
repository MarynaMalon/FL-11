let rootNode = document.getElementById('root');
let addButton = document.getElementById('addButton');
let inputValue = document.getElementById('newAdd').value;
let ul = document.getElementById('myList');
const liMax = 10;

addButton.onclick = 
function newAction() {
    let li = document.createElement('li');
    li.className = 'listclass';
    let inputValue = document.getElementById('newAdd').value;
    
    if(inputValue!==''){

    li.innerHTML = '<input type="checkbox" class="checkIcon" onchange="checkme()">' + inputValue +
    '<span class="editIcon"><i onclick="editAction()" class="material-icons">create</i></span>' + 
    '<span class="deleteIcon"><i onclick="deleteAction()" class="material-icons">delete</i></span>';
    let listLength = ul.getElementsByClassName('listclass').length;
    if (listLength === liMax) {
        document.getElementById('notification').innerHTML = 'Maximum item per list are created!';
        document.getElementById('addButton').disabled;
        document.getElementById('newAdd').disabled = true;
    } else {
        document.getElementById('myList').appendChild(li);
    }
    document.getElementById('newAdd').value = '';
}
}

function checkme() {
    let c = document.getElementsByClassName('checkIcon');
for (let i = 0; i < c.length; i++) {
    if (c[i].checked) {
        c[i].disabled = true;
    }
}
}

function deleteAction(){
event.currentTarget.parentElement.parentElement.remove();
}

function editAction(){
 let li = event.currentTarget.parentElement.parentElement;
 li.innerHTML = '<input type = "text" id = "inputTochange"><i class="material-icons" id="saveIcon">save</i>'

 let saveButton = document.getElementById('saveIcon');
 let inputTochange = document.getElementById('inputTochange');

 saveButton.onclick = function(){
 let text = inputTochange.value;
 li.innerHTML = '<input type="checkbox" class="checkIcon" onchange="checkme()">' + text +
  '<span class="editIcon"><i onclick="editAction()" class="material-icons">create</i></span>' + 
 '<span class="deleteIcon"><i onclick="deleteAction()" class="material-icons">delete</i></span>';
 }
}




