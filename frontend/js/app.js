(function() {
  'use strict';
  angular.module('iMotoApp', ['ui.router'])
    .config(MainRouter)

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('motorcycles', {
          url: '/motorcycles',
          templateUrl: 'motorcycles.html',
          controller: 'MotorcyclesController'
        })
        .state('detail', {
          url: '/detail/:id',
          templateUrl: 'motorcycles-detail.html',
          controller: 'MotorcyclesDetailController'
        });
      $urlRouterProvider.otherwise('/motorcycles');
    }
})();
