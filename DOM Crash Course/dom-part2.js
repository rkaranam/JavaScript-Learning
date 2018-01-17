// Traversing the DOM

var itemList = document.querySelector('#items');

// console.log(itemList);

// parentNode
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = "#f4f4f4";

// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);

// parentNode and parentElement can be interchangable

// childNodes
// Takes line breaks as text nodes
// console.log(itemList.childNodes); 

// children
// console.log(itemList.children);

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'coral';

// firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Raja Sekhar';

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Karanam';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(document.getElementById('main-header').nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';


// createElement
var newDiv = document.createElement("div");

// add a class
newDiv.className = "greeting";

// add an id
newDiv.id = 'greet';

// add attributes
newDiv.setAttribute('message', 'Hello all!');

console.log(newDiv);

// create text node
var newDivText = document.createTextNode('Hello World');

// append created text node to already created div
newDiv.appendChild(newDivText);

// insert whole div into DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header #header-title');

container.insertBefore(newDiv, h1);
