(function() {
  loadStyle("/assets/styles/docs_page.css");
  document.getElementById("app").innerHTML = "";
  var header = loadSection("docs_header");
  var page = loadSection("docs_landing");
  var footer = loadSection("docs_footer");
  document.getElementById("app").innerHTML = header + page;
  document.getElementById("docs_page_content").innerHTML += footer;
  finishLoading();
})();