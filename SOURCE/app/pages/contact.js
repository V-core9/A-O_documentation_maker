function createContactPage() {
  landingContactElement();

  finishLoading();
}

function landingContactElement() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.id = "landing_main";

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings! Welcome to the CONTACT page of A^O_DOCS");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");

  document.getElementById('app').appendChild(newDiv);
}

createContactPage();