var clickHereButton = document.getElementById('button');

// clickHereButton.addEventListener('click', function() {
//     alert(123);
// });

// clickHereButton.addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // console.log("Button Clicked!");

//     // var headerTitle = document.getElementById('header-title');
//     // headerTitle.textContent = "Header Title Changed!";
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = "<h2>" + e.target.className + "</h2>";

//     // console.log(e.type);

//     // from the browser prespective
//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // from the element prespective
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
    
// }

// clickHereButton.addEventListener('dblclick', runEvent);
// clickHereButton.addEventListener('mouseup', runEvent);
// clickHereButton.addEventListener('mousedown', runEvent);

var testArea = document.getElementById('test-area');

// testArea.addEventListener('mouseenter', runEvent);
// testArea.addEventListener('mouseleave', runEvent);

// testArea.addEventListener('mouseover', runEvent);
// testArea.addEventListener('mouseout', runEvent);

function runEvent(e) {
    console.log("Event Type: " + e.type);
    console.log(e.target.value);
}

testArea.addEventListener('mousemove', trackMouse);

function trackMouse(e) {    
    var output = document.getElementById('output');
    output.innerHTML = "<h2>MouseX: " + e.clientX + ", MouseY: " + e.clientY + "</h2>";
    testArea.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
}

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent); // keyup, keypress, focus, blur

// itemInput.addEventListener('cut', disappearBody); // paste, input

// function disappearBody(e) {
//     document.body.style.display = 'none';
// }

var selectList = document.querySelector('select');
selectList.addEventListener('change', runEvent);

form.addEventListener('submit', formSubmitted);

function formSubmitted(e) {
    e.preventDefault();
    console.log("Event Type: " + e.type);
}