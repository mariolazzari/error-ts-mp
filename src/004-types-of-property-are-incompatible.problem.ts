
type Route = {
  path: string
  component: string | number
}

type RouteConfig = {
  routes: Route[]
}

const routingConfig: RouteConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: RouteConfig) => { };

createRoutes(routingConfig);
