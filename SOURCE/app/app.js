//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

const true_origin = "http://localhost:8080"
var currentLocation = window.location.pathname;

  // Some variables setup
var ao_loader = document.getElementById("loader");
var pageScripts = document.getElementById("app_scripts_container");
var pageStyles = document.getElementById("app_styles_container");

function loadError(oError) {
  throw new URIError("The script " + oError.target.src + " didn't load correctly.");
}

function loadScript(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) { newScript.onload = onloadFunction; }
  pageScripts.appendChild(newScript);
  newScript.src = url;
}

function loadStyle(url) {
  var newStyle = document.createElement("link");
  newStyle.setAttribute("rel", "stylesheet");
  newStyle.setAttribute("type", "text/css");
  newStyle.setAttribute("href", url);
  pageStyles.appendChild(newStyle);
}

function loadSection(fileName) {
  var request = new XMLHttpRequest();
  request.open("GET", "/sections/" + fileName + ".html", false); // `false` makes the request synchronous
  request.send(null);
  if (request.status === 200) {
    return request.responseText;
  }
}

function loadPage(fileName){
  document.getElementById("app").innerHTML = loadSection(fileName);
}

function finishLoading() {
  document.body.classList.add('loaded');
}

function startLoading() {
  document.body.classList.remove('loaded');
}

function show404page() {
  loadScript("/assets/scripts/ao_modal.js", function () { loadScript("/pages/error_404.js") } );
}

function findCurrentRoute() {
  for (let i = 0; i < routes.length; i++) {
    if (currentLocation === routes[i].route) {
      routes[i].page();
      return true;
    }
    if (routes[i].routeAliases !== undefined) {
      for (let j = 0; j < routes[i].routeAliases.length; j++) {
        if (currentLocation === routes[i].routeAliases[j]) {
          routes[i].page();
          return true;
        }
      }
    }
  }
  return false;
}


document.addEventListener("DOMContentLoaded", function(event) {

  if (true_origin !== window.location.origin) {
    console.log("Origin not cool. Mkey? ");
    window.location.replace(true_origin);
  }

  loadScript("/assets/scripts/ao_router.js", function() { findCurrentRoute() ? finishLoading() : show404page() });

  loadStyle("/assets/styles/app.css");
  loadStyle("/assets/styles/modal.css");
  
});


//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀