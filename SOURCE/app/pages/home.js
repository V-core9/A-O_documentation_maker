
function page(){
    // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings! Welcome to the landing page of A^O_DOCS");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");

  document.getElementById('app').appendChild(newDiv);

  finishLoading();
}

page();