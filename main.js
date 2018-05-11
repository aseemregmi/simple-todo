//
//

//Declaring tick and remove icons using template variables
let tickSVG = '<i class="fas fa-check"></i>';

let removeSVG = '<i class="fas fa-minus-circle"></i>';

document.getElementById('add').addEventListener('click', function() {
  let check = document.getElementById('input').value;

  //Call the function to add value to list if only some value is entered
  if (check) {
    addItemToToDoList();
  }
});

document.getElementById('input').addEventListener('keydown', function(e) {
  if (e.keyCode == 13) addItemToToDoList();
});

function deleteItem() {
  console.log();

  //Getting the parent element of todo task to be deleted
  let itemParent = this.parentNode.parentNode.parentNode;

  //Getting the item to be deleted;
  itemToBeDeleted = this.parentNode.parentNode;

  //Removing the item
  itemParent.removeChild(itemToBeDeleted);
}

function moveToCompleted() {
  let completed = document.getElementById('completed');

  // Getting element to be moved
  let itemToBeMoved = this.parentNode.parentNode;

  //Getting the parent element of todo task to be deleted
  let itemParent = this.parentNode.parentNode.parentNode;

  //Moving to the Completed Task
  completed.insertBefore(itemToBeMoved, completed.children[0]);
}

function addItemToToDoList() {
  // Getting the value of input box;

  let textValue = document.querySelector('#input').value;

  let toDo = document.querySelector('#todo');

  let divTag = document.createElement('div');
  divTag.className = 'todo-task';

  let paragraph = document.createElement('p');
  paragraph.className = 'task';
  paragraph.innerText = textValue;

  let buttons = document.createElement('div');
  buttons.className = 'buttons';

  let btn1 = document.createElement('button');
  btn1.innerHTML = tickSVG;

  let btn2 = document.createElement('button');
  btn2.innerHTML = removeSVG;

  //Appending created elements
  buttons.appendChild(btn1);
  buttons.appendChild(btn2);
  divTag.appendChild(paragraph);
  divTag.appendChild(buttons);

  //Append Child in such a way that new event will be listed at first
  toDo.insertBefore(divTag, toDo.children[0].nextElementSibling);

  //Reset the value in input box;
  document.querySelector('#input').value = '';

  //Add Event Listener to remove and tick buttons
  btn1.addEventListener('click', moveToCompleted);
  btn2.addEventListener('click', deleteItem);
}
