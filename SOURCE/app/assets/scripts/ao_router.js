function show404page() {
    alert('ERROR_404 page not found!')
}


function findCurrentRoute() {
    var pageFound = false;
    for (let i = 0; i < routes.length; i++) {
        const element = routes[i];
        if (currentLocation === element.route) {
            element.page();
            pageFound = true;
        }

        if (element.routeAliases !== undefined) {
            for (let j = 0; j < element.routeAliases.length; j++) {
                const alias = element.routeAliases[j];
                if (currentLocation === alias) {
                    element.page();
                    pageFound = true;
                }
            }
        }

    }
    if (!pageFound) {
        show404page();
    }

    return pageFound;
};


//DEMO ROUTES

var routes = [
    {
        route: "/",
        routeAliases: ['/index', '/index.html'],
        page: function () {
            //alert('homePage Found in routes');
            loadScript('/pages/home.js');
        }
    },
    {
        route: "/documentation",
        routeAliases: ['/docs', '/app_docs'],
        page: function () {
            loadScript('/pages/docs.js');
        }
    },
    {
        route: "/contact",
        page: function () {
            loadScript('/pages/contact.js');
        }
    }
]

var currentLocation = window.location.pathname;
