// Write your code here!


//remove the DOM node main
main.remove();

//has a 'newHeader' variable that points to an <h1> node
//the 'newHeader' variable that points to the <h1> node has an id of 'victory'
//<h1> with id 'victory' includes the text "is the champion"
const newHeader = document.createElement("h1");
newHeader.id="victory"
newHeader.textContent="is the champion"
document.body.append(newHeader);
element.append(newHeader);
