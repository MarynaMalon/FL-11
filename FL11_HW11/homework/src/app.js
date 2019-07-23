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
    '<i onclick="editAction()" class="material-icons" id="editIcon">create</i>' + 
    '<i onclick="deleteAction()" class="material-icons" id="deleteIcon">delete</i>';
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
event.currentTarget.parentElement.remove();
}




