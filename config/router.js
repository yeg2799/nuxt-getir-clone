module.exports = {
  middleware: ['trailingSlash'],
  extendRoutes(routes, resolve) {
    routes.splice(0, routes.length);
    routes.push(
      {
        name: 'main-page',
        path: '/',
        component: resolve('pages/index'),
      },
      {
        name: 'food-page',
        path: '/yemek',
        component: resolve('pages/food'),
      },
    );
  },
};
