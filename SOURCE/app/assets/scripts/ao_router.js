var currentLocation = window.location.pathname;

function show404page() {
    alert('ERROR_404 page not found!')
}

function findCurrentRoute() {
    var pageFound = false;
    for (let i = 0; i < routes.length; i++) {
        if (currentLocation === routes[i].route) {
            routes[i].page();
            pageFound = true;
        }

        if (routes[i].routeAliases !== undefined) {
            for (let j = 0; j < routes[i].routeAliases.length; j++) {
                if (currentLocation === routes[i].routeAliases[j]) {
                    routes[i].page();
                    pageFound = true;
                }
            }
        }

    }
    if (!pageFound) {
        show404page();
    }

    return pageFound;
}

//DEMO ROUTES

var routes = [
    {
        route: "/",
        routeAliases: ["/index", "/index.html"],
        page: function () {
            loadScript("/pages/home.js");
        }
    },
    {
        route: "/documentation",
        routeAliases: ["/docs", "/app_docs"],
        page: function () {
            loadScript("/pages/docs.js");
        }
    },
    {
        route: "/contact",
        page: function () {
            loadScript("/pages/contact.js");
        }
    }
]
