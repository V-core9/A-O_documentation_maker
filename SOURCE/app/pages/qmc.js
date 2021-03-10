(function() {
  loadStyle("/assets/styles/docs_page.css");
  loadScript("/assets/scripts/ao_helpers.js", function() { /* testModalFunc(); */ });
  loadScript("/assets/scripts/ao_debugger.js", function() { /* testModalFunc(); */ });
  loadScript("/assets/scripts/ao_shortcodes.js", function() { /* testModalFunc(); */ });
  document.getElementById("app").innerHTML = loadSection("qmc_full");
  finishLoading();
})();