// Write your code here!
var bodyElement = document.body;
const mainNode = document.getElementById('main');
mainNode.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Klif is the champion";

// Use insertBefore to prepend the new child to the body
bodyElement.insertBefore(newHeader, bodyElement.firstChild);