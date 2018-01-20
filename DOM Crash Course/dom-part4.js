var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterText);

function filterText(e) {
    // convert input text into lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
    // Get all lis
    var items = document.getElementsByTagName('li');
    console.log(items);
    // Convert HTMLCollection into array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        console.log(e);
        console.log(e.target);
        if(confirm("Are you sure?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function addItem(e) {
    e.preventDefault();
    // console.log(e.type);
    // console.log(e);
    
    // Get new item from input
    var newItem = document.getElementById('item').value;
    // console.log(newItem.textContent);

    if(newItem === "") return;

    // Create new li element
    var li = document.createElement('li');
    // Add class to li element
    li.className = 'list-group-item';
    // Add text node with input value to li element
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    var delButton = document.createElement('button');
    // Add classes to delButton
    delButton.classList = "btn btn-danger btn-sm float-right delete";
    // Add text node to delButton
    delButton.appendChild(document.createTextNode('Delete'));
    // Add delButton to li element
    li.appendChild(delButton);

    // console.log(delButton);

    itemList.appendChild(li);
}