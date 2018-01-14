// Examine the document object

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = "Raja Sekhar K";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.all);

// console.log(document.all[10]);

// document.all[10].textContent = "Changed Header";

// console.log(document.links);
// console.log(document.forms);

// getElementById //
var headerTitle = document.getElementById('header-title');
var header = document.getElementById("main-header");
console.log(headerTitle);

// headerTitle.textContent = "Get Element By Id";

console.log(headerTitle.textContent);
console.log(headerTitle.innerText); // Inner text plays attention to the styling

var headerSubtitle = document.getElementById("header-subtitle");

headerSubtitle.innerHTML = "<b>Woohoo!</b>";

headerSubtitle.style.borderBottom = "solid 2px #000";

header.style.border = "dashed 1px #202";

// getElementsByClassName //
var items = document.getElementsByClassName("list-group-item");
console.log(items);

// Change styles of item 2
items[1].textContent = "Styled Item 2";
items[1].style.backgroundColor = "Yellow";
items[1].style.fontWeight = "bold";

// items.style.backgroundColor = "#f4f4f4"; Not works as items is a HTMLCollection and we need to loop for each item

for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "#f4f4f4";
}

// getElementsByTagName //
var allDivs = document.getElementsByTagName("div");
console.log(allDivs);

// querySelector //
var lis = document.querySelector(".list-group-item");
console.log(lis); // displays only the first item

lis.style.backgroundColor = "pink";

var input = document.querySelector("input");
input.value = "Hello World!";

var submit = document.querySelector("input[type='submit']");
submit.value = "Send";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = 'green';

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = 'blue';

// querySelectorAll //

var allLis = document.querySelectorAll('.list-group-item');
console.log(allLis);

// alternate background colors to lis

var oddItems = document.querySelectorAll("li:nth-child(odd)");

for(var i = 0; i < oddItems.length; i++) {
    oddItems[i].style.backgroundColor = "#ccc";
}
 


