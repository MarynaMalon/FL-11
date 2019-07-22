let rootNode = document.getElementById('root');
let addButton = document.getElementById('addButton');
let inputValue = document.getElementById('newAdd').value;

addButton.onclick = 
function newAction() {
    let li = document.createElement('li');
    li.className = 'listclass';
    let inputValue = document.getElementById('newAdd').value;
    li.innerHTML = '<input type="checkbox" class="checkIcon" onchange="checkme()">' + inputValue +
    '<i onclick="editAction()" class="material-icons" id="editIcon">create</i>' + 
    '<i onclick="deleteAction()" class="material-icons" id="deleteIcon">delete</i>';
    const liMax = 10;
    let ul = document.getElementById('myList');
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

function checkme() {
    let c = document.getElementsByClassName('checkIcon');
    if (c.checked) {
        document.getElementsByClassName('checkIcon').disabled = true;
    }
}

function editAction() {
    let inputbox = Element.getElementsByTagName('input');
    let type = document.getElementsByTagName('input').type;
    type = 'text';
}