//DEMO ROUTES

var routes = [{
    route: "/",
    routeAliases: ["/index", "/index.html"],
    page() {
      loadScript("/pages/home.js");
    }
  },
  {
    route: "/documentation",
    routeAliases: ["/docs", "/app_docs"],
    page() {
      loadScript("/pages/docs.js");
    }
  },
  {
    route: "/qmc",
    routeAliases: ["/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/QmC_New_York"  ],
    page() {
      loadScript("/pages/qmc.js");
    }
  },
  {
    route: "/contact",
    page() {
      loadScript("/pages/contact.js");
    }
  }
];
