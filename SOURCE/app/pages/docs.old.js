function createDocsPage() {

  loadStyle("/assets/styles/docs_page.css");

  createDocsSidebar();

  createDocsMain();

  finishLoading();
}

function createDocsSidebar() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add('docs_sidebar');

  // and give it some content
  const newContent = document.createTextNode("A^O_DOCS SideBar Area");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  document.getElementById('app').appendChild(newDiv);
}

function createDocsMain() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add('docs_content');

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings! Welcome to the landing page of A^O_DOCS");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  document.getElementById('app').appendChild(newDiv);
}

createDocsPage();