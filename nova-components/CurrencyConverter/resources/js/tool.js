Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'currency-converter',
      path: '/currency-converter',
      component: require('./components/Tool'),
    },
  ])
})
