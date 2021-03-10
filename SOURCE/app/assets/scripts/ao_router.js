//DEMO ROUTES

var routes = [{
  route: "/",
  routeAliases: ["/index", "/index.html"],
  page() {
    loadStyle("/assets/styles/home_page.css")
    loadStyle("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
    loadPage("homepage")
    loadScript("/assets/scripts/ao_shortcodes.js")
    loadScript("/assets/scripts/ao_helpers.js")
    loadScript("/assets/scripts/ao_debugger.js")
    //loadScript("/assets/scripts/ao_rcmenu.js")
    loadScript("/assets/scripts/homepage.js")
  }
},
{
  route: "/documentation",
  routeAliases: ["/docs", "/app_docs"],
  page() {
    loadStyle("/assets/styles/docs_page.css")
    loadPage("docs_full")
  }
},
{
  route: "/qmc",
  routeAliases: ["/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/qmc_md", "/qmc_me", "/qmc_az", "/qmc_min", "/qmc_ct", "/ny_qmc", "/md_qmc", "/me_qmc", "/az_qmc", "/min_qmc", "/ct_qmc", "/QmC_New_York"],
  page() {
    loadPage("qmc_full")
    loadStyle("/assets/styles/docs_page.css")
    loadScript("/assets/scripts/ao_helpers.js")
    loadScript("/assets/scripts/ao_debugger.js")
    loadScript("/assets/scripts/ao_shortcodes.js")
  }
},
{
  route: "/contact",
  page() {
    loadScript("/pages/contact.js")
  }
},
{
  route: "/register",
  routeAliases: ["/signup", "/new-account", "/register.html", "/signup.html"],
  page() {
    loadScript("/pages/contact.js")
  }
}
]
